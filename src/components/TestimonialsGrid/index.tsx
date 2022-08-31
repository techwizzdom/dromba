import { css } from 'emotion';
import * as React from 'react';
import { Media } from '../../enums/Media';
import { testimonialImages, testimonialsFromPeople } from '../../testimonials';
import TestimonialCard from '../TestimonialCard';
import TestimonialScreenshot from '../TestimonialScreenshot';

const TestimonialsGrid: React.FC = () => {
  const mappedTestimonialImages = testimonialImages.map((image) => {
    return {
      screenshot: image,
    };
  });

  const allTestimonials = (testimonialsFromPeople as Array<any>).concat(
    mappedTestimonialImages,
  );

  const testimonialsColumnOne = allTestimonials.filter(
    (_testimonials, i) => i % 3 === 0,
  );
  const testimonialsColumnTwo = allTestimonials.filter(
    (_testimonials, i) => i % 3 === 1,
  );
  const testimonialsColumnThree = allTestimonials.filter(
    (_testimonials, i) => i % 3 === 2,
  );

  const renderTestimonials = (testimonials: Array<any>) => {
    return (
      <>
        {testimonials.map((testimonial) => {
          return testimonial.name ? (
            <TestimonialCard
              key={testimonial.avatar}
              avatar={testimonial.avatar}
              href={testimonial.href}
              companyName={testimonial.companyName}
              name={testimonial.name}
              quote1={testimonial.quote1}
              quote2={testimonial.quote2}
              quote3={testimonial.quote3}
            />
          ) : (
            <TestimonialScreenshot
              key={testimonial.screenshot}
              screenshot={testimonial.screenshot}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className={testimonialsGridCss}>
        <div className={testimonialsGridColumnCss}>
          {renderTestimonials(testimonialsColumnOne)}
        </div>
        <div className={testimonialsGridColumnCss}>
          {renderTestimonials(testimonialsColumnTwo)}
        </div>
        <div className={testimonialsGridColumnCss}>
          {renderTestimonials(testimonialsColumnThree)}
        </div>
      </div>
      <div className={testimonialsGridMobileCss}>
        {renderTestimonials(allTestimonials)}
      </div>
    </>
  );
};

const testimonialsGridCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  align-items: flex-start;

  @media ${Media.Mobile} {
    display: none;
  }
`;

const testimonialsGridMobileCss = css`
  display: none;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: flex-start;

  @media ${Media.Mobile} {
    display: grid;
  }
`;

const testimonialsGridColumnCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default TestimonialsGrid;
