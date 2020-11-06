---
layout: page
order: 2
title: Cascading Style Sheets (CSS)
---

CSS is the language used to format and style HTML documents, it is the language we use to tell a web browser how our elements should be displayed. With it, we can control the visible properties of HTML elements such as their size, position, colour and so on. We can also control how the elements behave in relation to other browser elements, or when conditions in the web browser change.

{% panopto "00dfee93-41e7-45e9-ad82-ac69017c171b" %}

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

{{% panel theme="danger" header="Warning!"  %}}
Note the American English spelling of the colour property, which is used to set the foreground colour of an HTML element. Most CSS properties use American English spellings.
{{% /panel %}}

## Class selector

This uses the value of an elements class attribute to target all elements with that particular class. It is denoted using a ‘.’. So, for example, to target all the ‘h2’ elements in an HTML document that have a class of ‘red’ and turn their background’s red, we could use a rule like this:

```css
.red {
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

There are lots of ways to combine selectors,
