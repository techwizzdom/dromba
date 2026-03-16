import React from 'react';
import { css } from 'emotion';
import Helmetiser from '../../components/core/Helmetiser';
import { t } from '../../translations/t';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { testimonialsFromPeople } from '../../testimonials';

const STATS = [
  { value: t.socials.views, label: 'Views' },
  { value: t.socials.likes, label: 'Likes' },
  { value: t.socials.saves, label: 'Saves' },
];

const PACKAGES = [
  {
    name: 'Standard',
    price: 2500,
    highlight: false,
    features: [
      { text: '1 Instagram story', included: true },
      { text: '1 Instagram post (not Reel)', included: true },
      { text: 'CTA to any link you provide', included: true },
      { text: 'Link on website & bio for 5 days', included: true },
      { text: 'Ownership of the created content', included: false },
    ],
  },
  {
    name: 'Premium',
    price: 3700,
    highlight: false,
    features: [
      { text: '1 Instagram Reel', included: true },
      { text: '1 Instagram story', included: true },
      { text: '1 TikTok video', included: true },
      { text: '1 YouTube short', included: true },
      { text: 'CTA to any link you provide', included: true },
      { text: 'Link on website & bio for 7 days', included: true },
      { text: 'Ownership of the created content', included: false },
      { text: '+$2500 for a dedicated YouTube long-form', included: true, isBonus: true },
    ],
  },
  {
    name: 'Mega Reach',
    price: 5900,
    highlight: true,
    features: [
      { text: '1 Instagram Reel', included: true },
      { text: '1 TikTok video', included: true },
      { text: '1 YouTube short', included: true },
      { text: '2 Instagram stories (with clickable link)', included: true },
      { text: '60-90s integration in a YouTube long-form', included: true },
      { text: 'CTA to any link you provide', included: true },
      { text: 'Link on website & bio for 10 days', included: true },
      { text: 'Full ownership & ad authorisation for 3 months', included: true },
      { text: '+$2500 for a dedicated YouTube long-form', included: true, isBonus: true },
    ],
  },
];

function Rates() {
  return (
    <main>
      <Helmetiser
        title="Rates"
        description="Sponsorship packages starting at $2,500. Let's make everyone know you in one day. 90M views, 2.3M likes in the last 90 days."
        url="https://www.techwizzdom.com/rates"
      />
      <HeroSection />
      <PackagesSection />
      <TestimonialsSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className={heroSectionCss}>
      <div className={heroInnerCss}>
        <span className={heroLabelCss}>Rates</span>
        <h1 className={heroTitleCss}>
          Last <span className={accentCss}>90 days</span>.
        </h1>
        <div className={statsRowCss}>
          {STATS.map((stat) => (
            <div key={stat.label} className={statBubbleCss}>
              <span className={statValueCss}>{stat.value}</span>
              <span className={statLabelCss}>{stat.label}</span>
            </div>
          ))}
        </div>
        <h2 className={heroSubtitleCss}>
          Let's make everyone know you in one day.
        </h2>
      </div>
    </section>
  );
}

function PackagesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className={packagesSectionCss}>
      <div className={packagesInnerCss}>
        <div className={packagesGridCss}>
          {PACKAGES.map((pkg, i) => (
            <div key={i} className={packageCardCss(pkg.highlight, isVisible, i)}>
              {pkg.highlight && <span className={popularBadgeCss}>Most Popular</span>}
              <h3 className={packageNameCss}>{pkg.name}</h3>
              <div className={packagePriceCss}>
                <span className={dollarCss}>$</span>
                <span className={priceValueCss}>{pkg.price.toLocaleString()}</span>
              </div>
              <div className={featureListCss}>
                {pkg.features.map((f, fi) => (
                  <div key={fi} className={featureItemCss((f as any).isBonus)}>
                    <span className={featureIconCss(f.included)}>
                      {f.included ? '✓' : '✕'}
                    </span>
                    <span className={featureTextCss(f.included, (f as any).isBonus)}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={t.link.workWithMeForm}
                target="_blank"
                rel="noopener noreferrer"
                className={packageCTACss(pkg.highlight)}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = testimonialsFromPeople.slice(0, 6);

  return (
    <section className={testimonialsSectionCss}>
      <div className={testimonialsInnerCss}>
        <SectionTitle
          label="Social Proof"
          title="People love to work with me!"
          align="center"
        />
        <div className={testimonialsGridCss}>
          {testimonials.map((tm, i) => (
            <TestimonialCard key={i} tm={tm} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ tm, i }: any) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={tmCardCss(isVisible, i)}>
      <p className={tmQuoteCss}>
        &ldquo;{tm.quote1}{tm.quote2 ? ` ${tm.quote2}` : ''}&rdquo;
      </p>
      <div className={tmAuthorCss}>
        <img src={tm.avatar} alt={tm.name} className={tmAvatarCss} />
        <div>
          <span className={tmNameCss}>{tm.name}</span>
          <span className={tmCompanyCss}>{tm.companyName}</span>
        </div>
      </div>
    </div>
  );
}

/* ============ STYLES ============ */

const heroSectionCss = css`
  padding: calc(var(--nav-height) + 80px) 32px 80px;
  text-align: center;

  @media (max-width: 768px) {
    padding: calc(var(--nav-height) + 48px) 24px 48px;
  }
`;

const heroInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const heroLabelCss = css`
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
`;

const heroTitleCss = css`
  font-family: var(--font-heading);
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -2px;
`;

const accentCss = css`
  color: var(--color-accent);
`;

const statsRowCss = css`
  display: flex;
  gap: 32px;
  margin: 16px 0;

  @media (max-width: 600px) {
    gap: 16px;
  }
`;

const statBubbleCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 24px 32px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  min-width: 120px;

  @media (max-width: 600px) {
    padding: 16px 20px;
    min-width: 90px;
  }
`;

const statValueCss = css`
  font-family: var(--font-heading);
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: -1px;
`;

const statLabelCss = css`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-text-secondary);
`;

const heroSubtitleCss = css`
  font-family: var(--font-heading);
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const packagesSectionCss = css`
  padding: 0 32px 120px;

  @media (max-width: 768px) {
    padding: 0 24px 80px;
  }
`;

const packagesInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const packagesGridCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
`;

const packageCardCss = (highlight: boolean, visible: boolean, i: number) => css`
  background: ${highlight ? 'var(--color-bg-card-hover)' : 'var(--color-bg-card)'};
  border: ${highlight ? '2px solid var(--color-accent)' : '1px solid var(--color-border)'};
  border-radius: 20px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '30px'});
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s;

  ${highlight && `
    box-shadow: 0 0 60px var(--color-accent-dim);
  `}
`;

const popularBadgeCss = css`
  position: absolute;
  top: -14px;
  padding: 6px 16px;
  background: var(--color-accent);
  color: var(--color-bg);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 100px;
`;

const packageNameCss = css`
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

const packagePriceCss = css`
  display: flex;
  align-items: baseline;
  gap: 2px;
`;

const dollarCss = css`
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 600;
  color: var(--color-accent);
`;

const priceValueCss = css`
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: -2px;
`;

const featureListCss = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const featureItemCss = (isBonus?: boolean) => css`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  ${isBonus ? `
    padding-top: 12px;
    border-top: 1px dashed var(--color-border);
  ` : ''}
`;

const featureIconCss = (included: boolean) => css`
  font-size: 14px;
  font-weight: 700;
  color: ${included ? 'var(--color-accent)' : '#ff4444'};
  flex-shrink: 0;
  margin-top: 2px;
`;

const featureTextCss = (included: boolean, isBonus?: boolean) => css`
  font-size: 14px;
  color: ${included ? 'var(--color-text-secondary)' : 'var(--color-text-muted)'};
  line-height: 1.5;
  ${!included ? 'text-decoration: line-through;' : ''}
  ${isBonus ? 'font-weight: 600; color: var(--color-accent);' : ''}
`;

const packageCTACss = (highlight: boolean) => css`
  width: 100%;
  padding: 14px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all var(--transition-fast);

  ${highlight ? `
    background: var(--color-accent);
    color: var(--color-bg);
    &:hover {
      background: #FFE333;
      box-shadow: 0 4px 20px var(--color-accent-glow);
    }
  ` : `
    background: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    &:hover {
      border-color: var(--color-accent);
      color: var(--color-accent);
    }
  `}
`;

const testimonialsSectionCss = css`
  padding: 0 32px 120px;

  @media (max-width: 768px) {
    padding: 0 24px 80px;
  }
`;

const testimonialsInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const testimonialsGridCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const tmCardCss = (visible: boolean, i: number) => css`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '20px'});
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(i % 3) * 0.1}s;

  &:hover {
    border-color: var(--color-border-accent);
  }
`;

const tmQuoteCss = css`
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  font-style: italic;
`;

const tmAuthorCss = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const tmAvatarCss = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const tmNameCss = css`
  display: block;
  font-size: 13px;
  font-weight: 600;
`;

const tmCompanyCss = css`
  display: block;
  font-size: 12px;
  color: var(--color-text-muted);
`;

export default Rates;
