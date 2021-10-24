import React, { useEffect, useState } from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import RouteContainer from '../../components/RouteContainer';
import { Posts } from '../../blog-posts/posts';
import { css } from 'emotion';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';
import { Media } from '../../enums/Media';
import { trackEvent } from '../../util/metrics';
import Helmetiser from '../../components/core/Helmetiser';

function Post() {
  const [post, setPost] = useState('');

  const posts = Posts;

  const getPostPath = () => {
    const pathArr = window.location.pathname.split('/');
    return pathArr[pathArr.length - 1];
  };

  const postPath = getPostPath();

  const poster = require(`../../blog-posts/${postPath}.md`);
  const { title, subtitle, img, path } =
    posts.find((post) => post.path === postPath) || {};

  const theme = React.useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    trackEvent('Post', title || '');
  }, [title]);

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
      <Helmetiser title={title} description={subtitle} />
      <article>
        <h1 className={titleCss}>{title}</h1>
        <h2 className={subtitleCss}>{subtitle}</h2>
        <img className={imgCss} src={img} alt={path} />
        <section
          className={sectionCss(theme)}
          dangerouslySetInnerHTML={{ __html: marked(post) }}
        />
      </article>
    </RouteContainer>
  );
}

const titleCss = css`
  font-size: 32px;

  @media ${Media.Mobile} {
    font-size: 28px;
  }
`;

const subtitleCss = css`
  font-weight: 100;

  @media ${Media.Mobile} {
    font-size: 20px;
  }
`;

const imgCss = css`
  margin: 16px 0 32px;
`;

const sectionCss = (theme: Theme) => css`
  a {
    padding: 2px;
    border-radius: 2px;

    color: ${theme.hyperlinkColor};
    background-color: ${theme.hyperlinkBackgroundColor};

    :hover {
      opacity: 0.8;
    }
  }

  h2 {
    font-size: 28px;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 24px;
  }

  @media ${Media.Mobile} {
    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

export default Post;
