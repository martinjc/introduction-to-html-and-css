---
layout: page
title: "Flexbox and Grid"
order: 9
---

Now we're ready to move on from the relatively simple CSS layout methods we've looked at so far, and can look at Flexbox and Grid, two modern CSS layout methods that allow us to create complex, flexible layouts for our content.

## Flexbox

-   [Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) - MDN tutorial on Flexbox

-   [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - A complete guide to FlexBox

{% panopto "099ce3c5-83e4-4dab-a7b4-adb300d6f6a4" %}

## CSS Grid

-   [Basic concepts of grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) - MDN tutorial on grids

-   [A complete guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - A complete guide to CSS Grid

{% panopto "34baaa7a-d17f-408f-94a4-adb300d6f741" %}

## Related Reading

-   [Using Media Queries For Responsive Design In 2018](https://www.smashingmagazine.com/2018/02/media-queries-responsive-design-2018/)
-   [Flexbox the Animated Tutorial](https://medium.com/@js_tut/flexbox-the-animated-tutorial-8075cbe4c1b2) - a nice way of learning about different CSS-Flex properties
-   [Grid by Example](https://gridbyexample.com/examples/) - a useful site with examples of how to use CSS Grid

## Code Examples

{% panopto "770829f2-5c0b-4ef2-9b8b-adb300d6f8ea" %}
Please note: there's a better way to fix the grid layout at the end of this video - rather than tell the `nav` and the `aside` that they need to be in the first row, we could set the `grid-auto-flow` of the parent container to be `row-dense` and that would make the browser fill the earlier gaps in the existing row rather than add a new row.

There are a set of code examples that accompany this course showing the use of the fundamental HTML tags and CSS styles/rules that we look at. (Right click and open in a new window/tab) if you're viewing this on Learning Central.

-   Simple grid (without CSS-Grid) [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/simple-grid/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/simple-grid/css/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/simple-grid/)
-   Flexbox example [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/flex/1/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/flex/1/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/flex/1)
-   Responsive Flexbox example [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/flex/2/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/flex/2/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/flex/2)
-   Responsive CSS Grid example [[Code: HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/grid/1/index.html) [[Code: CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/grid/1/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/grid/1)

