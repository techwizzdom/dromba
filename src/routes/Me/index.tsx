import React, { useState } from 'react';
import { css } from 'emotion';

import RouteContainer from '../../components/RouteContainer';
import Hyperlink from '../../components/Hyperlink';
import Helmetiser from '../../components/core/Helmetiser';
import { testimonialsFromPeople } from '../../testimonials';
import fireEmoji from '../../assets/images/fire-emoji.png';
import { Media } from '../../enums/Media';
import { H1, H2, H3, H4, H5 } from '../../components/core/Heading';
import { SocialProfiles } from '../../components/SocialProfiles';
import { Iphone } from '../../components/Iphone';
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
    testimonialsFromPeople[0],
    testimonialsFromPeople[1],
    testimonialsFromPeople[2],
    testimonialsFromPeople[8],
    testimonialsFromPeople[4],
    testimonialsFromPeople[7],
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Domagoj Lalk Vidovic',
        url: 'https://www.techwizzdom.com',
        image: 'https://i.imgur.com/o7M8EtZ.jpg',
        description:
          'A 9-5 senior frontend engineer turned into tech content creator, influencer and tech startup founder.',
        jobTitle: 'Tech Content Creator',
        email: `mailto:${t.email.pr}`,
        sameAs: [
          t.link.instagram,
          t.link.tiktok,
          t.link.youtube,
          t.link.linkedIn,
          t.link.github,
          t.link.medium,
          t.link.twitter,
          t.link.devto,
        ],
      },
      {
        '@type': 'Organization',
        name: 'Tech Wizzdom',
        url: 'https://www.techwizzdom.com',
        founder: {
          '@type': 'Person',
          name: 'Domagoj Lalk Vidovic',
        },
      },
    ],
  };

  return (
    <RouteContainer onClick={closePolicy}>
      <Helmetiser
        title="Tech Wizzdom"
        description="A 9-5 senior frontend engineer turned into tech content creator, influencer and tech startup founder. I make viral technology content."
        url="https://www.techwizzdom.com"
        image="https://i.imgur.com/o7M8EtZ.jpg"
        keywords="tech creator, influencer marketing, startup founder, frontend engineer, viral tech videos"
        structuredData={structuredData}
      />
      <main className={pageCss(theme)}>
        <section className={heroSectionCss(theme)}>
          <div className={meTextContentCss}>
            <H1>
              Hey{' '}
              <img
                className={fireEmojiCss}
                src={fireEmoji}
                alt="waving hand emoji"
              />{' '}
              I&apos;m Dom.
            </H1>
            <div className={heroSubtitleCss}>
              <H4>
                A 9-5 senior frontend engineer turned into tech content creator,
                influencer and tech startup founder.
              </H4>
              <H4>I make viral tech content.</H4>
            </div>
            <div className={statsCss}>
              <span className={statChipCss(theme)}>
                <H3 isMegaBold={true}>{t.socials.followers}+ followers</H3>
              </span>
              <span className={statChipCss(theme)}>
                <H3 isMegaBold={true}>{t.socials.likes}+ likes</H3>
              </span>
              <span className={statChipCss(theme)}>
                <H3 isMegaBold={true}>{t.socials.views}+ views</H3>
              </span>
            </div>
            <div className={heroActionsCss}>
              <a
                className={letsWorkButton(theme)}
                href={t.link.workWithMeForm}
                target="_blank"
                rel="noopener noreferrer"
              >
                LET&apos;S GO!
              </a>
              <H5>
                or drop me an email at{' '}
                <Hyperlink href={t.email.pr} isEmail={true}>
                  {t.email.pr}
                </Hyperlink>
              </H5>
            </div>
            <SocialProfiles showTopFourOnly={true} />
          </div>
          <div className={heroImageShellCss(theme)}>
            <img
              className={logoMeCss}
              src="https://i.imgur.com/o7M8EtZ.jpg"
              alt="Dom standing and smiling"
              loading="eager"
            />
          </div>
        </section>

        <section className={contentSectionCss(theme)}>
          <H2>These 6 videos combined got 20M+ views.</H2>
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
        </section>

        <section className={contentSectionCss(theme)}>
          <H2>Apparently, people love to work with me!</H2>
          <TestimonialsGrid customTestimonials={testimonials} />
        </section>

        <section className={pricingSectionCss(theme)}>
          <H2>I charge way less than your local TV station.</H2>
          <H5>Starting at:</H5>
          <ul>
            <li>$300 for an hour of consulting</li>
            <li>$4500 for a promo post on my social media</li>
          </ul>
        </section>

        <section className={ctaSectionCss(theme)}>
          <H2>Do you want me to make viral tech content for you?</H2>
          <a
            className={letsWorkButton(theme)}
            href={t.link.workWithMeForm}
            target="_blank"
            rel="noopener noreferrer"
          >
            LET&apos;S GO!
          </a>
          <H5 alignCenter>
            or drop me an email at{' '}
            <Hyperlink href={t.email.pr} isEmail={true}>
              {t.email.pr}
            </Hyperlink>
          </H5>
          <SocialProfiles showTopFourOnly={true} />
        </section>

        <div className={privacyPolicyCss(isPolicyOpen, theme)}>
          To improve your experience even more, I use cookies for analytics.
          Find out more{' '}
          <Hyperlink href="https://www.freeprivacypolicy.com/live/00b087ad-a4a1-4885-8265-15beceb176df">
            here
          </Hyperlink>
        </div>
      </main>
    </RouteContainer>
  );
}

const pageCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 34px;
  color: ${theme.textColor};
`;

const heroSectionCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 26px;
  align-items: stretch;
  border-radius: 28px;
  border: 1px solid ${theme.isDark ? 'rgba(238, 241, 255, 0.22)' : 'rgba(16, 18, 49, 0.12)'};
  background: ${theme.isDark
    ? 'linear-gradient(135deg, rgba(14, 18, 42, 0.74) 0%, rgba(18, 22, 50, 0.74) 100%)'
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.84) 0%, rgba(246, 248, 255, 0.84) 100%)'};
  box-shadow: 0 24px 50px rgba(8, 14, 42, 0.16);
  padding: 34px;

  @media ${Media.Mobile} {
    grid-template-columns: 1fr;
    padding: 18px;
    gap: 18px;
  }
`;

const privacyPolicyCss = (isPolicyOpen: boolean, theme: Theme) => css`
  display: ${isPolicyOpen ? 'block' : 'none'};
  width: 340px;
  position: fixed;
  bottom: 24px;
  left: calc(50vw - 170px);
  padding: 14px 18px;
  font-size: 12px;
  text-align: center;
  line-height: 1.45;
  z-index: 30;
  box-shadow: 0 18px 42px rgba(7, 14, 44, 0.3);
  border: 1px solid
    ${theme.isDark ? 'rgba(238, 241, 255, 0.34)' : 'rgba(16, 20, 48, 0.28)'};
  background: ${theme.isDark
    ? 'rgba(15, 19, 47, 0.9)'
    : 'rgba(255, 255, 255, 0.92)'};
  border-radius: 12px;
`;

const logoMeCss = css`
  display: block;
  width: 100%;
  max-height: 560px;
  object-fit: cover;
  border-radius: 26px;

  @media ${Media.Mobile} {
    max-height: 420px;
  }
`;

const fireEmojiCss = css`
  height: 52px;
  width: 52px;
  margin-bottom: -6px;

  @media ${Media.Mobile} {
    height: 36px;
    width: 36px;
  }
`;

const statsCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

const statChipCss = (theme: Theme) => css`
  border-radius: 999px;
  border: 1px solid
    ${theme.isDark ? 'rgba(238, 241, 255, 0.24)' : 'rgba(17, 20, 56, 0.14)'};
  background: ${theme.isDark
    ? 'rgba(255, 255, 255, 0.06)'
    : 'rgba(255, 255, 255, 0.78)'};
  padding: 8px 14px;
`;

const heroActionsCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const heroSubtitleCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const heroImageShellCss = (theme: Theme) => css`
  border-radius: 28px;
  padding: 10px;
  border: 1px solid
    ${theme.isDark ? 'rgba(238, 241, 255, 0.24)' : 'rgba(17, 20, 56, 0.12)'};
  background: ${theme.isDark
    ? 'rgba(255, 255, 255, 0.04)'
    : 'rgba(255, 255, 255, 0.62)'};
`;

const meTextContentCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const contentSectionCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-radius: 28px;
  border: 1px solid
    ${theme.isDark ? 'rgba(238, 241, 255, 0.18)' : 'rgba(16, 18, 49, 0.1)'};
  background: ${theme.isDark
    ? 'rgba(16, 20, 44, 0.56)'
    : 'rgba(255, 255, 255, 0.72)'};
  padding: 28px;

  @media ${Media.Mobile} {
    padding: 16px;
  }
`;

const pricingSectionCss = (theme: Theme) => css`
  border-radius: 28px;
  border: 1px solid
    ${theme.isDark ? 'rgba(238, 241, 255, 0.18)' : 'rgba(16, 18, 49, 0.1)'};
  background: ${theme.isDark
    ? 'rgba(16, 20, 44, 0.56)'
    : 'rgba(255, 255, 255, 0.72)'};
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  ul {
    padding-left: 22px;
    font-size: 20px;
    line-height: 1.85;
  }
`;

const ctaSectionCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  text-align: center;
  border-radius: 28px;
  border: 1px solid
    ${theme.isDark ? 'rgba(238, 241, 255, 0.24)' : 'rgba(16, 18, 49, 0.12)'};
  background: ${theme.isDark
    ? 'linear-gradient(135deg, rgba(111, 92, 255, 0.22) 0%, rgba(74, 216, 255, 0.16) 100%)'
    : 'linear-gradient(135deg, rgba(111, 92, 255, 0.1) 0%, rgba(74, 216, 255, 0.12) 100%)'};
  padding: 30px 20px;
`;

const contentExamplesCss = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  justify-items: center;

  @media ${Media.Mobile} {
    grid-template-columns: 1fr;
  }
`;

const letsWorkButton = (theme: Theme) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: 184px;
  padding: 12px 24px;
  border-radius: 999px;
  border: 1px solid
    ${theme.isDark ? 'rgba(238, 241, 255, 0.36)' : 'rgba(16, 20, 48, 0.18)'};

  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: ${theme.hyperlinkColor};

  background: ${theme.isDark
    ? 'linear-gradient(135deg, #3c4db3 0%, #6f5cff 100%)'
    : 'linear-gradient(135deg, #e7ebff 0%, #d5e8ff 100%)'};
  box-shadow: 0 16px 35px rgba(16, 22, 61, 0.2);
  transition: transform 0.2s ease, opacity 0.2s ease;

  :hover {
    cursor: pointer;
    transform: translateY(-1px);
    opacity: 0.92;
  }
`;

export default Me;
