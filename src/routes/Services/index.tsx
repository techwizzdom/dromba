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
import TestimonialsGrid from '../../components/TestimonialsGrid';

function Services() {
  const [isPolicyOpen, setIsPolicyOpen] = useState<boolean>(
    localStorage.getItem('isPolicyViewedDrommer') === 'true' ? false : true,
  );

  const closePolicy = () => {
    localStorage.setItem('isPolicyViewedDrommer', 'true');
    setIsPolicyOpen(false);
  };

  return (
    <RouteContainer isPureCenteringEnabled={true} onClick={closePolicy}>
      <Helmetiser
        title="Tech Wizzdom"
        description="A 9-5 senior frontend engineer turned into tech content creator, influencer and tech startup founder. I make viral technology content."
        url="https://www.techwizzdom.com"
      />
      <H1>Together, we can create anything.</H1>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H5>Click on a service for further action.</H5>
      <H5>
        {' '}
        Or drop me an email at{' '}
        <Hyperlink
          href={t.email.pr}
          isUnderline={true}
          isEmail={true}
          onClick={() => trackEvent('Email', 'Links')}
        >
          {t.email.pr}
        </Hyperlink>
        .
      </H5>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={servicesCardGridCss}>
        <ServiceCard
          title="Social Media Mentoring"
          descriptionTop="Monetize. Grow. Build a brand."
          descriptionBottom="Let's radically improve your social media presence."
          href={t.link.book45minsSocials}
        >
          <SocialMediaManager />
        </ServiceCard>
        <ServiceCard
          title="Brand Collaboration"
          descriptionTop="Let's market your incredible product."
          descriptionBottom="I will share it with my massive tech following."
          href={t.link.workWithMeForm}
        >
          <BrandCollaboration />
        </ServiceCard>
        <ServiceCard
          title="Content Creation"
          descriptionTop="I can create any content you want."
          descriptionBottom="Feel free to do anything you like with it, it's all yours."
          href={t.link.workWithMeForm}
        >
          <ContentCreation />
        </ServiceCard>
        <ServiceCard
          title="Tech Mentoring"
          descriptionTop="We can get you your first job, or supercharge your career."
          descriptionBottom="Anything you wish."
          href={t.link.book30mins}
        >
          <Mentoring />
        </ServiceCard>
        <ServiceCard
          title="Consultancy"
          descriptionTop="Your app has problems? You need to architect it?"
          descriptionBottom="Just name it. We'll sort it out."
          href={t.link.workWithMeForm}
        >
          <Consultancy />
        </ServiceCard>
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />

      <H1>Testimonials.</H1>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H5>Thanks for these wonderful words :)</H5>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <TestimonialsGrid />
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
