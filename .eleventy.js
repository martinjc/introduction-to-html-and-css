module.exports = function(eleventyConfig) {

    // edit this for any site that isn't hosted on github in a repo called 'online-course-notes-11ty'
    // what a dumb repo name
    const PRODUCTION_DIR = 'introduction-to-html-and-css';

    // bunch 'o plugins. They do things
    const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
    const markdownItFootnote = require("markdown-it-footnote");
    const markdownItEmoji = require("markdown-it-emoji");
    const markdownIt = require("markdown-it");

    // custom shortcodes go in this file
    const shortcodes = require("./build/shortcodes.js");

    // are we building for production or development?
    const isProduction = process.env.NODE_ENV === `production`;

    // copy our root files and images
    eleventyConfig.addPassthroughCopy({"src/_root/*.*": "./"});
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/examples");
    eleventyConfig.addPassthroughCopy("src/slides");

    // who doesn't want this to be true at this point?
    eleventyConfig.setDataDeepMerge(true);

    // syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    // add footnotes and emoji to the markdown parser
    let markdownLib = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
    })
    .use(markdownItFootnote)
    .use(markdownItEmoji);

    eleventyConfig.setLibrary('md', markdownLib);

    // custom filter. This should probably go in a separate file like the shortcodes...
    function sortByPageOrder(values) {
        return values.slice().sort((a, b) => Math.sign(a.data.order - b.data.order))
    }

    eleventyConfig.addFilter("sortByPageOrder", sortByPageOrder);

    // register our custom shortcodes
    eleventyConfig.addShortcode("questions", shortcodes.insertQuestions);
    eleventyConfig.addShortcode("panopto", shortcodes.insertPanopto);
    eleventyConfig.addShortcode("reponame", shortcodes.getRepoName);
    eleventyConfig.addPairedShortcode("panel", shortcodes.insertPanel);


    return {
      pathPrefix: isProduction ? PRODUCTION_DIR : '/',
      dir: {
        input: "./src",      
        output: "./public",
        includes: "_includes"
      }
    };
};