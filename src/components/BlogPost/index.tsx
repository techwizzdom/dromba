import * as React from 'react';
import { css } from 'emotion';
import Paragraph from '../core/Paragraph';
import { ParagraphSize } from '../../enums/ParagraphSize';
import { H5 } from '../core/Heading';
import { underlineClassNameOnHover } from '../../styles/css/textHover';
import { ThemeContext } from '../ThemeContext';

export interface IBlogPostProps {
  title: string;
  subtitle: string;
  thumbnail: string;
  url: string;
}

const blogPostCss = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 64px;

  ${underlineClassNameOnHover('.heading')}
`;

const borderCss = (theme: any) => css`
  height: 1px;
  flex-grow: 1;
  background-color: ${theme.timelineConnectionLineColor};
  min-width: 100px;
  margin-right: 48px;
  margin-top: 8px;
`;

const thumbnailCss = css`
  height: 128px;
  width: 128px;
  min-width: 128px;
  margin-left: 48px;
`;

const textWrapperCss = css`
  flex-grow: 2;
`;

const BlogPost: React.FC<IBlogPostProps> = (props: IBlogPostProps) => {
  const { title, subtitle, thumbnail, url } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <a
      className={blogPostCss}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* <div className={borderCss(theme)} /> */}
      <div className={textWrapperCss}>
        <H5 isHoverable={true}>{title}</H5>
        <Paragraph size={ParagraphSize.Medium}>{subtitle}</Paragraph>
      </div>
      <img src={thumbnail} className={thumbnailCss} alt="blog-post" />
    </a>
  );
};

export default BlogPost;
