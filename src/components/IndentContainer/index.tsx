import React from 'react';
import { css } from 'emotion';
import { MediaBreakpoints } from '../../enums/MediaBreakpoints';

const indentContainer = css`
  padding-left: 128px;

  @media (min-width: ${MediaBreakpoints.Mobile}px) and (max-width: ${MediaBreakpoints.Tablet}px) {
    max-width: 576px;
  }

  @media (max-width: ${MediaBreakpoints.Mobile}px) {
    padding: 64px 8px;
  }
`;

const IndentContainer: React.FC = (props: any) => {
  const { children } = props;

  return <div className={indentContainer}>{children}</div>;
};

export default IndentContainer;
