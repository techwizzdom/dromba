import * as React from 'react';
import { css } from 'emotion';

import Paragraph from '../core/Paragraph';
import { H5 } from '../core/Heading';

import { underlineClassNameOnHover } from '../../styles/css/textHover';

import { ParagraphSize } from '../../enums/ParagraphSize';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import { BlogPostType } from '../../enums/BlogPostType';

export interface IBlogPostProps {
  title: string;
  subtitle: string;
  thumbnail: string;
  url: string;
  type: BlogPostType;
}

const blogPostCss = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: ${VerticalSpacingHeight.Large};

  ${underlineClassNameOnHover('.heading')}
`;

const thumbnailCss = (type: BlogPostType) => css`
  height: 128px;
  width: 128px;
  min-width: 128px;
  margin-left: 48px;

  object-fit: ${type === BlogPostType.DevTo ? 'cover' : 'unset'};
`;

const textWrapperCss = css`
  flex-grow: 2;
`;

const BlogPost: React.FC<IBlogPostProps> = (props: IBlogPostProps) => {
  const { title, subtitle, thumbnail, url, type } = props;

  return (
    <a
      className={blogPostCss}
      // href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={textWrapperCss}>
        <H5 isHoverable={true}>{title}</H5>
        <Paragraph size={ParagraphSize.Medium}>{subtitle}</Paragraph>
      </div>
      <img src={thumbnail} className={thumbnailCss(type)} alt="blog-post" />
    </a>
  );
};

export default BlogPost;
