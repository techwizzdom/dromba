import React from 'react';
import { Theme } from '../../styles';
import { ThemeContext } from '../../context/ThemeContext';
import { css } from 'emotion';

interface ITestimonialScreenshotProps {
  screenshot: string;
}

const TestimonialScreenshot: React.FC<ITestimonialScreenshotProps> = (
  props: ITestimonialScreenshotProps,
) => {
  const { screenshot } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <img
      src={screenshot}
      loading="lazy"
      alt="testimonial"
      className={testimonialImageCss(theme)}
    />
  );
};

const testimonialImageCss = (theme: Theme) => css`
  width: 100%;
  border: 4px solid ${theme.textColor};
  border-radius: 16px;
`;

export default TestimonialScreenshot;
