import React from 'react';
import { css } from 'emotion';

import { Media } from '../../enums/Media';

const indentContainerCss = css`
  padding-left: 104px;

  @media ${Media.Mobile} {
    padding-left: 0;
  }
`;

const IndentContainer: React.FC = (props: any) => {
  const { children } = props;

  return <div className={indentContainerCss}>{children}</div>;
};

export default IndentContainer;
