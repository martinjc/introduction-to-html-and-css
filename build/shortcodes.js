const markdownIt = require("markdown-it");

module.exports = {
    // Embedding questions from data files into the notes page template
    insertQuestions: (questions) => {
        let template = ``;
        questions.forEach((q, i) => {
            template += `
<div class="question-block" id="q-block${i}">
<p class="question" id="q${i}">${q.question}</p>`;
            q.answers.forEach((a, j) => {
                template += `
<div class="answer-block" id="a-block${j}" data-correct="${a.correct}">
<p class="answer" id="a${j}">${a.answer}</p>
<p class="feedback hidden">${a.feedback}</p>
</div>
                `;
            });
            template += `
</div>
`;
        });
        return template;
    },

    // Alright, this one is going to get very little use unless you are also an academic at Cardiff University who wants to embed videos from our Panopto instance into your course notes...
    insertPanopto: (panoptoID) => {
        return `
<iframe src="https://cardiff.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=${panoptoID}&v=1" width="600" height="320" style="padding: 0px; border: 1px solid #464646;" frameborder="0" allowfullscreen allow="autoplay"></iframe>
<p><small>If the embed above does not work here is a <a href="https://cardiff.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=${panoptoID}" target="blank">link to the full version of the video</a></small></p>`
    },

    // return the repository name and domain for use in utterace.es comments
    getRepoName: (url) => {
        return url.replace('git+https://github.com/', '').replace('.git', '');
    },

    insertPanel: (content, type, header) => {
        let md = new markdownIt();
        content = md.renderInline(content);
        let template = ``;
        template += `
<div class="panel panel-${type}">
<div class="panel-header">${header}</div>
<div class="panel-body">${content}</div>
</div>`
        return template;
    },

    imageShortcode: async function(src, alt="", sizes="(min-width: 30em) 30vw, 100vw") {
        let metadata = await Image(src, {
            widths: [640, 768, 1024, 1366, 1600, 1920],
            formats: ["avif", "jpeg"],
            outputDir: "./public/img/"
        });

        let imageAttributes = {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        };

        return Image.generateHTML(metadata, imageAttributes);
    }

}