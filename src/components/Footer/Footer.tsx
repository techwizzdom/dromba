import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import { t } from '../../translations/t';

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

const FOOTER_NAV = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Rates', path: '/rates' },
  { label: 'Blog', path: '/blog' },
  { label: 'Links', path: '/links' },
];

function Footer() {
  return (
    <footer className={footerCss}>
      <div className={footerInnerCss}>
        <div className={footerTopCss}>
          <div className={footerBrandCss}>
            <span className={footerLogoCss}>
              TW<span className={dotCss}>.</span>
            </span>
            <p className={footerTaglineCss}>
              Making viral tech content that converts.
            </p>
          </div>

          <div className={footerColumnsCss}>
            <div className={footerColumnCss}>
              <h4 className={footerColumnTitleCss}>Navigation</h4>
              {FOOTER_NAV.map((item) => (
                <Link key={item.path} to={item.path} className={footerLinkCss}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className={footerColumnCss}>
              <h4 className={footerColumnTitleCss}>Socials</h4>
              {SOCIAL_LINKS.slice(0, 5).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkCss}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className={footerColumnCss}>
              <h4 className={footerColumnTitleCss}>Contact</h4>
              <a href={`mailto:${t.email.pr}`} className={footerLinkCss}>
                {t.email.pr}
              </a>
              <a href={`mailto:${t.email.techwizzdom}`} className={footerLinkCss}>
                {t.email.techwizzdom}
              </a>
              <a
                href="https://forms.gle/DiWUnuNsj46b7Riu7"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLinkCss}
              >
                Work Inquiry Form
              </a>
            </div>
          </div>
        </div>

        <div className={footerDividerCss} />

        <div className={footerBottomCss}>
          <span className={footerCopyrightCss}>
            &copy; {new Date().getFullYear()} Tech Wizzdom. All rights reserved.
          </span>
          <a
            href="https://www.freeprivacypolicy.com/live/00b087ad-a4a1-4885-8265-15beceb176df"
            target="_blank"
            rel="noopener noreferrer"
            className={footerPrivacyCss}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

const footerCss = css`
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
  padding: 80px 0 40px;
  margin-top: 120px;
`;

const footerInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 32px;
`;

const footerTopCss = css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const footerBrandCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const footerLogoCss = css`
  font-family: var(--font-heading);
  font-size: 36px;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: -1px;
`;

const dotCss = css`
  color: var(--color-text);
`;

const footerTaglineCss = css`
  font-size: 15px;
  color: var(--color-text-secondary);
  max-width: 280px;
  line-height: 1.6;
`;

const footerColumnsCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const footerColumnCss = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const footerColumnTitleCss = css`
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-text);
  margin-bottom: 4px;
`;

const footerLinkCss = css`
  font-size: 14px;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-accent);
  }
`;

const footerDividerCss = css`
  height: 1px;
  background: var(--color-border);
  margin: 48px 0 24px;
`;

const footerBottomCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const footerCopyrightCss = css`
  font-size: 13px;
  color: var(--color-text-muted);
`;

const footerPrivacyCss = css`
  font-size: 13px;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
  &:hover { color: var(--color-accent); }
`;

export default Footer;
