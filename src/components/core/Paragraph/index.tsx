import * as React from 'react';
import { css } from 'emotion';
import { ParagraphSize } from '../../../enums/ParagraphSize';

interface IParagraphProps {
  children: React.ReactNode;
  size: ParagraphSize;
}

const ParagraphCss = (size: ParagraphSize) => css`
  font-size: ${size};
`;

const Paragraph: React.FC<IParagraphProps> = (props: IParagraphProps) => {
  const { size } = props;

  return <p className={ParagraphCss(size)}>{props.children}</p>;
};

export default Paragraph;
