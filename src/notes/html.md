---
layout: page
order: 1
title: "Hypertext Markup Language (HTML)"
---

HTML stands for HyperText Markup Language. In the simplest terms, it’s the language we use to build webpages. It is not really a ‘programming’ language, in that it is not a set of code that instructs the computer to carry out any particular operations. Rather as the name suggests it is a ‘markup’ language, a set of code that adds additional information to data. If we take some content that we’d like to put on the web, anything, from simple pieces of text, graphics and images, lists and tables, all the way through to complex interactive content, HTML is the language we use to explain to our Web browser what that content is. The web browser can look at our HTML, which describes our content, and then understand the structure of our content and how it should be displayed on the screen. This browser process, of taking our content, examining it to come up with a ‘model’ of what the content is, and then displaying it on the screen is known as ‘rendering’.

{% panopto "1ab59c15-9aca-4254-afa4-ac69017c1678" %}

## Markup

We use HTML tags to markup our content so that the browser will understand what our content is, and how to render it. There are many different tags in HTML, which can be used to add meaning and structure to different types of content. An important part of the process of creating a webpage is to use the correct HTML tags that accurately describe the role of the content being added to the document. We’ll see throughout this chapter that there are many ways to give our content the correct semantic meaning, from using particular tags to using informative naming schemes for CSS classes and IDs. All these things together allow us to build a rich structured document, where elements are described in terms that allow both human and machine to understand what their position and role is within a document.

As an example of a simple HTML element, here is an ‘anchor’ element:

```html
<a href=”https://www.mdn.com”>
    This is a link
</a>

```

It is used to create hyperlinks between or within webpages. The whole thing together referred to as an element. It has an opening tag (`<a … >`) at the beginning, and a closing tag at the end (`</a>`). In between the opening and closing tags we have the element content. In this case, it is just some text, but this content could be anything, even another HTML element. We’ll see examples of this ‘nesting’ of HTML elements later. For this simple element, inside our opening tag, we have an ‘attribute’. This contains some extra information about the element, which can allow extra functionality. In this case, our attribute is an ‘href’ attribute, and it tells us where this anchor element should ‘link’ to. Clicking on this link in a webpage will take you to www.mdn.com - the Mozilla Developer Network, which is an excellent resource for learning about web technologies.

Each attribute inside an HTML element consists of multiple parts - the ‘name’ of the attribute, and the ‘value’ of the attribute, separated by an equals sign. The value of the attribute is enclosed in quotes, and there is a space between the element name and the name of the attribute. You can use either single or double quotes to enclose attribute values, but whichever you use you should be consistent throughout your HTML code. Multiple attributes inside an HTML element are separated by spaces.

## Documents

{% panopto "7ce9ed95-8ce0-4aa1-b37c-ac69017c1580" %}

This is a very basic ‘minimal’ HTML document:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Hello World!</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>
```

Let’s break it down into its component parts. The very first item included in every HTML document is the document type declaration, or DTD. This tells the web browser what version of HTML (or other language) the page is written in. The document type declaration here is the document type declaration for HTML5, the latest standard of HTML. After the doctype we find the opening ’`<html>`’ tag. This is matched by a closing ‘`</html>`’ tag at the end of the document. Between them, these two tags create an HTML element and define the beginning and end of our HTML document. All the content (visible and non-visible) for our webpage comes between these two tags. Nested inside our ‘html’ element we find the ‘head’ element and the ‘body’ element. Again, both have an opening and a closing tag, and have their own content nested within them.

The head element contains lots of information about the document. This is not usually content that is shown by the browser within the page (with the exception of the title element). You can include lots of things within the head element such as information about the page author, a description of the page, page icons, links to stylesheets, and so on. In this example it contains two elements. The first element is a meta element. Meta elements are used to provide structured metadata that describes our document. The second element is a title element. This gives the title of the webpage. This is often displayed by the web browser somewhere within the browsers user interface (for example in the page tab in Chrome). This is usually the only content that is placed in the head that will be seen by the user when viewing your page, although some metadata such as the description may be seen in search engine results.

The ‘`body`’ element is where the content of the webpage goes. This is all of the content that a user will see when they view your webpage. Everything that should be seen by the user should be nested inside the body. In this example, we have a single `p` element containing the text 'Hello World'. `<p>` elements are used to markup paragraphs of text within an HTML document.

## Nesting

We can nest HTML elements inside one another. We have already seen this in the simple example above.

Our ‘`<p>`’ element was nested inside the ‘`body`’ element which was in turn nested inside the ‘`html`’ element. Sometimes this nesting can produce new functionality.

For instance, here we have a simple link (using an ‘anchor’, or ‘a’ element) to a website:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Hello World!</title>
    </head>
    <body>
        <a href="https://www.cardiff.ac.uk">Cardiff University</a>
    </body>
</html>
```

But rather than just having some text content within the link, we could use another HTML element, such as an image:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Hello World!</title>
    </head>
    <body>
        <a href="https://www.cardiff.ac.uk">
            <img src="https://static.cf.ac.uk/cfui/1.9.6.beta.3/img/logo.png" alt="Cardiff University" />
        </a>
    </body>
</html>
```

We have now given the ‘image’ element the functionality of the ‘a’ element; by nesting the image inside the ‘a’ it has become a clickable link to another website.

When nesting elements, it is important to remember to close the tags in the order in which they were opened:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Hello World!</title>
    </head>
    <body>
        <p>Hello <strong>World!</strong></p>
    </body>
</html>
```

