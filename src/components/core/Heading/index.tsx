import * as React from 'react';
import { css } from 'emotion';
import { HeadingTags } from '../../../enums/HeadingTags';
import { HeadingSize } from '../../../enums/HeadingSize';

interface IHeadingProps {
  children: React.ReactNode;
  tag: HeadingTags;
}

const headingCss = (tag: HeadingTags) => css`
  font-size: 32px;
`;

const Heading: React.FC<IHeadingProps> = (props: IHeadingProps) => {
  const { tag, children } = props;

  return React.createElement(tag, { className: headingCss(tag) }, children);
};

export default Heading;
