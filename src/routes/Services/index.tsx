import React, { useState } from 'react';

import RouteContainer from '../../components/RouteContainer';

import { css } from 'emotion';

import Hyperlink from '../../components/Hyperlink';
import Helmetiser from '../../components/core/Helmetiser';
import { H1, H5 } from '../../components/core/Heading';
import { ReactComponent as Mentoring } from '../../assets/icons/mentoring.svg';
import { ReactComponent as SocialMediaManager } from '../../assets/icons/social-media-manager.svg';
import { ReactComponent as ContentCreation } from '../../assets/icons/content-creation.svg';
import { ReactComponent as BrandCollaboration } from '../../assets/icons/brand-collaboration.svg';
import { ReactComponent as Consultancy } from '../../assets/icons/consultancy.svg';
import ServiceCard from '../../components/ServiceCard';
import VerticalSpacing from '../../components/VerticalSpacing';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import { Media } from '../../enums/Media';
import { t } from '../../translations/t';
import { trackEvent } from '../../util/metrics';
import { testimonials } from '../../testimonials';
import { Theme } from '../../styles';
import { ThemeContext } from '../../context/ThemeContext';
import Paragraph from '../../components/core/Paragraph';
import { ParagraphSize } from '../../enums/ParagraphSize';

function Services() {
  const [isPolicyOpen, setIsPolicyOpen] = useState<boolean>(
    localStorage.getItem('isPolicyViewedDrommer') === 'true' ? false : true,
  );

  const closePolicy = () => {
    localStorage.setItem('isPolicyViewedDrommer', 'true');
    setIsPolicyOpen(false);
  };

  const theme = React.useContext(ThemeContext);

  return (
    <RouteContainer isPureCenteringEnabled={true} onClick={closePolicy}>
      <Helmetiser
        title="JavaScript Wizz"
        description="Senior frontend engineer. Content creator. Mentor. Speaker. Let's create awesome stuff."
        url="https://www.domagojvidovic.com"
      />
      <H1>Together, we can create anything.</H1>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H5>Click on a service to book a call.</H5>
      <H5>
        {' '}
        Or drop me an email at{' '}
        <Hyperlink
          href={t.email.dvidovic}
          isUnderline={true}
          isEmail={true}
          onClick={() => trackEvent('Email', 'Links')}
        >
          {t.email.dvidovic}
        </Hyperlink>
        .
      </H5>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={servicesCardGridCss}>
        <ServiceCard
          title="Mentoring"
          descriptionTop="We can get you your first job, or supercharge your career."
          descriptionBottom="Anything you wish."
          href={t.link.book30mins}
        >
          <Mentoring />
        </ServiceCard>
        <ServiceCard
          title="Brand Collaboration"
          descriptionTop="Let's market your incredible product."
          descriptionBottom="I will share it with my massive tech following."
          href={t.link.letsCreateAwesomeStuff}
        >
          <BrandCollaboration />
        </ServiceCard>
        <ServiceCard
          title="Content Creation"
          descriptionTop="I can create any content you want."
          descriptionBottom="Feel free to do anything you like with it, it's all yours."
          href={t.link.letsCreateAwesomeStuff}
        >
          <ContentCreation />
        </ServiceCard>
        <ServiceCard
          title="Social Media Manager"
          descriptionTop="I will create your social media accounts."
          descriptionBottom="And grow them from 0 to infinity."
          href={t.link.letsCreateAwesomeStuff}
        >
          <SocialMediaManager />
        </ServiceCard>
        <ServiceCard
          title="Consultancy"
          descriptionTop="Your app has problems? You need to architect it?"
          descriptionBottom="Just name it. We'll sort it out."
          href={t.link.letsCreateAwesomeStuff}
        >
          <Consultancy />
        </ServiceCard>
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />

      <H1>Testimonials.</H1>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H5>Thanks for these wonderful words :)</H5>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={testimonialsGridCss}>
        <div className={testimonialTextCss(theme)}>
          <div className={testimonialTextContentCss}>
            <img
              src="https://i.imgur.com/g1eQfaG.jpg"
              className={testimonialTextImgCss}
              alt="person-giving-testimonial"
            />
            <H5>Dani Grant</H5>
            <Hyperlink href={t.link.jam}>Jam</Hyperlink>
          </div>
          <p className={testimonialTextQuoteCss}>
            "We loved working with Dom, he was super quick, creative, reliable,
            and the video he created with us was just outstanding. Thank you,
            Dom!"
          </p>
        </div>
        <div className={testimonialTextCss(theme)}>
          <div className={testimonialTextContentCss}>
            <img
              src="https://i.imgur.com/31Gfu7B.jpg"
              className={testimonialTextImgCss}
              alt="person-giving-testimonial"
            />
            <H5>Ante Simac</H5>
            <Paragraph size={ParagraphSize.Medium}>Student</Paragraph>
          </div>
          <p className={testimonialTextQuoteCss}>
            "As someone without a formal background in coding having Dom as a
            coach is invaluable.
            <br />
            <br />
            Content that previously seemed unbearably intricate Dom dissected in
            easy-to-understand chunks.
            <br />
            <br />
            Patient, diligent and knows his stuff. Highly recommended!"
          </p>
        </div>
        {testimonials.map((testimonial) => (
          <img
            src={testimonial}
            loading="lazy"
            alt="testimonial"
            className={testimonialImageCss(theme)}
          />
        ))}
      </div>
      <div className={privacyPolicyCss(isPolicyOpen)}>
        To improve your experience even more, I use cookies for analytics. Find
        out more{' '}
        <Hyperlink href="https://www.freeprivacypolicy.com/live/00b087ad-a4a1-4885-8265-15beceb176df">
          here
        </Hyperlink>
      </div>
    </RouteContainer>
  );
}

const testimonialTextImgCss = css`
  width: 96px;
  height: 96px;
  border: 2px solid yellow;
  border-radius: 50%;
`;

const testimonialTextCss = (theme: Theme) => css`
  width: 100%;
  border: 4px solid ${theme.textColor};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const testimonialTextQuoteCss = css`
  font-size: 12px;

  @media ${Media.Mobile} {
    font-size: 16px;
  }
`;

const testimonialTextContentCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
`;

const testimonialImageCss = (theme: Theme) => css`
  width: 100%;
  border: 4px solid ${theme.textColor};
  border-radius: 16px;
`;

const testimonialsGridCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  align-items: center;

  @media ${Media.Mobile} {
    grid-template-columns: 1fr;
  }
`;

const servicesCardGridCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;

  @media ${Media.Mobile} {
    grid-template-columns: 1fr;
  }
`;

const privacyPolicyCss = (isPolicyOpen: boolean) => css`
  display: ${isPolicyOpen ? 'block' : 'none'};
  width: 300px;
  position: fixed;
  bottom: 32px;
  left: calc(50vw - 150px);
  padding: 12px 16px;
  font-size: 12px;
  text-align: center;
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
    var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  border: 2px solid #000000a6;
  border-radius: 4px;
`;

export default Services;
