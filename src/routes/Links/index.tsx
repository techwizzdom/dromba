import React from 'react';
import { css } from 'emotion';
import Helmetiser from '../../components/core/Helmetiser';
import { t } from '../../translations/t';
import { trackEvent } from '../../util/metrics';

const FEATURED_LINKS = [
  {
    title: 'Second Brain',
    subtitle: 'The smartest AI',
    href: t.link.secondBrain,
    event: 'Second Brain',
  },
  {
    title: 'DeVibe',
    subtitle: 'Connecting devs and vibe coders',
    href: t.link.devibe,
    event: 'Devibe',
  },
  {
    title: 'Enlead',
    subtitle: 'Bulk find influencer emails',
    href: t.link.enlead,
    event: 'Enlead',
  },
  {
    title: 'Manus.AI',
    subtitle: 'Become a 10x founder',
    href: t.link.manus,
    event: 'Manus.AI',
  },
  {
    title: 'Sparroww',
    subtitle: 'Digital Hollywood',
    href: t.link.sparroww,
    event: 'Sparroww',
  },
];

const SOCIAL_LINKS = [
  { label: 'TikTok', href: t.link.tiktok },
  { label: 'Instagram', href: t.link.instagram },
  { label: 'YouTube', href: t.link.youtube },
  { label: 'Twitter', href: t.link.twitter },
  { label: 'LinkedIn', href: t.link.linkedIn },
  { label: 'GitHub', href: t.link.github },
  { label: 'DEV.to', href: t.link.devto },
  { label: 'Medium', href: t.link.medium },
];

function Links() {
  return (
    <main className={pageWrapperCss}>
      <Helmetiser
        title="Links"
        description="Find out about my great offers and products."
        url="https://www.techwizzdom.com/links"
      />

      <section className={linksHeroCss}>
        <div className={linksHeroInnerCss}>
          <img
            src="https://i.imgur.com/o7M8EtZ.jpg"
            alt="Dom — Tech Wizzdom"
            className={avatarCss}
          />
          <h1 className={nameCss}>
            Dom <span className={accentCss}>.</span>
          </h1>
          <p className={bioCss}>
            Tech Content Creator &bull; Startup Founder &bull; 800K+ Followers
          </p>
        </div>
      </section>

      <section className={linksSectionCss}>
        <div className={linksInnerCss}>
          {FEATURED_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkCardCss(i)}
              onClick={() => trackEvent(link.event, link.event)}
            >
              <div className={linkCardContentCss}>
                <span className={linkTitleCss}>{link.title}</span>
                <span className={linkSubtitleCss}>{link.subtitle}</span>
              </div>
              <span className={linkArrowCss}>&#8599;</span>
            </a>
          ))}

          <a
            href={`mailto:${t.email.techwizzdom}`}
            className={linkCardCss(FEATURED_LINKS.length)}
            onClick={() => trackEvent('Email', 'Links')}
          >
            <div className={linkCardContentCss}>
              <span className={linkTitleCss}>{t.email.techwizzdom}</span>
              <span className={linkSubtitleCss}>Get in touch</span>
            </div>
            <span className={linkArrowCss}>&#9993;</span>
          </a>
        </div>
      </section>

      <section className={socialsSectionCss}>
        <h3 className={socialsTitleCss}>Follow me</h3>
        <div className={socialsGridCss}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={socialChipCss}
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ============ STYLES ============ */

const pageWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const linksHeroCss = css`
  padding: calc(var(--nav-height) + 48px) 32px 32px;
  text-align: center;
`;

const linksHeroInnerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const avatarCss = css`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-accent);
  box-shadow: 0 0 30px var(--color-accent-dim);
`;

const nameCss = css`
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const accentCss = css`
  color: var(--color-accent);
`;

const bioCss = css`
  font-size: 14px;
  color: var(--color-text-secondary);
`;

const linksSectionCss = css`
  padding: 24px 32px 48px;
  width: 100%;
  max-width: 520px;
`;

const linksInnerCss = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const linkCardCss = (i: number) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 24px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-fast);
  animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.08}s both;

  &:hover {
    border-color: var(--color-accent-dim);
    background: var(--color-bg-card-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;

const linkCardContentCss = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const linkTitleCss = css`
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 600;
`;

const linkSubtitleCss = css`
  font-size: 13px;
  color: var(--color-text-secondary);
`;

const linkArrowCss = css`
  font-size: 20px;
  color: var(--color-accent);
  flex-shrink: 0;
`;

const socialsSectionCss = css`
  padding: 0 32px 120px;
  text-align: center;
  max-width: 520px;
  width: 100%;
`;

const socialsTitleCss = css`
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-muted);
  margin-bottom: 20px;
`;

const socialsGridCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const socialChipCss = css`
  padding: 8px 16px;
  border: 1px solid var(--color-border);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    background: var(--color-accent-dim);
  }
`;

export default Links;
