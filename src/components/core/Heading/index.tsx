import * as React from 'react';
import { css } from 'emotion';
import { HeadingTags } from '../../../enums/HeadingTags';
import { HeadingSize } from '../../../enums/HeadingSize';

interface IHeadingProps {
  children: React.ReactNode;
  tag: HeadingTags;
  size: HeadingSize;
}

interface IHProps {
  children: React.ReactNode;
}

const headingCss = (size: HeadingSize) => css`
  font-size: ${size}px;
`;

const Heading: React.FC<IHeadingProps> = (props: IHeadingProps) => {
  const { tag, size, children } = props;

  return React.createElement(tag, { className: headingCss(size) }, children);
};

export const H1: React.FC<IHProps> = (props: IHProps) => (
  <Heading tag={HeadingTags.H1} size={HeadingSize.H1}>
    {props.children}
  </Heading>
);

export const H2: React.FC<IHProps> = (props: IHProps) => (
  <Heading tag={HeadingTags.H2} size={HeadingSize.H2}>
    {props.children}
  </Heading>
);

export const H3: React.FC<IHProps> = (props: IHProps) => (
  <Heading tag={HeadingTags.H3} size={HeadingSize.H3}>
    {props.children}
  </Heading>
);

export const H4: React.FC<IHProps> = (props: IHProps) => (
  <Heading tag={HeadingTags.H4} size={HeadingSize.H4}>
    {props.children}
  </Heading>
);

export const H5: React.FC<IHProps> = (props: IHProps) => (
  <Heading tag={HeadingTags.H5} size={HeadingSize.H5}>
    {props.children}
  </Heading>
);

export const H6: React.FC<IHProps> = (props: IHProps) => (
  <Heading tag={HeadingTags.H6} size={HeadingSize.H6}>
    {props.children}
  </Heading>
);
