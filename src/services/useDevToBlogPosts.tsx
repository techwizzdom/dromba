import { useFetch } from '../hooks/useFetch';
import { BlogPostType } from '../enums/BlogPostType';

export const useDevToBlogPosts = () => {
  const { data, isLoading } = useFetch(
    'https://dev.to/api/articles?username=domagojvidovic',
  );

  if (!isLoading) {
    return [
      data.map((item: any) => {
        return {
          title: item.title,
          subtitle: item.tag_list.map((tag: any) => `#${tag}`).join(', '),
          thumbnail: item.social_image,
          url: item.url,
          type: BlogPostType.DevTo,
        };
      }),
      isLoading,
    ];
  }

  return [null, isLoading];
};
