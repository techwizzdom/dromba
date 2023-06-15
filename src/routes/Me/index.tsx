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
import { Iphone } from '../../components/Iphone';
import VerticalSpacing from '../../components/VerticalSpacing';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import { Theme } from '../../styles';
import { ThemeContext } from '../../context/ThemeContext';
import { t } from '../../translations/t';
import TestimonialsGrid from '../../components/TestimonialsGrid';

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
    testimonialsFromPeople[4],
    testimonialsFromPeople[2],
    testimonialsFromPeople[5],
    testimonialsFromPeople[0],
    testimonialsFromPeople[3],
    testimonialsFromPeople[6],
  ];

  return (
    <RouteContainer isPureCenteringEnabled={true} onClick={closePolicy}>
      <Helmetiser
        title="Tech Wizzdom"
        description="Senior frontend engineer turned into tech content creator and influencer. I make viral tech content."
        url="https://www.domagojvidovic.com"
      />
      <div className={meContentCss}>
        <img
          className={logoMeCss}
          src="https://i.imgur.com/o7M8EtZ.jpg"
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
            <H3 isMegaBold={true}>{t.socials.followers}+ followers</H3>
            <H3 isMegaBold={true}>{t.socials.likes}+ likes</H3>
            <H3 isMegaBold={true}>{t.socials.views}+ views</H3>
          </div>
          <a
            className={letsWorkButton(theme, true)}
            href={t.link.workWithMeForm}
            target="_blank"
            rel="noopener noreferrer"
          >
            LET'S GO!
          </a>
        </div>
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>These 6 videos combined got 20M+ views.</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={contentExamplesCss}>
        <Iphone
          video="https://i.imgur.com/9prWR8s.mp4"
          cover="https://i.imgur.com/i2ydFoW.jpg"
        />
        <Iphone
          video="https://i.imgur.com/pBpPeHA.mp4"
          cover="https://i.imgur.com/s3NcAx4.jpg"
          height={570}
        />
        <Iphone
          video="https://i.imgur.com/gzLKdl7.mp4"
          cover="https://i.imgur.com/eLPYfJD.jpg"
        />
        <Iphone
          video="https://i.imgur.com/iwYhniR.mp4"
          cover="https://i.imgur.com/1YCQu4t.jpg"
        />
        <Iphone
          video="https://i.imgur.com/n2LXaky.mp4"
          cover="https://i.imgur.com/cHki3lR.jpg"
        />
        <Iphone
          video="https://i.imgur.com/2qgK2b1.mp4"
          cover="https://i.imgur.com/O3Vo609.jpg"
        />
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>Apparently, people love to work with me!</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <TestimonialsGrid customTestimonials={testimonials} />
      <VerticalSpacing height={VerticalSpacingHeight.Giant} />
      <H2>I charge way less than your local TV station.</H2>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H5>
        Starting at:
        <ul>
          <li>$300 for a UGC video</li>
          <li>$300 for an hour of consulting</li>
          <li>$1500 for a promo post on my social media</li>
        </ul>
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
          LET'S GO!
        </a>
        <H5 alignCenter>
          or drop me an email at{' '}
          <Hyperlink href={t.email.techwizzdom} isEmail={true}>
            {t.email.techwizzdom}
          </Hyperlink>
        </H5>
        <VerticalSpacing height={VerticalSpacingHeight.Medium} />
        <SocialProfiles showTopFourOnly={true} />
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

  @media ${Media.Mobile} {
    height: 40px;
    width: 40px;
  }
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
    flex-direction: column-reverse;
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

const contentExamplesCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 16px;

  @media ${Media.Mobile} {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
`;

const letsWorkButton = (theme: Theme, alignLeftDesktop?: boolean) => css`
  display: block;
  ${alignLeftDesktop ? 'align-self: baseline;' : ''}

  padding: 8px;
  border-radius: 2px;

  font-size: 24px;
  color: ${theme.hyperlinkColor};

  background-color: ${theme.hyperlinkBackgroundColor};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media ${Media.Mobile} {
    align-self: center;
  }
`;

const contactCss = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export default Me;
