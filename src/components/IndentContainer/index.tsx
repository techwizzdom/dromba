import React from 'react';
import { css } from 'emotion';

import { Media } from '../../enums/Media';

const indentContainer = css`
  padding-left: 104px;

  @media ${Media.Mobile} {
    padding-left: 0;
  }
`;

const IndentContainer: React.FC = (props: any) => {
  const { children } = props;

  return <div className={indentContainer}>{children}</div>;
};

export default IndentContainer;
