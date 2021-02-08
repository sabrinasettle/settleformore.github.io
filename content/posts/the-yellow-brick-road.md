---
title: The Yellow Brick Road - An Intro to Web APIs
slug: 
path: '/blog/the-yelow-brick-road-intro-to-apis'
date: 2020-11-23
published: false
featuredImage: 
tags: ["starting out", "web development"]
---


Recently I had a friend reach out to talk to me about APIs. It was unsurprising since they had spoken to me at the beginning of 2020 about changing into the tech sector by learning code at home. They asked great questions about languages and, unusually, they were interested in my enthusiastic explanations. You find that being into code and computers puts many into an uneasy disoriented haze while you talk about those subjects. But getting back to it, this friend was confused by Web APIs. What did they return? How did you use one? Which in turn, led to how do you design architecture for an app? 

In this article I will discuss the first two questions and at a later time will create an article on archituel design in my limited experience as a junior programmer and while languages, frameworks, and architecture are a key part of development I wanted to write an intro to Web APIs because I remember being equally confused about them. 

I titled this article referencing the road (or APIs) that Dorothy follows through OZ to get to the Emerald City (the returning data).

First and foremost, API stands for Application Programming Interface. Let's break this down a bit:

Application - This is the structure, Application (or app for short) is synonymous with a program or group of programs designed for end-users.

Programming - Kinda obvious but, it really means we are dealing with a program and program actions (see methods and requests below)

Interface - While User Interface comes to mind it's actually more about simple interaction with the programming action.
 
Wikipedia describes it very well, "It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. It can also provide extension mechanisms so that users can extend existing functionality in various ways and to varying degrees."[^1]

Lets get into understanding the term *requests*: Requests are the call to the API, usually only one at a time much like calling a person's name. There are [four popular structures](https://rapidapi.com/blog/types-of-apis/) for APIs, I will be talking about REST.
In [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) APIs we can see this separation take place in the types of calls, though this also has something to do with Hypertext Transfer Protocol ([HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)) as well, though REST is not a protocol itself, but more "it is a set of architectural principles"[^2]. Guidelines for RESTful requests are documented in technical documentation. For Open APIs often the documentation provides the url to call and any required or extra parameters including headers for authenication. Now I have just used two terms a *call* and a *request*, why? Are the same? Pretty much! We make a *call* to the server OR we make a *request* to the server.

By design API calls are an abstraction, allowing through objects or actions because of [information hiding](linkhttps://en.wikipedia.org/wiki/Information_hiding). Information hiding is an important part of object-oriented programming (called *encapsulation*) and dividing software into modules of functionality. This can protect data and the way its stored and if it can be stored, giving the interface for the user a clear structure.

Ok, so lets break this down:
1. Endpoint -
2. Method -
    Most likely to see:
        GET -
        POST -
        PATCH -
        PUT -
        DELETE -
3. Headers -

4. Data or Body -


Lets use an example:



So when my friend asked "What does it return?", here's the anwser:

A response, which can include these parts:
- An object (JSON or XTML), the returned Data if any.
- A message.
- A status.





## Footnotes

[^1] https://en.wikipedia.org/wiki/API
[^2] https://rapidapi.com/blog/types-of-apis/