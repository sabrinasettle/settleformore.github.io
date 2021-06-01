---
title: An Intro to Web APIs
slug: 
path: '/blog/intro-to-web-apis'
date: 2020-11-23
published: true 
featuredImage: 
tags: ["starting out", "web development"]
---

Intro to APIs 
Recently I had a friend reach out to talk to me about APIs. It was unsurprising since they had spoken to me at the beginning of 2020 about changing into the tech sector by learning code at home. They asked great questions about languages and, unusually, they were interested in my enthusiastic explanations. You find that being into code and computers puts many into an uneasy disoriented haze while you talk about those subjects. But this friend was confused by Web APIs. What did they return? How did you use one? 

In this article, I will discuss the answers to those two questions.

First and foremost, API stands for Application Programming Interface. Let's break this down a bit:

Application - This is the structure, Application (or app for short) is synonymous with a program or group of programs designed for end-users.

Programming - Kinda obvious but, it really means we are dealing with a program and program actions (see methods and requests below)

Interface - While User Interface comes to mind it's actually more about simple interaction with the programming action.
 
Wikipedia describes it very well, "It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. It can also provide extension mechanisms so that users can extend existing functionality in various ways and to varying degrees."[^1]

Lets get into understanding the term *requests*: Requests are the call to the API, usually only one at a time much like calling a person's name. There are [four popular structures](https://rapidapi.com/blog/types-of-apis/) for APIs, I will be talking about REST.
In [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) APIs we can see this separation take place in the types of calls, though this also has something to do with Hypertext Transfer Protocol ([HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)) as well, though REST is not a protocol itself, but more "it is a set of architectural principles"[^2]. Guidelines for RESTful requests are documented in technical documentation. For Open APIs often the documentation provides the url to call and any required or extra parameters including headers for authenication. Now I have just used two terms a *call* and a *request*, why? Are the same? Pretty much! We make a *call* to the server OR we make a *request* to the server.

By design, API calls are an abstraction, objects and actions are allowed or disallowed because of [information hiding](linkhttps://en.wikipedia.org/wiki/Information_hiding). Information hiding is an important part of object-oriented programming (called *encapsulation*) and dividing software into modules of functionality. This can protect data and the way its stored and if it can be stored, giving the interface for the user a clear structure.

Ok, so lets break this down:

1. Endpoint - This is the location to which the request is sent. Can look like, 'https://v2.org/', or have a place for a parameter like 'https://v2.org/{id}/'.

2. Request Methods -
    Most likely to see:
        GET - One of the most popular requests. Retrieves information about a resource.
        POST - Create or update a resource.
        PUT - Also creates or updates a resource. But this one is idempotent, meaning that the request can be called multiple times without creating a new resource each time.
        PATCH - Applies partial modifications to a resource.
        DELETE - Deletes a resource.

3. Headers - Represents the meta-data. Most headers will need values or assertions set to make sure the correction data and headers are returned.

4. Data or Body - This object is sent on success or on failure.

## In Practice

Knowing that there are endpoints and requests. Lets use an example in a [curl](https://linuxize.com/post/curl-command-examples/) command (That way we bypass a project or framework and avoid programming language complications):

```
    curl -v https://www.affirmations.dev/
```

The output being,
```
    * Trying 3.216.182.123...
    * TCP_NODELAY set
    * Connected to www.affirmations.dev (3.216.182.123) port 443 (#0)
    * ALPN, offering h2
    * ALPN, offering http/1.1
    * successfully set certificate verify locations:
    * CAfile: /etc/ssl/cert.pem
    CApath: none
    * TLSv1.2 (OUT), TLS handshake, Client hello (1):
    * TLSv1.2 (IN), TLS handshake, Server hello (2):
    * TLSv1.2 (IN), TLS handshake, Certificate (11):
    * TLSv1.2 (IN), TLS handshake, Server key exchange (12):
    * TLSv1.2 (IN), TLS handshake, Server finished (14):
    * TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
    * TLSv1.2 (OUT), TLS change cipher, Change cipher spec (1):
    * TLSv1.2 (OUT), TLS handshake, Finished (20):
    * TLSv1.2 (IN), TLS change cipher, Change cipher spec (1):
    * TLSv1.2 (IN), TLS handshake, Finished (20):
    * SSL connection using TLSv1.2 / ECDHE-RSA-AES128-GCM-SHA256
    * ALPN, server accepted to use http/1.1
    * Server certificate:
    *  subject: CN=www.affirmations.dev
    *  start date: Feb 20 23:43:43 2021 GMT
    *  expire date: May 21 23:43:43 2021 GMT
    *  subjectAltName: host "www.affirmations.dev" matched cert's "www.affirmations.dev"
    *  issuer: C=US; O=Let's Encrypt; CN=R3
    *  SSL certificate verify ok.
    > GET / HTTP/1.1
    > Host: www.affirmations.dev
    > User-Agent: curl/7.64.1
    > Accept: */*
    >
    < HTTP/1.1 200 OK
    < Server: Cowboy
    < Connection: keep-alive
    < X-Powered-By: Express
    < Content-Type: application/json; charset=utf-8
    < Content-Length: 47
    < Etag: W/"2f-cA6SQFph4kS607FbNVTCEJPgoRw"
    < Date: Fri, 05 Mar 2021 21:57:55 GMT
    < Via: 1.1 vegur
    <
    * Connection #0 to host www.affirmations.dev left intact
    {"affirmation":"You're resourceful and clever"}* Closing connection 0
```

This curl of the [Affirmations API](https://github.com/annthurium/affirmations) produces an object:

```
    {"affirmation":"You're resourceful and clever"}
```

Which is exactly what we want! The curl command is just a taste of what happens. Because of being a command you can script it in and work with data that way if you want. That curl request doesn't include a parameter like a resource id or name so its just a simple GET request.

When my friend asked "What does it return?", here's the answer:

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
Or in the curl example the  object. And a error response could look like:
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
201 Created — Successfully created a new resource.
202 Accepted — The request has been accepted for processing, but the processing has not been completed.
203 Partial Information — indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from the original server.


Error codes tend to be in the format of 4xx or 5xx. And they are:

400 Bad Request — Client sent an invalid request — such as lacking required request body or parameter
401 Unauthorized — Client failed to authenticate with the server
403 Forbidden — Client authenticated but does not have permission to access the requested resource
404 Not Found — The requested resource does not exist
412 Precondition Failed — One or more conditions in the request header fields evaluated to false
500 Internal Server Error — A generic error occurred on the server
503 Service Unavailable — The requested service is not available

As you foray into APIs these codes will tell you a lot about the successes and failures of the requests you make. 

### Conclusion

To sum up, RESTful APIs are a programming interface where you make requests to endpoints via HTTP methods that return messages and objects from the original server. They so fun and have inspired some amazing projects.

## Footnotes

[^1] https://en.wikipedia.org/wiki/API
[^2] https://rapidapi.com/blog/types-of-apis/

## References
[HTTP codes](https://www.w3.org/Protocols/HTTP/HTRESP.html)
[Community Discussion on JSON response formats](https://stackoverflow.com/questions/12806386/is-there-any-standard-for-json-api-response-format)
[JSON Documentation on building APIs](https://jsonapi.org/)