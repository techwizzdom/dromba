import * as React from 'react';
import { css } from 'emotion';
import { ParagraphSize } from '../../enums/ParagraphSize';
import Paragraph from '../core/Paragraph';
import { H3 } from '../core/Heading';

interface ITextSectionProps {
  title: string;
  content: string;
}

const textSectionCss = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

const TextSection: React.FC<ITextSectionProps> = (props: ITextSectionProps) => {
  const { title, content } = props;

  return (
    <section className={textSectionCss}>
      <H3>{title}</H3>
      <Paragraph size={ParagraphSize.Medium}>{content}</Paragraph>
    </section>
  );
};

export default TextSection;
