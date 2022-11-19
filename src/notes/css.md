---
layout: page
order: 2
title: "Cascading Style Sheets (CSS)"
parent: "Introduction to HTML and CSS"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    parent: "{{ parent }}"
    order: "{{ order }}"
---

CSS is the language used to format and style HTML documents, it is the language we use to tell a web browser how our elements should be displayed. With it, we can control the visible properties of HTML elements such as their size, position, colour and so on. We can also control how the elements behave in relation to other browser elements, or when conditions in the web browser change.

{% panopto "6adaaf7e-ed60-44c3-b8c1-adb300d6f24b" %}

CSS stands for Cascading Style Sheets. A style sheet, or a collection of CSS used to style a document is made up of a set of CSS rules. Each rule comprises a selector and a set of CSS declarations, held inside a declaration block. Each CSS declaration consists of a CSS property, and the value to be used for that property. Taken together, a CSS rule looks like this:

```css
selector {
    property: value;
    property: value;
}
```

Selectors allow us to link the declarations in the declaration block to a particular HTML element. There are three basic types of selector, (with some minor extensions) and they can be combined in multiple ways to target specific elements or groupings of elements within an HTML page.

## HTML element selector

This uses the name (or type) of HTML element to target all elements of that type within a page. So, for example, to target all paragraphs in an HTML document and turn the text blue, we could write a rule like so:

```css
p {
    color: blue;
}
```

{% panel theme="danger", header="Warning!"  %}
Note the American English spelling of the colour property, which is used to set the foreground colour of an HTML element. Most CSS properties use American English spellings.
{% endpanel %}

## Class selector

This uses the value of an elements class attribute to target all elements with that particular class. It is denoted using a ‘.’. So, for example, to target all the ‘h2’ elements in an HTML document that have a class of ‘red’ and turn their background’s red, we could use a rule like this:

```css
h2.red {
    background-color: red;
}
```

## ID selector

This uses the value of an elements ID attribute to target the element with that particular ID. It is denoted using a ‘#’. So, for example, to target the element with the ID ‘top-button’ in an HTML document, we could use a rule like so:

```css
#top-button {
    vertical-align: center;
}
```

## Combining selectors

Selectors can be combined to target specific elements. The simplest combination is to add selectors together one after the other with a space between them. This links back to the nested hierarchy of HTML and the familial relationships, and looks at whether an element has a descendent matching the selectors. So, for example

```css
section p { … }
```

looks for all paragraphs who have a `section` as an ancestor, or to look at it another way, all paragraphs who are descendants of a `section`.

There are lots of ways to combine selectors.

## Code examples

There are a set of code examples that accompany this course showing the use of the fundamental HTML tags and CSS styles/rules that we look at. (Right click and open in a new window/tab) if you're viewing this on Learning Central.

-   CSS Intro
    -   1 [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/1/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/1/css/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/cssintro/1/)
    -   2 [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/2/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/2/css/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/cssintro/2/)
    -   3 [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/3/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/3/css/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/cssintro/3/)
    -   4 [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/4/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/4/css/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/cssintro/4/)
    -   5 [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/5/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/5/css/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/cssintro/5/)
    -   6 [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/6/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/cssintro/6/css/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/cssintro/6/)

