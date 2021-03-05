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

1. Endpoint - This is the location to which the request is sent

2. Request Methods -
    Most likely to see:
        GET - One of the most popular requests. Retrieves information about a resource.
        POST - Create or update a resource.
        PUT - Also creates or updates a resource. But this one is idempotent, meaning that the request can be called multiple times without creating a new resource each time.
        PATCH - Applies partial modifications to a resource.
        DELETE - Deletes a resource.

3. Headers - Represents the meta-data. Most headers will need values or assertions set to make sure the correction data and headers are returned.

4. Data or Body - This object is sent on success or on failure.


Lets use an example in a curl command:

```
    curl
```



So when my friend asked "What does it return?", here's the anwser:

A response, which can include these parts:
- A status.
- An object (JSON or XTML), the returned Data if any.
- A message.

It could look like this with the object in JSON,

```
{
  "status": "success", // In true REST fashion this will not be a code, but could be depending on the design. It may not even have this status on success just the object
  "data": {
    "name": "Sabrina Settle",
    "likes_cheese": true,
  },
}
```

And a error response could look like:
```
{
    "status": "error",
    "code": 404, // This is a HTTP Code described more below
    "message" : "User does not exist"
}
```

In each of these examples I have identified that the status could be a HTTP code.

Success codes tend to be in the format 2xx. And they are:
200 OK — The request was fulfilled.

201 Created —

202 Accepted — 

203 Partial Information —



Error codes tend to be in the format of 4xx or 5xx. And they are:

400 Bad Request — Client sent an invalid request — such as lacking required request body or parameter
401 Unauthorized — Client failed to authenticate with the server
403 Forbidden — Client authenticated but does not have permission to access the requested resource
404 Not Found — The requested resource does not exist
412 Precondition Failed — One or more conditions in the request header fields evaluated to false
500 Internal Server Error — A generic error occurred on the server
503 Service Unavailable — The requested service is not available



## Footnotes

[^1] https://en.wikipedia.org/wiki/API
[^2] https://rapidapi.com/blog/types-of-apis/

## References
[HTTP codes](https://www.w3.org/Protocols/HTTP/HTRESP.html)
[Community Discussion on JSON response formats](https://stackoverflow.com/questions/12806386/is-there-any-standard-for-json-api-response-format)
[JSON Documentation on building APIs](https://jsonapi.org/)