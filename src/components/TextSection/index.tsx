import * as React from 'react';
import { css } from 'emotion';
import { HeadingTags } from '../../enums/HeadingTags';
import { ParagraphSize } from '../../enums/ParagraphSize';
import Heading from '../core/Heading';
import Paragraph from '../core/Paragraph';

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
      <Heading tag={HeadingTags.H3}>{title}</Heading>
      <Paragraph size={ParagraphSize.Medium}>{content}</Paragraph>
    </section>
  );
};

export default TextSection;
