import React from 'react';
import { css } from 'emotion';
import Helmetiser from '../../components/core/Helmetiser';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { t } from '../../translations/t';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { testimonialsFromPeople } from '../../testimonials';

const SERVICES = [
  {
    number: '01',
    title: 'Social Media Mentoring',
    tagline: 'Monetize. Grow. Build a brand.',
    description: "Let's radically improve your social media presence.",
    href: t.link.book45minsSocials,
  },
  {
    number: '02',
    title: 'Brand Collaboration',
    tagline: "Let's market your incredible product.",
    description: 'I will share it with my massive tech following.',
    href: t.link.workWithMeForm,
  },
  {
    number: '03',
    title: 'Content Creation',
    tagline: 'I can create any content you want.',
    description: "Feel free to do anything you like with it, it's all yours.",
    href: t.link.workWithMeForm,
  },
  {
    number: '04',
    title: 'Tech Mentoring',
    tagline: 'We can get you your first job, or supercharge your career.',
    description: 'Anything you wish.',
    href: t.link.book30mins,
  },
  {
    number: '05',
    title: 'Consultancy',
    tagline: 'Your app has problems? You need to architect it?',
    description: "Just name it. We'll sort it out.",
    href: t.link.workWithMeForm,
  },
];

function Services() {
  return (
    <main className={pageWrapperCss}>
      <Helmetiser
        title="Services"
        description="Together, we can create anything. Social media mentoring, brand collaboration, content creation, tech mentoring, and consultancy."
        url="https://www.techwizzdom.com/services"
      />
      <HeroSection />
      <ServicesList />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}

function HeroSection() {
  return (
    <section className={heroSectionCss}>
      <div className={heroInnerCss}>
        <span className={heroLabelCss}>What I Do</span>
        <h1 className={heroTitleCss}>
          Together, we can create{' '}
          <span className={accentCss}>anything</span>.
        </h1>
        <p className={heroSubCss}>
          Click on a service for further action. Or drop me an email at{' '}
          <a href={`mailto:${t.email.pr}`} className={emailLinkCss}>{t.email.pr}</a>.
        </p>
      </div>
    </section>
  );
}

function ServicesList() {
  return (
    <section className={servicesListCss}>
      <div className={servicesInnerCss}>
        {SERVICES.map((service, idx) => (
          <ServiceItem key={idx} {...service} idx={idx} />
        ))}
      </div>
    </section>
  );
}

function ServiceItem({ number, title, tagline, description, href, idx }: any) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div ref={ref}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={serviceItemCss(isVisible, idx)}
      >
        <div className={serviceLeftCss}>
          <span className={serviceNumberCss}>{number}</span>
          <h3 className={serviceTitleCss}>{title}</h3>
        </div>
        <div className={serviceRightCss}>
          <p className={serviceTaglineCss}>{tagline}</p>
          <p className={serviceDescCss}>{description}</p>
        </div>
        <span className={serviceArrowCss}>&#8599;</span>
      </a>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className={testimonialsSectionCss}>
      <div className={testimonialsInnerCss}>
        <SectionTitle
          label="Testimonials"
          title="Thanks for these wonderful words :)"
          align="center"
        />
        <div className={testimonialsGridCss}>
          {testimonialsFromPeople.map((tm, i) => (
            <TestimonialCard key={i} testimonial={tm} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: any) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={testimonialCardCss(isVisible, index)}>
      <p className={testimonialQuoteCss}>
        &ldquo;{testimonial.quote1}
        {testimonial.quote2 ? ` ${testimonial.quote2}` : ''}
        {testimonial.quote3 ? ` ${testimonial.quote3}` : ''}&rdquo;
      </p>
      <div className={testimonialAuthorCss}>
        <img src={testimonial.avatar} alt={testimonial.name} className={testimonialAvatarCss} />
        <div>
          <span className={testimonialNameCss}>{testimonial.name}</span>
          <span className={testimonialCompanyCss}>{testimonial.companyName}</span>
        </div>
      </div>
    </div>
  );
}

function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={ctaBannerCss(isVisible)}>
      <div className={ctaBannerInnerCss}>
        <h2 className={ctaTitleCss}>Ready to work together?</h2>
        <a
          href={t.link.workWithMeForm}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaButtonCss}
        >
          Get In Touch
          <span className={arrowInlineCss}>&#8599;</span>
        </a>
      </div>
    </section>
  );
}

/* ============ STYLES ============ */

const pageWrapperCss = css``;

const heroSectionCss = css`
  padding: calc(var(--nav-height) + 80px) 32px 80px;

  @media (max-width: 768px) {
    padding: calc(var(--nav-height) + 48px) 24px 48px;
  }
`;

const heroInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  max-width: 700px;
`;

const accentCss = css`
  color: var(--color-accent);
`;

const heroSubCss = css`
  font-size: 17px;
  color: var(--color-text-secondary);
  line-height: 1.7;
`;

const emailLinkCss = css`
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: opacity var(--transition-fast);
  &:hover { opacity: 0.8; }
`;

const servicesListCss = css`
  padding: 0 32px 80px;

  @media (max-width: 768px) {
    padding: 0 24px 60px;
  }
`;

const servicesInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const serviceItemCss = (visible: boolean, i: number) => css`
  display: grid;
  grid-template-columns: 1fr 1.5fr auto;
  gap: 40px;
  align-items: center;
  padding: 40px 0;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '30px'});
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s;
  cursor: pointer;

  &:first-child {
    border-top: 1px solid var(--color-border);
  }

  &:hover {
    padding-left: 16px;
    padding-right: 16px;
    background: var(--color-bg-card);
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 24px 0;
  }
`;

const serviceLeftCss = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const serviceNumberCss = css`
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-text-muted);
`;

const serviceTitleCss = css`
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const serviceRightCss = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const serviceTaglineCss = css`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
`;

const serviceDescCss = css`
  font-size: 14px;
  color: var(--color-text-secondary);
`;

const serviceArrowCss = css`
  font-size: 24px;
  color: var(--color-accent);
  transition: transform var(--transition-fast);

  @media (max-width: 768px) {
    display: none;
  }
`;

const testimonialsSectionCss = css`
  padding: 80px 32px 120px;

  @media (max-width: 768px) {
    padding: 60px 24px 80px;
  }
`;

const testimonialsInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const testimonialsGridCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  margin-top: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const testimonialCardCss = (visible: boolean, i: number) => css`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '20px'});
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(i % 3) * 0.1}s;

  &:hover {
    border-color: var(--color-border-accent);
  }
`;

const testimonialQuoteCss = css`
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  font-style: italic;
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

const ctaBannerCss = (visible: boolean) => css`
  padding: 80px 32px;
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '20px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ctaBannerInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ctaTitleCss = css`
  font-family: var(--font-heading);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  letter-spacing: -1px;
`;

const ctaButtonCss = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 40px;
  background: var(--color-accent);
  color: var(--color-bg);
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: all var(--transition-fast);

  &:hover {
    background: #FFE333;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px var(--color-accent-glow);
  }
`;

const arrowInlineCss = css`
  font-size: 18px;
`;

export default Services;
