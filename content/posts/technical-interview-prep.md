---
title: Technical Interview Prep
slug: 
path: '/blog/technical-interview-prep'
date: 2021-02-14
published: true
featuredImage: 
tags: ["web development", "algothrims"]
---

So algorithms, fun right? Actually before this prep I found this part of Computer Science to be "beyond" me. I found it confusing and I thought I was too right brained to understand it.

But really I had people who were not experienced enough on the subject teach me these concepts. This means that I was missing key aspects.

I wanna start by defining something important.

### Algorithm
/ˈalɡərɪð(ə)m/
*noun*
> a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

This means that a coding problem that asks you to find how many pages are in a chapter has an algorithm. Or a method to update users in a database has an algorithm.

It's as simple as that. 

<a href="https://imgflip.com/i/4xn7wz"><img src="https://i.imgflip.com/4xn7wz.jpg" title="made at imgflip.com"/></a>

All this code is public and can be found at https://repl.it/@vbb123/Algorithms.

## Binary Search

This search only works on a previously sorted array. And the search happens by dividing the array in two (hence the "binary") by creating a left and a right of a "mid" or median. Using a target value that you are searching for the algorithm searches only one, left or right, for the target.

A very simple implentation would be:

```
def binarySearch(arr, target)
  arr.bsearch {|e| e <=> target}
end
```
Breakdown:
I used bsearch with a block with a spaceship operator.

A note about Spaceship Operators:
Used independently, it will return 1, 0, or -1 depending if the left value is greater than, equal or less than the value of the right.

So heres a more complex version:

```
def binarySearch(arr, target)
    left_most = 0
    right_most = arr.length - 1
  
    while left_most <= right_most
        mid = (left_most + right_most) / 2
        # p "value: #{arr[mid]} mid: #{mid}"
        if arr[mid] == target
            return "index of #{target} is #{mid}"
        elsif target > arr[mid]
            left_most = mid + 1
        elsif target < arr[mid]
            right_most = mid - 1
        else
            return "#{target} isnt in the array"
        end
    end
end
```
Breakdown:
The premise of this search is to divide and conquer, this happens by setting a mid point to the array. Since its sorted we can gauge which side we need to be on by the mid point. Target is more than the value at mid? the left most is now mid + 1. Target is less than the value at mid? the right most is now mid - 1. 

### O notation

- Best: O(1)
- Worst: O(log n)
- Average: O(log n)

## Quick Sort
```
def quicksort(*arr)
    # edge case
    return arr if arr.length <= 1

    # find the pivot
    pivot = arr.delete_at(rand(arr.size))
    left, right = arr.partition {|x| x < pivot}
    return *quicksort(*left), pivot, *quicksort(*right)
end
```

Breakdown:
```
    *arr
```
This parameter opens the method to using multiple parameters without defining the specific parameters.

```
    pivot = arr.delete_at(rand(arr.size))
```
Quicksort relies on a pivot, which can be chosen 3 ways: 
1. Completely random (which is the way I use)
2. Choosing a "median of three", three random elements from the array. Then pick a median of those three. This alternative provides a more exact median for the main array.
3. Choose the last element in the array.

```
    left, right = arr.partition {|x| x < pivot}
```

I used the Enumerable#partition, and should make my own partition method in future to understand it better. 

It separates the given array by if the element is less than the pivot into left and right 

```
    return *quicksort(*left), pivot, *quicksort(*right)
```
This is the recrusive part of the algorithm. We have the function twice for both left and right as part of the return.

### O notation

- Best - O(n log n)
- Worst - O(n²)

## Merge Sort

A very simple implentation would be:

```
    arr.sort!
```

But that doesn't teach you anything because the Ruby functions hide what happens behind the scenes.

So we take a hints from the Binary Search and Quick Sort and we will divide the array and then recursively sort the array.

```
def mergeSort(arr)
  return arr if arr.size <= 1
  mid = (arr.size.to_f / 2).ceil
  # seprates the arr into two distict arrays
  # iterates through with the decrese on mid in the left array
  # also the recrusion
  left = mergeSort(arr[0..mid - 1])
  right = mergeSort(arr[mid..arr.size])
  merge(left, right)
end

def merge(left, right)
  left_last = left.size
  right_last = right.size
  if left.empty?
    right
  elsif right.empty?
    left
  elsif left.first < right.first
    # new small Array
    sa = [left.first]
    sa + merge(left[1..left_last], right)
  else
    sa = [right.first]
    sa + merge(left, right[1..right_last])
  end
end
```

Breakdown: 

Taking an array,
```
    arr = [2, 3, 5, 4, 1]
```

The first method: 

```
def mergeSort(arr)
  return arr if arr.size <= 1
  mid = (arr.size.to_f / 2).ceil
  # seprates the arr into two distict arrays
  # iterates through with the decrese on mid in the left array
  # also the recrusion
  left = mergeSort(arr[0..mid - 1])
  right = mergeSort(arr[mid..arr.size])
  merge(left, right)
end
```

In this method we get a mid/pivot position and then split the array by that point creating a left and right.

this would look like:

```
    # mid = 3
    # and left looks like:
    # [2, 3, 5]
    # and right looks like:
    # [1, 4]

    # but because of recrusion it goes:
    # L: [2], R: [3]
    # L :[2, 3], R: [5]
    # L: [2, 3, 5], R: [4]
    # L: [1], R: [4]

    # and mid continues like this:
    # 2
    # 1
    # 1
```

This left/right array combo gets handed to merge which also has recrusion.

```
def merge(left, right)
  left_last = left.size
  right_last = right.size
  if left.empty?
    right
  elsif right.empty?
    left
  elsif left.first < right.first
    # new small Array
    sa = [left.first]
    sa + merge(left[1..left_last], right)
  elsif left.first > right.first
    sa = [right.first]
    sa + merge(left, right[1..right_last])
  end
end
```

This method decreases the array on the recrusive call, based off the comparsion if whether the 

```
    # the order of left and right as input come in as:
    # [2], [3]
    # [], [3]
    # [2, 3], [5]
    # [3], [5]
    # [], [5]
    # [4], [1]
    # [4], []
    # [2, 3, 5], [1, 4]
    # [2, 3, 5], [4]
    # [3, 5], [4]
    # [5], [4]
    # [5], [] 

```
 
### O notation

- Best - O(n log n)
- Worst - O(n log n)


## Resources

https://hired.com/blog/candidates/technical-onsite-interview-guide/?utm_source=customerio&utm_medium=email&utm_campaign=(b2c)(en_7_master)(c_rejected_SWE-nurture)

https://hired.com/blog/candidates/5-ways-to-stand-out-during-your-next-technical-interview/?utm_source=customerio&utm_medium=email&utm_campaign=(b2c)(en_7_master)(c_rejected_SWE-nurture)

https://www.quora.com/What-should-I-expect-in-a-Software-Engineer-interview-at-Google-and-how-should-I-prepare/answer/Moishe-Lettvin?srid=unsVg


https://coderwall.com/p/qfh2ua/ruby-tricks-to-make-your-code-more-fun-and-less-readable

https://coderwall.com/p/vue87q/ruby-operators-names-aliases-and-uses

https://www.rubydoc.info/stdlib/core/Array:bsearch

https://apidock.com/ruby/Enumerable/partition


### Code Snippets that helped
https://gist.github.com/JonathanSpeek/225cd0c05f66ffdd4f52bef77135881a

https://stackoverflow.com/questions/32210399/binary-search-ruby

https://stackoverflow.com/questions/65461890/in-ruby-is-it-better-to-receive-array-or-to-duplicate-and-array-inside-a-metho