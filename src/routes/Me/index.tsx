import React, { useState, useRef, useEffect } from 'react';
import { css } from 'emotion';
import Helmetiser from '../../components/core/Helmetiser';
import { t } from '../../translations/t';
import { testimonialsFromPeople } from '../../testimonials';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const VIDEOS = [
  { video: 'https://i.imgur.com/9prWR8s.mp4', cover: 'https://i.imgur.com/i2ydFoW.jpg' },
  { video: 'https://i.imgur.com/pBpPeHA.mp4', cover: 'https://i.imgur.com/s3NcAx4.jpg' },
  { video: 'https://i.imgur.com/gzLKdl7.mp4', cover: 'https://i.imgur.com/eLPYfJD.jpg' },
  { video: 'https://i.imgur.com/iwYhniR.mp4', cover: 'https://i.imgur.com/1YCQu4t.jpg' },
  { video: 'https://i.imgur.com/n2LXaky.mp4', cover: 'https://i.imgur.com/cHki3lR.jpg' },
  { video: 'https://i.imgur.com/2qgK2b1.mp4', cover: 'https://i.imgur.com/O3Vo609.jpg' },
];

const STATS = [
  { value: '800K+', label: 'Followers' },
  { value: '2.3M+', label: 'Likes' },
  { value: '90M+', label: 'Views' },
];

function Me() {
  return (
    <main>
      <Helmetiser
        title="Tech Wizzdom"
        description="Dom — Senior frontend engineer turned tech content creator, influencer & startup founder. 800k+ followers, 90M+ views. I make viral tech content."
        url="https://www.techwizzdom.com"
      />
      <HeroSection />
      <StatsBar />
      <VideoSection />
      <TestimonialsSection />
      <PricingPreview />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={heroCss}>
      <div className={heroGridCss}>
        <div className={heroGridBgCss} />
      </div>
      <div className={heroContentCss}>
        <div className={heroTextCss(loaded)}>
          <span className={heroLabelCss}>Tech Content Creator & Startup Founder</span>
          <h1 className={heroTitleCss}>
            Hey, I'm{' '}
            <span className={heroNameCss}>Dom</span>
            <span className={heroDotCss}>.</span>
          </h1>
          <p className={heroSubCss}>
            A 9-5 senior frontend engineer turned into tech content creator,
            influencer and tech startup founder. I make viral tech content.
          </p>
          <div className={heroActionsCss}>
            <a
              href={t.link.workWithMeForm}
              target="_blank"
              rel="noopener noreferrer"
              className={heroPrimaryCTACss}
            >
              Let's Work Together
              <span className={arrowCss}>&#8599;</span>
            </a>
            <a href="/services" className={heroSecondaryCTACss}>
              View Services
            </a>
          </div>
        </div>
        <div className={heroImageWrapperCss(loaded)}>
          <div className={heroImageGlowCss} />
          <img
            src="https://i.imgur.com/o7M8EtZ.jpg"
            alt="Dom — Tech Wizzdom, standing and smiling"
            className={heroImageCss}
          />
          <div className={heroImageBorderCss} />
        </div>
      </div>
      <div className={heroScrollIndicatorCss}>
        <span className={scrollLineCss} />
      </div>
    </section>
  );
}

