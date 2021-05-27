import { useFetch } from '../hooks/useFetch';

export const useMediumBlogPosts = () => {
  const { data, isLoading } = useFetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@domagojvidovic',
  );

  if (!isLoading) {
    return [
      data.items
        .filter((item: any) => item.categories.length)
        .map((item: any) => {
          return {
            title: item.title,
            subtitle: blogPostSubtitle(item),
            thumbnail: blogPostThumbnailSmall(item),
            url: item.link,
          };
        }),
      isLoading,
    ];
  }

  return [null, isLoading];
};

const blogPostSubtitle = (blogPostItem: any) => {
  return blogPostItem.description
    .split('medium-feed-snippet')[1]
    .split('>')[1]
    .split('<')[0];
};

const blogPostThumbnailSmall = (blogPostItem: any) => {
  const imageLarge = blogPostItem.description.split('src')[1].split('"')[1];

  return imageLarge.replace('max/2600', 'fit/c/304/312');
};
