import React, { useEffect } from 'react';
import { trackEvent } from '../../util/metrics';

import RouteContainer from '../../components/RouteContainer';
import BlogPost, { IBlogPostProps } from '../../components/BlogPost';
import { useMediumBlogPosts } from '../../services/useMediumBlogPosts';
import IndentContainer from '../../components/IndentContainer';
import { H1 } from '../../components/core/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

import { t } from '../../translations/t';

function Blog() {
  const [blogPosts, isLoading] = useMediumBlogPosts();

  useEffect(() => {
    trackEvent('Blog', 'Open blog page');
  }, []);

  return (
    <RouteContainer>
      <H1>{t.blog.title}</H1>
      <H1>{t.blog.subtitle}</H1>

      <VerticalSpacing height={VerticalSpacingHeight.Giant} />

      <IndentContainer>
        {isLoading
          ? 'Loading...'
          : blogPosts.map((post: IBlogPostProps, i: number) => (
              <BlogPost
                key={i}
                title={post.title}
                subtitle={post.subtitle}
                thumbnail={post.thumbnail}
                url={post.url}
              />
            ))}
      </IndentContainer>
    </RouteContainer>
  );
}

export default Blog;
