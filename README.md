# Simple Framework

## Why?
I am currently teaching my daughter of 9 basic HTML, CSS concenpts. She's built a website with a couple of pages, and she rolls her eyes at me everytime I ask, "Did you create an anchor tag that takes the user back to the first page?". So, I wanted to put together a simple framework to build her website inside of that made that annoying "user experience" thing not a thing.


## Goals
It wanted it to be small (a few lines of JavaScript), and use the <template> tag in which to build "pages".

## Installation
Pretty simple (use the index.html file as a template).

Include the `simple-framework.js` file at the bottom of your `index.html` file:

`<script src='simple-framework.js'></script>`

All the "pages" should be straight-up HTML inside of a `<template>` tag. The id and data-title tags are required, although currently there is no error checking to force this; it just won't work.
  
* `id`: the name of the page, all lower case
* `data-title`: the friendly name of the page (can have spaces and normal casing)
  
  For example:
  ```
  <template id="home" data-title="Home Page">
    <h1>Welcome to my page!</h1>
    <p>more stuff here</p>
  </template>
  ```
  The framework will use the id to build the navigation, and to navigate said navigation.
  
## To Do

I want to expand the framework so the navigation uses a "slug" to figure out which template to show, so pages can be linked or bookmarked. Additionally, I'd like to abstract each anchor tag in the navigation so that the user doesn't have to use `semantic-ui` as the CSS library (which is the current state as of this writing).

## Caveat/plea

This was thrown together in a short time as a cute little side project. Caveat emptor -- or caveat usor.
