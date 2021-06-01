---
title: State in React
slung:
path: '/blog/state-in-react'
date: 2020-4-4
published: false
featuredImage:
tags: ["web development", "react", "react concepts"]
---

This article is going to look at how to access and manipulate state in a functional component and in a class component. I worked on most of this refernecing the React docs [here](https://reactjs.org/docs/state-and-lifecycle.html).

You can view the code at this [Codesandbox](https://codesandbox.io/s/state-in-react-j49m7).

I would also recommend [this video](https://www.youtube.com/watch?v=O6P86uwfdR0) as an introduction to hooks.


This article assumes that you, the reader, understands the basics of React, state management and component structure (Meaning that you have only read about it or been in contact with it once or twice). It is also a exploration for myself on what the difference is within the two different types of components.

Starting with the Class component, state is created by calling a constructor method and setting the state to an object. This method is a OOP concept, quite literally constructing the class structure. An important note is that the constructor is called before the component is mounted.

```
    constructor(props) {
        super(props);
        this.state = {
        songs: [
            { name: "Woman", artist: "Wolfmother" },
            { name: "Changes", artist: "David Bowie" }
        ]
        };
    }
```

The state object now has an attribute called songs which is an array of objects. The React say that a constructor is used for initializing a local state like I did in my Class component, or for binding a event handler to an instance. Remember to not use *setState()* in the constructor, instead use *this.state*, and save the setState function for all other methods where the attribute of state isn't assigned directly by using *this.setState()*. 


In the functional component this looks quite different. It uses a hook instead of a . The hook you use for the the state is *useState*, see the docs on it [here](https://reactjs.org/docs/hooks-reference.html#usestate). 

Setting the state looks like:

```
    const [songs, setSongs] = React.useState([{name: "The Chain", artist: "Fleetwood Mac"}, {name: "Song Number 5", artist: "Haim"}]);
```

Which sets the list of songs to an array of objects as well.

So wheres the change change besides the setup? A constructor is called on the creation of the class in classic OOP. But the *useState* hook runs every time the function is called.

Which is my case is in render the component in the main page.

So in conclusion you would use this for a class component

```
    this.state = {
      songs: [
        { name: "Woman", artist: "Wolfmother" },
        { name: "Changes", artist: "David Bowie" }
      ]
    };
```

Or this, for a functional component:

```
    const [songs, setSongs] = React.useState([{name: "The Chain", artist: "Fleetwood Mac"}, {name: "Song Number 5", artist: "Haim"}]);
```