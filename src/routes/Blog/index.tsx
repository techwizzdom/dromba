import React from 'react';

import RouteContainer from '../../components/RouteContainer';
import BlogPost, { IBlogPostProps } from '../../components/BlogPost';
import { useMediumBlogPosts } from '../../services/useMediumBlogPosts';
import IndentContainer from '../../components/IndentContainer';
import { H1 } from '../../components/core/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

function Blog() {
  const [blogPosts, isLoading] = useMediumBlogPosts();

  return (
    <RouteContainer>
      <H1>Sometimes, I like to question the obvious.</H1>
      <H1>And write about it.</H1>

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
