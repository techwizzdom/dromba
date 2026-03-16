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
  width: 72px;
  height: 72px;
  border: 2px solid rgba(111, 92, 255, 0.42);
  border-radius: 50%;
  object-fit: cover;
`;

const testimonialTextCss = (theme: Theme) => css`
  width: 100%;
  border: 1px solid
    ${theme.isDark ? 'rgba(238, 241, 255, 0.2)' : 'rgba(17, 20, 56, 0.14)'};
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  background: ${theme.isDark
    ? 'rgba(18, 22, 50, 0.58)'
    : 'rgba(255, 255, 255, 0.74)'};
  box-shadow: 0 16px 35px rgba(8, 15, 40, 0.14);

  p {
    font-size: 17px;
    line-height: 1.75;
  }
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
