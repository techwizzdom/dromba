import React from 'react';
import RouteContainer from '../../components/RouteContainer';
import BlogPost, { IBlogPostProps } from '../../components/BlogPost';
import { useMediumBlogPosts } from '../../services/useMediumBlogPosts';

function Blog() {
  const [blogPosts, isLoading] = useMediumBlogPosts();

  return (
    <RouteContainer>
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
    </RouteContainer>
  );
}

export default Blog;
