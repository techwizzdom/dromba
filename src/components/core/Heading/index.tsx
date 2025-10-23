import * as React from 'react';
import { cx, css } from 'emotion';
import { useDevice } from '../../../hooks/useDevice';

import { ThemeContext } from '../../../context/ThemeContext';
import { Theme } from '../../../styles';

import { HeadingTags } from '../../../enums/HeadingTags';
import { HeadingSize } from '../../../enums/HeadingSize';
import { DeviceType } from '../../../enums/DeviceType';

import { underlineOnHover } from '../../../styles/css/textHover';

interface IHeadingProps {
  children: React.ReactNode;
  tag: HeadingTags;
  size: HeadingSize;
  isHoverable?: boolean;
  alignCenter?: boolean;
  isMegaBold?: boolean;
  isThin?: boolean;
}

interface IHProps {
  children: React.ReactNode;
  isHoverable?: boolean;
  alignCenter?: boolean;
  isMegaBold?: boolean;
  isThin?: boolean;
}

const Heading: React.FC<IHeadingProps> = (props: IHeadingProps) => {
  const {
    tag,
    size,
    isHoverable = false,
    alignCenter,
    isMegaBold,
    isThin,
    children,
  } = props;

  const theme = React.useContext(ThemeContext);

  return React.createElement(
    tag,
    {
      className: cx(
        headingCss(size, theme, isHoverable, alignCenter, isMegaBold, isThin),
        'heading',
      ),
    },
    children,
  );
};

export const H1: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H1}
    size={useDevice() === DeviceType.Mobile ? HeadingSize.H2 : HeadingSize.H1}
    isHoverable={props.isHoverable}
    alignCenter={props.alignCenter}
    isMegaBold={props.isMegaBold}
    isThin={props.isThin}
  >
    {props.children}
  </Heading>
);

export const H2: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H2}
    size={useDevice() === DeviceType.Mobile ? HeadingSize.H3 : HeadingSize.H2}
    isHoverable={props.isHoverable}
    alignCenter={props.alignCenter}
    isMegaBold={props.isMegaBold}
    isThin={props.isThin}
  >
    {props.children}
  </Heading>
);

export const H3: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H3}
    size={useDevice() === DeviceType.Mobile ? HeadingSize.H4 : HeadingSize.H3}
    isHoverable={props.isHoverable}
    alignCenter={props.alignCenter}
    isMegaBold={props.isMegaBold}
    isThin={props.isThin}
  >
    {props.children}
  </Heading>
);

export const H4: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H4}
    size={HeadingSize.H4}
    isHoverable={props.isHoverable}
    alignCenter={props.alignCenter}
    isMegaBold={props.isMegaBold}
    isThin={props.isThin}
  >
    {props.children}
  </Heading>
);

export const H5: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H5}
    size={HeadingSize.H5}
    isHoverable={props.isHoverable}
    alignCenter={props.alignCenter}
    isMegaBold={props.isMegaBold}
    isThin={props.isThin}
  >
    {props.children}
  </Heading>
);

export const H6: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H6}
    size={HeadingSize.H6}
    isHoverable={props.isHoverable}
    alignCenter={props.alignCenter}
    isMegaBold={props.isMegaBold}
    isThin={props.isThin}
  >
    {props.children}
  </Heading>
);

export const headingCss = (
  size: HeadingSize,
  theme: Theme,
  isHoverable?: boolean,
  alignCenter?: boolean,
  isMegaBold?: boolean,
  isThin?: boolean,
) => css`
  font-size: ${size};
  position: relative;

  ${alignCenter && 'text-align: center;'}

  ${isHoverable ? underlineOnHover(theme) : null}

  ${isMegaBold ? 'font-weight: 900;' : null}

  ${isThin ? 'font-weight: 500;' : null}
`;
