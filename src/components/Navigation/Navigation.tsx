import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from 'emotion';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Rates', path: '/rates' },
  { label: 'Blog', path: '/blog' },
  { label: 'Links', path: '/links' },
];

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <nav className={navCss(isScrolled)}>
        <div className={navInnerCss}>
          <Link to="/" className={logoCss}>
            <span className={logoAccentCss}>TW</span>
            <span className={logoDotCss}>.</span>
          </Link>

          <div className={desktopLinksCss}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={navLinkCss(location.pathname === link.path)}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className={activeDotCss} />
                )}
              </Link>
            ))}
            <a
              href="https://forms.gle/DiWUnuNsj46b7Riu7"
              target="_blank"
              rel="noopener noreferrer"
              className={ctaButtonCss}
            >
              Work With Me
            </a>
          </div>

          <button
            className={hamburgerCss(isMobileOpen)}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <span className={hamburgerLineCss(isMobileOpen, 0)} />
            <span className={hamburgerLineCss(isMobileOpen, 1)} />
            <span className={hamburgerLineCss(isMobileOpen, 2)} />
          </button>
        </div>
      </nav>

      <div className={mobileOverlayCss(isMobileOpen)}>
        <div className={mobileMenuContentCss}>
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className={mobileLinkCss(location.pathname === link.path, idx)}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className={mobileLinkNumberCss}>0{idx + 1}</span>
              <span>{link.label}</span>
            </Link>
          ))}
          <a
            href="https://forms.gle/DiWUnuNsj46b7Riu7"
            target="_blank"
            rel="noopener noreferrer"
            className={mobileCTACss}
            onClick={() => setIsMobileOpen(false)}
          >
            Work With Me
          </a>
        </div>
      </div>
    </>
  );
}

const navCss = (scrolled: boolean) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  z-index: 1000;
  transition: all var(--transition-smooth);
  background: ${scrolled ? 'rgba(10, 10, 10, 0.92)' : 'transparent'};
  backdrop-filter: ${scrolled ? 'blur(20px) saturate(180%)' : 'none'};
  border-bottom: 1px solid ${scrolled ? 'var(--color-border)' : 'transparent'};
`;

const navInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const logoCss = css`
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity var(--transition-fast);
  &:hover { opacity: 0.8; }
`;

const logoAccentCss = css`
  color: var(--color-accent);
`;

const logoDotCss = css`
  color: var(--color-text);
`;

const desktopLinksCss = css`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const navLinkCss = (isActive: boolean) => css`
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)'};
  text-decoration: none;
  position: relative;
  transition: color var(--transition-fast);
  padding: 4px 0;

  &:hover {
    color: var(--color-text);
  }
`;

const activeDotCss = css`
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-accent);
`;

const ctaButtonCss = css`
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 10px 24px;
  background: var(--color-accent);
  color: var(--color-bg);
  border-radius: 6px;
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    background: #FFE333;
    transform: translateY(-1px);
    box-shadow: 0 4px 20px var(--color-accent-glow);
  }
`;

const hamburgerCss = (_isOpen: boolean) => css`
  display: none;
  flex-direction: column;
  gap: 6px;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1001;
  background: none;
  border: none;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const hamburgerLineCss = (isOpen: boolean, index: number) => css`
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition-smooth);
  transform-origin: center;

  ${isOpen && index === 0 && `
    transform: translateY(8px) rotate(45deg);
  `}
  ${isOpen && index === 1 && `
    opacity: 0;
    transform: scaleX(0);
  `}
  ${isOpen && index === 2 && `
    transform: translateY(-8px) rotate(-45deg);
  `}
`;

const mobileOverlayCss = (isOpen: boolean) => css`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(30px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${isOpen ? 1 : 0};
  pointer-events: ${isOpen ? 'all' : 'none'};
  transition: opacity var(--transition-smooth);

  @media (min-width: 769px) {
    display: none;
  }
`;

const mobileMenuContentCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

const mobileLinkCss = (isActive: boolean, _idx: number) => css`
  font-family: var(--font-heading);
  font-size: 42px;
  font-weight: 700;
  text-decoration: none;
  color: ${isActive ? 'var(--color-accent)' : 'var(--color-text)'};
  display: flex;
  align-items: baseline;
  gap: 16px;
  transition: color var(--transition-fast);

  &:hover { color: var(--color-accent); }
`;

const mobileLinkNumberCss = css`
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-muted);
`;

const mobileCTACss = css`
  margin-top: 24px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 16px 32px;
  background: var(--color-accent);
  color: var(--color-bg);
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    background: #FFE333;
  }
`;

export default Navigation;
