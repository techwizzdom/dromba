import React, { useState } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
// import hljs from 'highlight.js';
import Markdown from 'markdown-to-jsx';
import ReactHtmlParser from 'react-html-parser';
// import Prism from 'prismjs';

function Post() {
  const [post, setPost] = useState('');
  const poster = require('./poster.md');

  fetch(poster)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      setPost(text);
    });
  const hljs = require('highlight.js');
  require('prismjs/components/prism-markup-templating');
  require('prismjs/components/prism-css');
  require('prismjs/components/prism-php');
  require('prismjs/components/prism-json');
  require('prismjs/components/prism-javascript');
  require('prismjs/components/prism-jsx');
  require('prismjs/components/prism-bash');
  require('prismjs/components/prism-yaml');
  require('prismjs/components/prism-toml');

  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, lang) {
      // const hljs = require('highlight.js');
      // const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      // return hljs.highlight(code, { language }).value;
      // Prism.hooks.add('before-highlight', function (env) {
      //   env.code = env.element.textContent || '';
      // });
      window.Prism.hooks.add('before-highlight', function (env) {
        env.code = (env.element as HTMLElement).innerText;
      });
      if (window.Prism.languages[lang]) {
        const x = window.Prism.highlight(
          code,
          window.Prism.languages[lang],
          lang,
        );
        var langClass = 'language-' + lang;
        return `<pre class="${langClass}"><code class="${langClass}">${x}</code></pre>`;
      } else {
        return code;
      }
    },
    breaks: true,
  });
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: marked(post) }} />
      {/* {ReactHtmlParser(marked(post))} */}
      {/* <Markdown children={post} /> */}
    </div>
  );
}

export default Post;
