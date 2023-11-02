import React, { useEffect } from 'react';
import { trackEvent } from '../../util/metrics';

import RouteContainer from '../../components/RouteContainer';
import BlogPost from '../../components/BlogPost';
import IndentContainer from '../../components/IndentContainer';
import { H1 } from '../../components/core/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

import { t } from '../../translations/t';
import { Link } from 'react-router-dom';
import { Posts } from '../../blog-posts/posts';
import Helmetiser from '../../components/core/Helmetiser';

function Blog() {
  useEffect(() => {
    trackEvent('Blog', 'Open blog page');
  }, []);

  return (
    <RouteContainer>
      <Helmetiser
        title="Blog"
        description="Senior frontend engineer turned into tech content creator and influencer. I make viral tech content."
        url="https://www.techwizzdom.com/blog"
      />
      <H1>{t.blog.title}</H1>

      <VerticalSpacing height={VerticalSpacingHeight.Giant} />

      <IndentContainer>
        {Posts.map((post, i) => (
          <Link to={`post/${post.path}`} key={i}>
            <BlogPost
              title={post.title}
              subtitle={post.subtitle}
              thumbnail={post.thumbnail}
              tags={post.tags}
            />
          </Link>
        ))}
      </IndentContainer>
    </RouteContainer>
  );
}

export default Blog;
