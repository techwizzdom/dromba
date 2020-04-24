import React from 'react';
import RouteContainer from '../../components/RouteContainer';
import TextSection from '../../components/TextSection';

const fetchBlogPosts = () => {
  fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dvidovic91',
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

function Blog() {
  fetchBlogPosts();
  return <RouteContainer>Blog post</RouteContainer>;
}

export default Blog;
