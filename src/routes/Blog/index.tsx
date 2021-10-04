import React, { useEffect } from 'react';
import { trackEvent } from '../../util/metrics';

import RouteContainer from '../../components/RouteContainer';
import BlogPost, { IBlogPostProps } from '../../components/BlogPost';
import { useMediumBlogPosts } from '../../services/useMediumBlogPosts';
import IndentContainer from '../../components/IndentContainer';
import { H1, H5 } from '../../components/core/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';
import Hyperlink from '../../components/Hyperlink';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

import { t } from '../../translations/t';
import { useDevToBlogPosts } from '../../services/useDevToBlogPosts';
import LoadingSpinner from '../../components/LoadingSpinner';

function Blog() {
  const [mediumBlogPosts, isMediumBlogPostsLoading] = useMediumBlogPosts();
  const [devToBlogPosts, isDevToBlogPostsLoading] = useDevToBlogPosts();

  useEffect(() => {
    trackEvent('Blog', 'Open blog page');
  }, []);

  return (
    <RouteContainer>
      <H1>{t.blog.title}</H1>

      <VerticalSpacing height={VerticalSpacingHeight.Giant} />

      <IndentContainer>
        {isMediumBlogPostsLoading || isDevToBlogPostsLoading ? (
          <LoadingSpinner />
        ) : (
          devToBlogPosts
            .concat(mediumBlogPosts)
            .map((post: IBlogPostProps, i: number) => (
              <BlogPost
                key={i}
                title={post.title}
                subtitle={post.subtitle}
                thumbnail={post.thumbnail}
                url={post.url}
                type={post.type}
              />
            ))
        )}
        {isMediumBlogPostsLoading || isDevToBlogPostsLoading ? null : (
          <>
            <VerticalSpacing height={VerticalSpacingHeight.Medium} />
            <H5>
              {t.blog.findMoreArticles}
              <Hyperlink href={t.link.devto}>
                {t.profile.devto}
              </Hyperlink> and{' '}
              <Hyperlink href={t.link.medium}>{t.profile.medium}</Hyperlink>
            </H5>
          </>
        )}
      </IndentContainer>
    </RouteContainer>
  );
}

export default Blog;
