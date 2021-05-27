import * as React from 'react';
import { css } from 'emotion';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

interface IVerticalSpacingProps {
  height: VerticalSpacingHeight;
}

const verticalSpacingCss = (height: VerticalSpacingHeight) => css`
  width: 100%;
  height: ${height};
`;

const VerticalSpacing: React.FC<IVerticalSpacingProps> = (
  props: IVerticalSpacingProps,
) => {
  const { height } = props;

  return <div className={verticalSpacingCss(height)} />;
};

export default VerticalSpacing;
