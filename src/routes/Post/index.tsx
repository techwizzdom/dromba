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
import ThisIsMe from '../../components/ThisIsMe';
import LoadingSpinner from '../../components/LoadingSpinner';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
// import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';

function Post() {
  const [post, setPost] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const posts = Posts;

  const getPostPath = () => {
    const pathArr = window.location.pathname.split('/');
    return pathArr[pathArr.length - 1];
  };

  const postPath = getPostPath();

  const readingTime = require('reading-time/lib/reading-time');

  const poster = require(`../../blog-posts/${postPath}.md`);
  const { title, subtitle, img, previewImg, path, postDate, tags } =
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
  function removeTags(string: string) {
    return string
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }
  const readingTimeLabel = readingTime(removeTags(marked(post)));
  const postDateLabel = postDate?.toDateString();
  let postDateDay = postDateLabel?.split(' ')[2] || '';
  if (postDateDay[0] === '0') {
    postDateDay = postDateDay[1];
  }
  const postDateMonth = postDateLabel?.split(' ')[1];
  const postDateYear = postDateLabel?.split(' ')[3];

  return (
    <RouteContainer>
      <Helmetiser
        title={title}
        description={subtitle}
        url={`https://www.domagojvidovic.com/post/${path}`}
        image={previewImg || img}
      />
      <article className={articleCss}>
        <h1 className={titleCss}>{title}</h1>
        <h2 className={subtitleCss}>{subtitle}</h2>
        <div className={postInfoCss}>
          <div className={postTimeCss}>
            <p className={dateCss}>
              {postDateDay} {postDateMonth}
              {Number(postDateYear) < new Date().getFullYear()
                ? ` ${postDateYear}`
                : ''}
            </p>
            {' · '}
            <p className={timeCss}>{readingTimeLabel.text}</p>
          </div>
          <p>{tags?.join(', ')}</p>
        </div>
        <img
          className={imgCss}
          src={img}
          alt={path}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <section
            className={sectionCss(theme)}
            dangerouslySetInnerHTML={{ __html: marked(post) }}
          />
        )}
      </article>
      {!isLoading && (
        <div className={sharingOptionsCss}>
          <span className={shareMeTextCss}>SHARE ME!</span>
          <div className={sharingIconsCss}>
            <a
              className="twitter-share-button"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/intent/tweet?text="${title}" by @javascript_wizz is a must-read article! 🚀 ${document.URL}`}
            >
              <Twitter />
            </a>
            {/* <a
              href={`https://www.linkedin.com/sharing/share-offsite?mini=true&url=${document.URL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a> */}
          </div>
        </div>
      )}
      {!isLoading && <ThisIsMe isMainScreenMode={true} />}
    </RouteContainer>
  );
}

const articleCss = css`
  margin-bottom: 24px;
`;

const shareMeTextCss = css`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 6px;
`;

const sharingOptionsCss = css`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 96px;
`;

const sharingIconsCss = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const titleCss = css`
  font-size: 32px;

  @media ${Media.Mobile} {
    font-size: 28px;
  }
`;

const subtitleCss = css`
  font-weight: 100;
  margin-bottom: 16px;

  @media ${Media.Mobile} {
    font-size: 20px;
  }
`;

const imgCss = css`
  margin: 0 0 32px;
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

const postTimeCss = css`
  display: flex;
  align-items: center;
`;

const postInfoCss = css`
  display: flex;
  justify-content: space-between;

  p {
    margin-bottom: 0;
    font-size: 14px;
  }

  @media ${Media.Mobile} {
    flex-direction: column;

    p {
      font-size: 12px;
    }
  }
`;

const dateCss = css`
  margin-right: 4px;

  @media ${Media.Mobile} {
    // font-size: 28px;
  }
`;

const timeCss = css`
  margin-left: 4px;

  @media ${Media.Mobile} {
    // font-size: 28px;
  }
`;

export default Post;
