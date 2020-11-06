---
title: End of an era (and my thoughts on it) - Part One
slug: end-of-an-era-part-one
path: '/blog/end-of-an-era-part-one'
date: 2020-10-25
published: true
featuredImage: 
tags: ["web development", "systems"]
---

For the most part of 2020, I have been employed as an academics officer and staff software engineer at the experimental 42 Silicon Valley. This week I was made redundant by a move to a fully remote and online curriculum change. This move closes the campus but opens up for more part-time studies for students. On this close of a part of my life I have taken some time to just sit and gather my thoughts. 

One of my main projects during my time was adding new features to some legacy code powering a web application, which will be shut down after a time due to the campus closing. This legacy code was difficult even to work with at a simple level. It solidified my opinion that its important to understand the main concepts of a chosen framework and the languages used. Bloating Rails and making Ruby look like the logic of the C language is ridiculous in the time of Google, Medium, public libraries, and Youtube. Researching a framework is understanding that the controllers and models should stay slim in Rails, to do this: utilize the helpers, concerns, and tasks that are already in the structure of the framework.

But why is this important? Let me tell you: the technical debt. 

The amount of time for building those features took double the time because the code base was a jungle of incorrect controller names, weird join tables, and class methods that were not clear.

It also created more bugs. More future cleanup and time needed.

I know this could've (mostly) been avoided by a great base architecture and database design with considerations for scalability, and also just working properly with the framework of your choice, rather than against its conceptual principles.