import React from 'react';
import { Theme } from '../../styles';
import { ThemeContext } from '../../context/ThemeContext';
import { H5 } from '../core/Heading';
import Paragraph from '../core/Paragraph';
import { ParagraphSize } from '../../enums/ParagraphSize';
import { css } from 'emotion';
import Hyperlink from '../Hyperlink';
import VerticalSpacing from '../VerticalSpacing';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

interface ITestimonialCardProps {
  avatar: string;
  name: string;
  companyName: string;
  href?: string;
  quote1: string;
  quote2?: string;
  quote3?: string;
}

const TestimonialCard: React.FC<ITestimonialCardProps> = (
  props: ITestimonialCardProps,
) => {
  const { avatar, name, href, companyName, quote1, quote2, quote3 } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <div className={testimonialTextCss(theme)}>
      <p>
        "{quote1}
        {quote2 && (
          <>
            <br />
            <br />
            {quote2}
          </>
        )}
        {quote3 && (
          <>
            <br />
            <br />
            {quote3}
          </>
        )}
        "
      </p>
      <div className={testimonialTextContentCss}>
        <img
          src={avatar}
          className={testimonialTextImgCss}
          alt={`${name} giving a testimonial`}
        />
        <div className={testimonialTextInfoCss}>
          <H5>{name}</H5>
          <VerticalSpacing height={VerticalSpacingHeight.XSmall} />
          {href ? (
            <Hyperlink href={href}>{companyName}</Hyperlink>
          ) : (
            <Paragraph size={ParagraphSize.Medium}>{companyName}</Paragraph>
          )}
        </div>
      </div>
    </div>
  );
};

const testimonialTextImgCss = css`
  width: 96px;
  height: 96px;
  border: 2px solid yellow;
  border-radius: 50%;
  object-fit: contain;
`;

const testimonialTextCss = (theme: Theme) => css`
  width: 100%;
  border: 4px solid ${theme.textColor};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const testimonialTextContentCss = css`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const testimonialTextInfoCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export default TestimonialCard;
