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
        <section className={heroShellCss}>
          <article className={heroTextCss}>
            <span className={eyebrowCss}>Professional Tech Content Creator</span>
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
            <div className={statsGridCss}>
              <div className={statBlockCss}>
                <H3 isMegaBold={true}>{t.socials.followers}+</H3>
                <p>followers</p>
              </div>
              <div className={statBlockCss}>
                <H3 isMegaBold={true}>{t.socials.likes}+</H3>
                <p>likes</p>
              </div>
              <div className={statBlockCss}>
                <H3 isMegaBold={true}>{t.socials.views}+</H3>
                <p>views</p>
              </div>
            </div>
            <div className={actionRowCss}>
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
          </article>

          <aside className={heroVisualCss}>
            <img
              className={logoMeCss}
              src="https://i.imgur.com/o7M8EtZ.jpg"
              alt="Dom standing and smiling"
              loading="eager"
            />
          </aside>
        </section>

        <section className={techSectionCss}>
          <div className={sectionTitleCss}>
            <span>Showreel</span>
            <H2>These 6 videos combined got 20M+ views.</H2>
          </div>
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

        <section className={techSectionCss}>
          <div className={sectionTitleCss}>
            <span>Client feedback</span>
            <H2>Apparently, people love to work with me!</H2>
          </div>
          <TestimonialsGrid customTestimonials={testimonials} />
        </section>

        <section className={splitOfferCss}>
          <div className={offerBoxCss}>
            <span>Rates</span>
            <H2>I charge way less than your local TV station.</H2>
            <H5>Starting at:</H5>
            <ul>
              <li>$300 for an hour of consulting</li>
              <li>$4500 for a promo post on my social media</li>
            </ul>
          </div>
          <div className={offerBoxCss}>
            <span>Collaboration</span>
            <H2>Do you want me to make viral tech content for you?</H2>
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
            <SocialProfiles showTopFourOnly={true} />
          </div>
        </section>

        <div className={privacyPolicyCss(isPolicyOpen)}>
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
  gap: 24px;
  color: ${theme.textColor};
`;

const heroShellCss = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
  gap: 12px;
  border: 2px solid rgba(255, 212, 0, 0.65);
  background: linear-gradient(180deg, rgba(8, 8, 8, 0.98) 0%, rgba(15, 15, 15, 0.98) 100%);
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.35);
  padding: 14px;

  @media ${Media.Mobile} {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
  }
`;

const heroTextCss = css`
  border: 1px solid rgba(255, 212, 0, 0.5);
  background: rgba(10, 10, 10, 0.92);
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  @media ${Media.Mobile} {
    padding: 16px;
  }
`;

const logoMeCss = css`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 650px;
  object-fit: cover;
`;

const fireEmojiCss = css`
  height: 46px;
  width: 46px;
  margin-bottom: -4px;

  @media ${Media.Mobile} {
    height: 36px;
    width: 36px;
  }
`;

const eyebrowCss = css`
  width: fit-content;
  border: 1px solid rgba(255, 212, 0, 0.6);
  background: rgba(255, 212, 0, 0.14);
  padding: 6px 10px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #ffd400;
`;

const heroSubtitleCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const statsGridCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const statBlockCss = css`
  min-width: 132px;
  border: 1px solid rgba(255, 212, 0, 0.62);
  background: rgba(255, 212, 0, 0.08);
  padding: 10px 12px;

  p {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 10px;
    color: rgba(255, 242, 160, 0.8);
    margin-top: 5px;
  }
`;

const actionRowCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const heroVisualCss = css`
  border: 1px solid rgba(255, 212, 0, 0.6);
  background: rgba(10, 10, 10, 0.92);
  min-height: 440px;
  padding: 10px;
`;

const techSectionCss = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid rgba(255, 212, 0, 0.52);
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.96) 0%, rgba(15, 15, 15, 0.96) 100%);
  padding: 20px 16px;

  @media ${Media.Mobile} {
    padding: 14px 8px;
  }
`;

const sectionTitleCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 4px 6px;

  span {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 11px;
    color: rgba(255, 212, 0, 0.78);
  }
`;

const splitOfferCss = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media ${Media.Mobile} {
    grid-template-columns: 1fr;
  }
`;

const offerBoxCss = css`
  border: 1px solid rgba(255, 212, 0, 0.52);
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.96) 0%, rgba(15, 15, 15, 0.96) 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 11px;
    color: rgba(255, 212, 0, 0.78);
  }

  ul {
    padding-left: 22px;
    line-height: 1.9;
  }
`;

const contentExamplesCss = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  justify-items: center;

  @media ${Media.Mobile} {
    grid-template-columns: 1fr;
  }
`;

const letsWorkButton = (theme: Theme) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: 196px;
  padding: 12px 24px;
  border-radius: 2px;
  border: 1px solid rgba(255, 212, 0, 0.9);

  font-size: 17px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: ${theme.hyperlinkColor};

  background: linear-gradient(180deg, #ffd400 0%, #f0c700 100%);
  box-shadow: 0 10px 26px rgba(255, 212, 0, 0.3);
  transition: transform 0.2s ease, opacity 0.2s ease;

  :hover {
    cursor: pointer;
    transform: translateY(-2px);
    opacity: 0.95;
  }
`;

const privacyPolicyCss = (isPolicyOpen: boolean) => css`
  display: ${isPolicyOpen ? 'block' : 'none'};
  width: 320px;
  position: fixed;
  bottom: 24px;
  left: calc(50vw - 160px);
  padding: 12px 16px;
  font-size: 12px;
  text-align: center;
  line-height: 1.45;
  z-index: 32;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.34);
  border: 1px solid rgba(255, 212, 0, 0.65);
  background: rgba(9, 9, 9, 0.94);
  color: #fff6c8;

  @media ${Media.Mobile} {
    width: calc(100vw - 28px);
    left: 14px;
  }
`;

export default Me;
