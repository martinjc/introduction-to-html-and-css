---
layout: page
order: 3
title: "Exercise 1: Writing a Web Page"
---

{% panopto "0deb7203-20c4-4714-8d92-adb300d6f2cc" %}

During this activity for this topic we will put what we have learnt into practice by creating a simple HTML web page.

For this exercise we'll need a few different applications open. You should search for and open all these applications before we start:

1. A text editor
2. A command line terminal
3. A web browser for viewing the web page we create

{% panel "danger", "Note!" %}
The command line examples in this exercise assume you are using a 'bash' type terminal. Many of these commands will not work on the Windows command line. They will work fine on Windows if you use the GitBash terminal.
{% endpanel %}

Let's create a directory for our work and then move into that directory:

```bash
$ cd ~
$ mkdir intro-html-css
$ cd intro-html-css
```

{% panel "danger", "Note!" %}
Remember, your laptop hard drive is not backed up automatically. Remember to backup important files and documents to OneDrive regularly! Using source control (git) and syncing with a remote repository (such as the University's GitLab server) is another good way to back up your work. We'll see how to do this in just a short while...
{% endpanel %}

Switch to your text editor, and we'll start writing our first HTML page. Enter the following code:

```html
<html>
    <head>
        <title>My first web page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
```

Now save this file as `index.html`, in a new directory named `Week1` inside your `intro-html-css` directory. Your file and directory structure should look like this:

```
intro-html-css
  |- Week1
     |- index.html
```

{% panel "primary" "Question" %}
Why do we use the name `index.html` for the web page?

The name `index.html` is an important name for the default first page in a website. When a client (web browser) makes a request to a web server, but does not actually request a specific page, the web server will usually try to serve any file at that location named `index.html` by default.

{% endpanel %}

We can view our new HTML page in a number of ways. The easiest is to open a new Google Chrome window, then drag the `index.html` file from a File Explorer window and drop it onto our web browser window. This will open and display the file:

![Our first web page]({{ "/img/hello-world.png" | url }}).

### Developer Tools

An important part of being a web developer is being able to understand how the browser views and processes your page. To help us do this, the browser contains a set of tools that we can use to examine our page and how it is loaded and displayed by the browser. To open the developer tools in Chrome, use the menu, and select ‘More tools’ and then ‘Developer tools’:

![Opening the Developer Tools]({{ "/img/developer-tools.png"  | url }})

The developer window will open within your browser. The different tabs allow you to examine different aspects of the web browser and your page. The ‘Elements’ tab shows you the source code of your web page, as well as the CSS styles that have been applied to the elements of the page. Hovering over an element in the ‘Elements’ tab will highlight the element in the page above, and tell you its size. The right hand side of the developer window will show you the element’s CSS styles, and give a graphic representation of the element’s size in terms of margin, border and padding:

![Developer Tools open]({{ "/img/developer-tools-open.png" | url }})

We can edit the content of our webpage (temporarily) from within the developer tools. Double click on the `h1` element, and we can change the text content. If you refresh the page, the original file will be loaded from disk, and your changes will be gone.

### Running a local web server

Opening files by dropping them into our web browser window is all well and good, but usually our HTML files we be served to our web browser by a web server. This is a special piece of software which runs on a machine waiting for requests from web browsers. When it receives a request for a specific file or resource, it attempts to respond to the web browser with the item requested.

When we are developing a web page we can run a simple local web server that will carry out this request <-> response process and mimic our web page running on a web server somewhere on the Internet.

If you don't already have one open, open a command line and navigate to the folder where our lab code is stored:

```bash
cd intro-html-css
```

We can use a built-in feature of the Python programming language to run a simple web server. Assuming you have Python installed, you can type:

```bash
python3 -m http.server
```

This will start a web server in the current directory, which will sit and wait for requests from a web browser:

```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

If we enter the local IP address for the machine (`http://127.0.0.1:8000`) in the address bar of the browser, we will see the directory listing for our web server:

![Web page on local server]({{ "/img/local-server-page.png" | url }})

{% panel "info", "Notice!" %}
Now you can see why we named our HTML page `index.html` - a web server will automatically serve a page named `index.html` when a request is made for a given directory. By using this name, the index page will automatically be loaded rather than the server displaying a directory listing as it did for the parent directory.
{% endpanel %}

If we look at the command line, we can see the output from our web server, listing the requests made to the web server:

```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
127.0.0.1 - - [17/Sep/2018 21:01:15] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [17/Sep/2018 21:01:15] "GET /favicon.ico HTTP/1.1" 404 -
127.0.0.1 - - [17/Sep/2018 21:03:20] "GET /Week1/ HTTP/1.1" 200 -
```

The first request was for '/', the root directory where the server is running. We can see the code `200` here, indicating this request was successful. (We'll look at response codes in more depth later). This was followed by a request for `/favicon.ico`. This is the browser requesting an icon to display representing the web page. We haven't provided one, so this request has a `404` response - which means the requested resource has not been found. 

{% panel "info", "Notice!" %}
From now on, we'll use a local web browser to serve our web pages while we're developing them. Remember to use `python -m http.server` to start a web server in your root directory whenever you start working on your code.
{% endpanel %}

### Experimenting with HTML

This is all you need to start developing web pages, so let's add some more content to our page. We'll start by adding a bit of text:

```html
<html>
    <head>
        <title>My first web page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>This is my awesome web page</p>
    </body>
</html>
```

Which means our page will now look like:

![Web page content]({{ "/img/page-content.png" | url }})

### Adding CSS

Once we've got some HTML content, we can start to style it using CSS.

We can add CSS to our HTML files by including it in a separate file. Create a new file in your text editor, and write a CSS rule that will apply to all paragraph elements:

![CSS file]({{ "/img/css-file.png" | url }})

Before we can link the CSS to our HTML, we need to save the file. Here I have saved it as `style.css` in a subfolder named `css` within the same directory as
the `index.html` file.

```
intro-html-css/
  |- Week1/
    |- index.html
      |- css/
        |- style.css
```

We can then link this CSS to our HTML file using a link element in the head of our HTML:

![Link CSS file to HTML]({{ "/img/css-link.png" | url }})

If we refresh the page in our browser, we'll see the CSS rules applied to our paragraph elements:

![HTML and CSS]({{ "/img/hello-world-css.png" | url }})

### Going Further

Now it is your turn to start writing HTML. Experiment with adding more content, using some of the HTML tags we have already seen in this week's reading and videos. Try and add the following types of content to your page:

-   a link to another webpage
-   an image
-   a bulleted list
-   a range of headings
-   several paragraphs of text
-   a link from one part of your page to another

Use CSS rules to change the formatting of your content.

### ... Just one more thing

{% panel "danger", "... Just one more thing!" %}
Before you finish for the day, take a screenshot (or some screenshots) of your website and email them to ChorleyMJ@cardiff.ac.uk.
If you're not sure how to take a screenshot, why not post a question (or look for an answer) on the [School StackOverflow](https://stackoverflow.com/c/comsc) site?
{%  endpanel %}
