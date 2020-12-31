---
title: Hack Number One - Chartkick
slug: 
path: '/blog/hack-number-one'
date: 2020-11-06
published: true
featuredImage: 
tags: ["hacks", "web development"]
---

While working on Circe, an academic analytical dashboard I found something interesting about using Chartkick and Chart.js. Using the documented method it would be: 

` <%= column_chart Model.group_by_custom_method, colors: ["#3D71BF", "#3DC7A6"], class: "chart",  width: "300px", height: "250px" %> `

Building a column graph with multiple colors is actually pretty weird. So here's the hack:

` <%= column_chart Model.group_by_custom_method, colors: [["#3D71BF", "#3DC7A6"]], class: "chart",  width: "300px", height: "250px" %> `

You place the array of colors, in another array. Strange right? I found this answer on Stack Overflow. Hopefully will be able to link it later when I find it again. 