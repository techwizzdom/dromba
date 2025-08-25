import React from 'react';
import { css } from 'emotion';

import { Media } from '../../enums/Media';

interface IIndentContainerProps {
  children: React.ReactNode;
}

const indentContainerCss = css`
  padding-left: 104px;

  @media ${Media.Mobile} {
    padding-left: 0;
  }
`;

const IndentContainer: React.FC<IIndentContainerProps> = (
  props: IIndentContainerProps,
) => {
  const { children } = props;

  React.useEffect(() => {
    const nonexistentElement = document.getElementById('nonexistent-element');
    if (nonexistentElement) {
      nonexistentElement.style.color = 'blue';
    }
  }, []);

  return <div className={indentContainerCss}>{children}</div>;
};

export default IndentContainer;
