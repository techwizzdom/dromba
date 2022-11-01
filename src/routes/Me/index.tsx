import React, { useState } from 'react';

import RouteContainer from '../../components/RouteContainer';

import { css } from 'emotion';

import Hyperlink from '../../components/Hyperlink';
import Helmetiser from '../../components/core/Helmetiser';
import { testimonialsFromPeople } from '../../testimonials';

import fireEmoji from '../../assets/images/fire-emoji.png';
import { Media } from '../../enums/Media';
import { H2, H3, H4, H5 } from '../../components/core/Heading';
import { SocialProfiles } from '../../components/SocialProfiles';
import TestimonialCard from '../../components/TestimonialCard';
import { Iphone } from '../../components/Iphone';
import VerticalSpacing from '../../components/VerticalSpacing';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import { Theme } from '../../styles';
import { ThemeContext } from '../../context/ThemeContext';
import { t } from '../../translations/t';

function Me() {
  const [isPolicyOpen, setIsPolicyOpen] = useState<boolean>(
    localStorage.getItem('isPolicyViewedDrommer') === 'true' ? false : true,
  );

  const theme = React.useContext(ThemeContext);

  const closePolicy = () => {
    localStorage.setItem('isPolicyViewedDrommer', 'true');
    setIsPolicyOpen(false);
  };

  const testimonials = [
    testimonialsFromPeople[0],
    testimonialsFromPeople[3],
    testimonialsFromPeople[2],
  ];

  return (
    <RouteContainer isPureCenteringEnabled={true} onClick={closePolicy}>
      <Helmetiser
        title="JavaScript Wizz"
        description="Senior frontend engineer. Content creator. Mentor. Speaker. Let's create awesome stuff."
        url="https://www.domagojvidovic.com"
      />
      <div className={meContentCss}>
        <img
          className={logoMeCss}
          src="https://i.imgur.com/YI0X9tD.png"
          alt="Dom standing and smiling"
        />
        <div className={meTextContentCss}>
          <H2>
            Hey{' '}
            <img
              className={fireEmojiCss}
              src={fireEmoji}
              alt="waving hand emoji"
            />{' '}
            I'm Dom.
          </H2>
          <div>
            <H4>
              A senior frontend engineer turned into tech content creator.
            </H4>
            <H4>I make viral tech content.</H4>
          </div>
          <div className={statsCss}>
            <H3 isMegaBold={true}>200k+ followers</H3>
            <H3 isMegaBold={true}>5M+ likes</H3>
            <H3 isMegaBold={true}>75M+ views</H3>
          </div>
          <SocialProfiles showTopFourOnly={true} />
        </div>
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>Apparently, people love to work with me!</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={testimonialsCss}>
        {testimonials.map((testimonial) => (
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
        ))}
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>These 6 videos combined got 20M+ views.</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={contentExamplesCss}>
        <Iphone video="https://i.imgur.com/qXFnKSD.mp4" />
        <Iphone video="https://i.imgur.com/RgIZ3Ma.mp4" />
        <Iphone video="https://i.imgur.com/S0586aa.mp4" />
        <Iphone video="https://i.imgur.com/i5ARy4D.mp4" height={570} />
        <Iphone video="https://i.imgur.com/rH4nFgI.mp4" />
        <Iphone video="https://i.imgur.com/vjKd8fb.mp4" />
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>I charge way less than your local TV station.</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H5>
        Starting at $200 for a UGC video, and $1200 for a promo post on my
        social media.
      </H5>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>Do you want me to make viral tech content for you?</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={contactCss}>
        <a
          className={letsWorkButton(theme)}
          href={t.link.workWithMeForm}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's do it!
        </a>
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

const logoMeCss = css`
  height: 600px;
  width: 400px;
  margin-right: 32px;
  border-radius: 32%;
  border: 2px solid yellow;

  @media ${Media.Mobile} {
    max-height: 400px;
    aspect-ratio: 2/3;
    margin-right: 0;
    height: auto;
    width: auto;
  }
`;

const fireEmojiCss = css`
  height: 56px;
  width: 56px;
  margin-bottom: -4px;
`;

const statsCss = css`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
`;

const meContentCss = css`
  display: flex;

  @media ${Media.Mobile} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const meTextContentCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const testimonialsCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  gap: 16px;

  @media ${Media.Mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const contentExamplesCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 16px;

  @media ${Media.Mobile} {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
`;

const letsWorkButton = (theme: Theme) => css`
  display: block;

  padding: 8px;
  border-radius: 2px;

  font-size: 24px;
  color: ${theme.hyperlinkColor};

  background-color: ${theme.hyperlinkBackgroundColor};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const contactCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Me;
