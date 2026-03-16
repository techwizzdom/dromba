import React, { useEffect, useState } from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import { Posts } from '../../blog-posts/posts';
import { css } from 'emotion';
import { trackEvent } from '../../util/metrics';
import Helmetiser from '../../components/core/Helmetiser';

function Post() {
  const [post, setPost] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getPostPath = () => {
    const pathArr = window.location.pathname.split('/');
    return pathArr[pathArr.length - 1];
  };

  const postPath = getPostPath();
  const readingTime = require('reading-time/lib/reading-time');
  const poster = require(`../../blog-posts/${postPath}.md`);
  const { title, subtitle, img, previewImg, path, postDate, tags } =
    Posts.find((p) => p.path === postPath) || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    trackEvent('Post', title || '');
  }, [title]);

  fetch(poster)
    .then((response) => response.text())
    .then((text) => setPost(text));

  require('prismjs/components/prism-markup-templating');
  require('prismjs/components/prism-css');
  require('prismjs/components/prism-php');
  require('prismjs/components/prism-json');
  require('prismjs/components/prism-javascript');
  require('prismjs/components/prism-jsx');
  require('prismjs/components/prism-bash');
  require('prismjs/components/prism-yaml');
  require('prismjs/components/prism-toml');

  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${title}">${text}</a>`;
  };

  marked.setOptions({
    renderer,
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

  function removeTags(string: string) {
    return string.replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim();
  }

  const readingTimeLabel = readingTime(removeTags(marked(post)));
  const postDateLabel = postDate?.toDateString();
  let postDateDay = postDateLabel?.split(' ')[2] || '';
  if (postDateDay[0] === '0') postDateDay = postDateDay[1];
  const postDateMonth = postDateLabel?.split(' ')[1];
  const postDateYear = postDateLabel?.split(' ')[3];

  return (
    <main className={pageCss}>
      <Helmetiser
        title={title}
        description={subtitle}
        url={`https://www.techwizzdom.com/post/${path}`}
        image={previewImg || img}
      />
      <article className={articleCss}>
        <div className={articleHeaderCss}>
          <div className={tagRowCss}>
            {tags?.map((tag, i) => (
              <span key={i} className={tagCss}>{tag}</span>
            ))}
          </div>
          <h1 className={titleCss}>{title}</h1>
          <p className={subtitleCss}>{subtitle}</p>
          <div className={metaCss}>
            <span className={dateCss}>
              {postDateDay} {postDateMonth}
              {Number(postDateYear) < new Date().getFullYear() ? ` ${postDateYear}` : ''}
            </span>
            <span className={dotCss}>&bull;</span>
            <span>{readingTimeLabel.text}</span>
          </div>
        </div>

        <img
          className={heroCss}
          src={img}
          alt={title || path}
          onLoad={() => setIsLoading(false)}
        />

        {isLoading ? (
          <div className={loaderCss}>
            <div className={spinnerCss} />
          </div>
        ) : (
          <section
            className={contentCss}
            dangerouslySetInnerHTML={{ __html: marked(post) }}
          />
        )}
      </article>

      {!isLoading && (
        <div className={shareCss}>
          <p className={shareTextCss}>
            Do you find this post useful? Share it with a friend who will think the same :)
          </p>
        </div>
      )}
    </main>
  );
}

const pageCss = css`
  padding: calc(var(--nav-height) + 48px) 32px 120px;

  @media (max-width: 768px) {
    padding: calc(var(--nav-height) + 32px) 20px 80px;
  }
`;

const articleCss = css`
  max-width: 760px;
  margin: 0 auto;
`;

const articleHeaderCss = css`
  margin-bottom: 32px;
`;

const tagRowCss = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const tagCss = css`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-accent);
  background: var(--color-accent-dim);
  padding: 4px 10px;
  border-radius: 4px;
`;

const titleCss = css`
  font-family: var(--font-heading);
  font-size: clamp(32px, 5vw, 44px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -1px;
  margin-bottom: 12px;
`;

const subtitleCss = css`
  font-size: 18px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
`;

const metaCss = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-text-muted);
`;

const dateCss = css``;
const dotCss = css`color: var(--color-accent);`;

const heroCss = css`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 40px;
  border: 1px solid var(--color-border);
`;

const loaderCss = css`
  display: flex;
  justify-content: center;
  padding: 64px 0;
`;

const spinnerCss = css`
  width: 32px;
  height: 32px;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const contentCss = css`
  font-size: 17px;
  line-height: 1.8;
  color: var(--color-text-secondary);

  h2 {
    font-family: var(--font-heading);
    font-size: 28px;
    font-weight: 700;
    color: var(--color-text);
    margin: 40px 0 12px;
    letter-spacing: -0.5px;
  }

  h3 {
    font-family: var(--font-heading);
    font-size: 22px;
    font-weight: 600;
    color: var(--color-text);
    margin: 32px 0 8px;
  }

  p {
    margin-bottom: 16px;
  }

  a {
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: opacity var(--transition-fast);
    &:hover { opacity: 0.8; }
  }

  img {
    border-radius: 12px;
    margin: 24px 0;
    border: 1px solid var(--color-border);
  }

  code {
    font-family: var(--font-mono);
    font-size: 14px;
    background: var(--color-bg-card);
    padding: 2px 6px;
    border-radius: 4px;
    color: var(--color-accent);
  }

  pre {
    background: var(--color-bg-card) !important;
    border: 1px solid var(--color-border);
    border-radius: 12px;
    padding: 20px;
    margin: 24px 0;
    overflow-x: auto;

    code {
      background: none;
      padding: 0;
      color: var(--color-text);
    }
  }

  ul, ol {
    padding-left: 24px;
    margin-bottom: 16px;
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li {
    margin-bottom: 6px;
  }

  blockquote {
    border-left: 3px solid var(--color-accent);
    padding-left: 20px;
    margin: 24px 0;
    font-style: italic;
    color: var(--color-text-muted);
  }

  strong {
    color: var(--color-text);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    h2 { font-size: 24px; }
    h3 { font-size: 20px; }
  }
`;

const shareCss = css`
  max-width: 760px;
  margin: 48px auto 0;
  padding: 32px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  text-align: center;
`;

const shareTextCss = css`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.5;
`;

export default Post;