Because we opened the strong tag after we opened the paragraph tag, we must close it before we close the paragraph tag.

## HTMl tags

{% panopto "2d887a0a-7d25-4ed6-9ce7-ac69017c14fe" %}

We have already seen that to display content on a webpage, we need to tell the browser what sort of content we have. We have also seen that we use HTML tags to 'annotate' or mark up our content. There are lots of different HTML tags that we can use to annotate our content. We’ll look at a few more here, but for a more comprehensive list of HTML tags, and guidance on how to use them, we recommend you look at the MDN HTML documentation online.

```html
<p>…</p>
```

`<p>` elements are used to define paragraphs. They can contain (and separate) large chunks of text.

```html
<br />
```

`<br>` is used to add a line break inside content. It does not wrap content; there is no closing `</br>` tag. It does not have the same semantic meaning as using a `<p> .. </p>` to break content into paragraphs, and it should never be used just to add whitespace between content.

```html
<hX> … </hX>
```

There are six separate levels of heading, from `h1` to `h6`. `h1` is the largest heading element, while `h6` is the smallest. Again, these sizes refer to the importance, or level of the heading within the document, not the actual presentation of the heading.

```html
<a></a>
```

Anchor (or ‘`a`’) elements, as we have already seen, can be used to make links between webpages, or even within individual webpages.

```html
<h1 id="”section1”">Section 1 – HTML</h1>
<p>Here is some content with <a href="”#section1”">a link</a> back to the beginning of the section</p>
```

We add an ‘`href`’ attribute to the opening ‘`a`’ tag to tell the link where to link to. To create a link within the same document, rather than to a separate document we give the element to be linked to an ‘`id`’ attribute, and then use this ‘id’ in the ‘href’ of the link.

Note: IDs should be unique within an HTML document. We should never find elements within a document that share the same ID.

```html
<img src="’someimage.png’" />
```

‘`img`’ adds images to web pages. There is no closing `</img>` tag. We use the ‘`src`’ attribute to specify which image to display, and use the ‘alt’ attribute to give the image a textual description that can be used by screen readers or in situations where the image cannot be seen. There are more attributes that can be used with images, and more complex image solutions that deal with trying to build responsive web pages that adapt to all screen sizes, and we’ll look at these later

When we are writing code, we should try to add comments where ever they are needed. Comments are pieces of text that explain some detail about the code they are near. They do not affect the operation of the code, and should not normally be seen by users. The exact definition of ‘where comments are needed’ is a topic long discussed on internet message boards and whenever coders meet in the dark corners of the web, but a basic rule of thumb for good coding is that your code should be easily understandable on its own – it should be written in such a way that anyone reading it can easily discern what it is doing. In cases where your code is not easily understandable, you can either re-write it to be simpler, or add a comment to explain it. The first option is preferable, but sometimes you will just have to add some explanation as a comment. Where comments become really useful however is in recording the ‘why’ – explaining why you have chosen to write a piece of code in a particular way.

## Comments

In HTML, (and CSS), comments can also be a useful tool to structure the document for other developers reading the source code. Because of nesting, some HTML elements can end up spanning multiple lines of code, and it is not always clear where they begin and end, even with the best indentation and code layout. A comment can be a helpful little tool to help refer a closing tag back to its opening tag, allowing the reader to see when one part of the code begins and ends.
Comments in HTML are started using `<!--` and finished using `-->`

```html
<!-- this is a comment -->
<body>
    <p>Hello World!</p>
</body>
```

## More tags...

This is only scratching the surface of the HTML tags available for marking up content. There are a couple of good references to check online to learn more about HTML as a language:

https://www.htmldog.com/references/html/tags/

https://developer.mozilla.org/en-US/docs/Web/HTML

## Block and Inline

{% panopto "b4938770-a167-4585-ac8d-ac69017c160f" %}

Some elements are 'block' elements. These will be displayed starting on a new line, by default they expand to take up all the width that they can, and they can contain both block and inline elements.

Other elements are 'inline' elements. These will be displayed on the same line as the content around them, are only as wide as necessary to fit their content, and they can contain other inline elements.

`<div>` is a block level element that adds no meaning to the content it contains other than to group that content together. `<span>` is an inline element that can also be used to group content without adding any additional meaning to that content.

## Code examples

There are a set of code examples that accompany this course showing the use of the fundamental HTML tags and CSS styles/rules that we look at. (Right click and open in a new window/tab) if you're viewing this on Learning Central.

-   Hello World [[Code]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/hello-world/index.html) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/hello-world/)
-   Headings, Paragraphs and Line BReaks [[Code]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/h-p-br/index.html) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/h-p-br/)
-   Links [[Code]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/links/index.html) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/links/)
-   Images [[Code]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/images/index.html) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/images/)
-   Centred Image [[HTML]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/images/centred-image.html) [[CSS]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/images/css/style.css) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/images/centred-image.html)
-   Formatting [[Code]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/formatting/index.html) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/formatting/)
-   Lists [[Code]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/lists/index.html) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/lists/)
-   Grouping [[Code]](https://github.com/martinjc/introduction-to-html-and-css/blob/master/src/examples/grouping/index.html) [[Demo]](https://martinjc.github.io/introduction-to-html-and-css/examples/grouping/)

