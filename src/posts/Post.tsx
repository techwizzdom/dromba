import React, { useState } from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import RouteContainer from '../components/RouteContainer';

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
      Prism.hooks.add('before-highlight', function (env) {
        env.code = (env.element as HTMLElement).innerText;
      });
      if (Prism.languages[lang]) {
        const x = Prism.highlight(code, Prism.languages[lang], lang);
        var langClass = 'language-' + lang;
        return `<pre class="${langClass}"><code class="${langClass}">${x}</code></pre>`;
      } else {
        return code;
      }
    },
    breaks: true,
  });
  return (
    <RouteContainer>
      <article dangerouslySetInnerHTML={{ __html: marked(post) }} />
    </RouteContainer>
  );
}

export default Post;