function StatsBar() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className={statsBarCss(isVisible)}>
      <div className={statsBarInnerCss}>
        {STATS.map((stat, i) => (
          <div key={stat.label} className={statItemCss(isVisible, i)}>
            <span className={statValueCss}>{stat.value}</span>
            <span className={statLabelCss}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoCard({ video, cover }: { video: string; cover: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={videoCardCss} onClick={toggle}>
      <video
        ref={videoRef}
        src={video}
        className={videoElCss}
        playsInline
        preload="none"
      />
      {!hasStarted && (
        <img src={cover} alt="Video thumbnail" className={videoCoverCss} />
      )}
      <div className={videoPlayBtnCss(isPlaying)}>
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </div>
    </div>
  );
}

function VideoSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className={videoSectionCss}>
      <div className={videoSectionHeaderCss}>
        <SectionTitle
          label="Viral Content"
          title="These 6 videos combined got 20M+ views."
          subtitle="Scroll to explore the content that took the internet by storm."
        />
      </div>
      <div className={videoScrollWrapperCss}>
        <div ref={scrollRef} className={videoScrollCss}>
          {VIDEOS.map((v, i) => (
            <VideoCard key={i} video={v.video} cover={v.cover} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    testimonialsFromPeople[0],
    testimonialsFromPeople[1],
    testimonialsFromPeople[2],
    testimonialsFromPeople[8],
    testimonialsFromPeople[4],
    testimonialsFromPeople[7],
    testimonialsFromPeople[3],
    testimonialsFromPeople[5],
    testimonialsFromPeople[6],
    testimonialsFromPeople[9],
  ];

  return (
    <section className={testimonialsSectionCss}>
      <div className={testimonialsSectionInnerCss}>
        <SectionTitle
          label="Testimonials"
          title="Apparently, people love to work with me!"
          subtitle="Don't take my word for it — here's what industry leaders say."
          align="center"
        />
      </div>
      <div className={marqueeWrapperCss}>
        <div className={marqueeFadeCss} />
        <div className={marqueeTrackCss}>
          {[...testimonials, ...testimonials].map((tm, i) => (
            <div key={i} className={testimonialCardCss}>
              <div className={testimonialQuoteCss}>
                <span className={quoteMarkCss}>&ldquo;</span>
                <p>{tm.quote1}{tm.quote2 ? ` ${tm.quote2}` : ''}</p>
              </div>
              <div className={testimonialAuthorCss}>
                <img src={tm.avatar} alt={tm.name} className={testimonialAvatarCss} />
                <div>
                  <span className={testimonialNameCss}>{tm.name}</span>
                  <span className={testimonialCompanyCss}>{tm.companyName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={pricingSectionCss}>
      <div className={pricingInnerCss}>
        <SectionTitle
          label="Pricing"
          title="I charge way less than your local TV station."
          align="center"
        />
        <div className={pricingCardsCss(isVisible)}>
          <div className={pricingCardCss}>
            <span className={pricingCardLabelCss}>Starting at</span>
            <span className={pricingAmountCss}>$300</span>
            <span className={pricingDescCss}>For an hour of consulting</span>
          </div>
          <div className={pricingDividerVertCss} />
          <div className={pricingCardCss}>
            <span className={pricingCardLabelCss}>Starting at</span>
            <span className={pricingAmountCss}>$4,500</span>
            <span className={pricingDescCss}>For a promo post on social media</span>
          </div>
        </div>
        <a href="/rates" className={viewAllRatesCss}>
          View All Packages
          <span className={arrowCss}>&#8599;</span>
        </a>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={ctaSectionCss(isVisible)}>
      <div className={ctaInnerCss}>
        <h2 className={ctaTitleCss}>
          Do you want me to make viral tech content for you?
        </h2>
        <p className={ctaSubCss}>
          Let's create something incredible together. Drop me a line or fill out the form.
        </p>
        <div className={ctaButtonsCss}>
          <a
            href={t.link.workWithMeForm}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaPrimaryBtnCss}
          >
            LET'S GO
            <span className={arrowCss}>&#8599;</span>
          </a>
          <a href={`mailto:${t.email.pr}`} className={ctaEmailBtnCss}>
            {t.email.pr}
          </a>
        </div>
        <div className={ctaSocialsCss}>
          {[
            { label: 'TikTok', href: t.link.tiktok },
            { label: 'Instagram', href: t.link.instagram },
            { label: 'YouTube', href: t.link.youtube },
            { label: 'Twitter', href: t.link.twitter },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaSocialLinkCss}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ STYLES ============ */

const heroCss = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: calc(var(--nav-height) + 40px) 32px 60px;
  overflow: hidden;
`;

const heroGridCss = css`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const heroGridBgCss = css`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 214, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 214, 0, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 70%);
`;

const heroContentCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
    text-align: center;
  }
`;

const heroTextCss = (loaded: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  opacity: ${loaded ? 1 : 0};
  transform: translateY(${loaded ? 0 : '40px'});
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`;

const heroLabelCss = css`
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 32px;
    height: 1px;
    background: var(--color-accent);

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const heroTitleCss = css`
  font-family: var(--font-heading);
  font-size: clamp(48px, 7vw, 80px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -2px;
`;

const heroNameCss = css`
  color: var(--color-accent);
  position: relative;
`;

const heroDotCss = css`
  color: var(--color-accent);
`;

const heroSubCss = css`
  font-size: 18px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 480px;

  @media (max-width: 900px) {
    max-width: 520px;
  }
`;

const heroActionsCss = css`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const heroPrimaryCTACss = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  border-radius: 8px;
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    background: #FFE333;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px var(--color-accent-glow);
  }
`;

const heroSecondaryCTACss = css`
  display: inline-flex;
  align-items: center;
  padding: 14px 32px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`;

const arrowCss = css`
  font-size: 18px;
  transition: transform var(--transition-fast);
`;

const heroImageWrapperCss = (loaded: boolean) => css`
  position: relative;
  display: flex;
  justify-content: center;
  opacity: ${loaded ? 1 : 0};
  transform: translateY(${loaded ? 0 : '40px'});
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const heroImageGlowCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%);
  filter: blur(60px);
  z-index: 0;
`;

const heroImageCss = css`
  width: 380px;
  height: 520px;
  object-fit: cover;
  border-radius: 24px;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    width: 280px;
    height: 380px;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 340px;
  }
`;

const heroImageBorderCss = css`
  position: absolute;
  top: 8px;
  right: calc(50% - 200px);
  width: 380px;
  height: 520px;
  border: 2px solid var(--color-accent);
  border-radius: 24px;
  z-index: 0;
  opacity: 0.3;

  @media (max-width: 900px) {
    width: 280px;
    height: 380px;
    right: calc(50% - 148px);
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 340px;
    right: calc(50% - 128px);
  }
`;

const heroScrollIndicatorCss = css`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const scrollLineCss = css`
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  animation: pulse 2s ease-in-out infinite;
`;

/* Stats */
const statsBarCss = (visible: boolean) => css`
  padding: 48px 32px;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '20px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const statsBarInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 80px;

  @media (max-width: 600px) {
    gap: 32px;
  }
`;

const statItemCss = (visible: boolean, i: number) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '20px'});
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s;
`;

const statValueCss = css`
  font-family: var(--font-heading);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: -1px;
`;

const statLabelCss = css`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-secondary);
`;

/* Video Section */
const videoSectionCss = css`
  padding: 120px 0 80px;

  @media (max-width: 768px) {
    padding: 80px 0 60px;
  }
`;

const videoSectionHeaderCss = css`
  padding: 0 32px;
  max-width: var(--max-width);
  margin: 0 auto 48px;
`;

const videoScrollWrapperCss = css`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const videoScrollCss = css`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 32px 24px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-accent-dim);
    border-radius: 2px;
  }
`;

const videoCardCss = css`
  flex: 0 0 260px;
  height: 462px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  scroll-snap-align: start;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  transition: all var(--transition-smooth);

  &:hover {
    border-color: var(--color-accent-dim);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
`;

const videoElCss = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const videoCoverCss = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const videoPlayBtnCss = (playing: boolean) => css`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-bg);
  display: grid;
  place-items: center;
  z-index: 2;
  transition: all var(--transition-fast);
  opacity: ${playing ? 0.7 : 1};

  &:hover {
    transform: scale(1.1);
  }
`;

/* Testimonials */
const testimonialsSectionCss = css`
  padding: 120px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const testimonialsSectionInnerCss = css`
  padding: 0 32px;
  margin-bottom: 48px;
`;

const marqueeWrapperCss = css`
  position: relative;
  overflow: hidden;
  padding: 8px 0;
`;

const marqueeFadeCss = css`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(90deg,
    var(--color-bg) 0%,
    transparent 8%,
    transparent 92%,
    var(--color-bg) 100%
  );
`;

const marqueeTrackCss = css`
  display: flex;
  gap: 20px;
  animation: marquee 60s linear infinite;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }
`;

const testimonialCardCss = css`
  flex: 0 0 380px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  transition: border-color var(--transition-fast);

  &:hover {
    border-color: var(--color-border-accent);
  }
`;

const testimonialQuoteCss = css`
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  position: relative;
`;

const quoteMarkCss = css`
  font-family: var(--font-heading);
  font-size: 48px;
  color: var(--color-accent);
  line-height: 1;
  position: absolute;
  top: -8px;
  left: -4px;
  opacity: 0.3;
`;

const testimonialAuthorCss = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const testimonialAvatarCss = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-border);
`;

const testimonialNameCss = css`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
`;

const testimonialCompanyCss = css`
  display: block;
  font-size: 12px;
  color: var(--color-text-muted);
`;

/* Pricing Preview */
const pricingSectionCss = css`
  padding: 120px 32px;

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

const pricingInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const pricingCardsCss = (visible: boolean) => css`
  display: flex;
  align-items: center;
  gap: 48px;
  margin-top: 48px;
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '30px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const pricingCardCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 40px 48px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  transition: all var(--transition-smooth);

  &:hover {
    border-color: var(--color-accent-dim);
    transform: translateY(-4px);
  }
`;

const pricingCardLabelCss = css`
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-text-muted);
`;

const pricingAmountCss = css`
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: -2px;
`;

const pricingDescCss = css`
  font-size: 15px;
  color: var(--color-text-secondary);
  text-align: center;
`;

const pricingDividerVertCss = css`
  width: 1px;
  height: 80px;
  background: var(--color-border);

  @media (max-width: 600px) {
    width: 80px;
    height: 1px;
  }
`;

const viewAllRatesCss = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    gap: 12px;
  }
`;

/* CTA Section */
const ctaSectionCss = (visible: boolean) => css`
  padding: 120px 32px;
  text-align: center;
  position: relative;
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '30px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--color-accent-dim) 0%, transparent 70%);
    filter: blur(100px);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

const ctaInnerCss = css`
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ctaTitleCss = css`
  font-family: var(--font-heading);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -1px;
  margin-bottom: 16px;
`;

const ctaSubCss = css`
  font-size: 17px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
`;

const ctaButtonsCss = css`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const ctaPrimaryBtnCss = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 40px;
  background: var(--color-accent);
  color: var(--color-bg);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 8px;
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    background: #FFE333;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px var(--color-accent-glow);
  }
`;

const ctaEmailBtnCss = css`
  display: inline-flex;
  align-items: center;
  padding: 16px 40px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`;

const ctaSocialsCss = css`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
`;

const ctaSocialLinkCss = css`
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color var(--transition-fast);

  &:hover { color: var(--color-accent); }
`;

export default Me;
