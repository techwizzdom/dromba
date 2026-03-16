import React from 'react';
import { css } from 'emotion';
import { Theme } from '../../styles';
import { t } from '../../translations/t';
import { trackEvent } from '../../util/metrics';
import { ThemeContext } from '../../context/ThemeContext';

import { ReactComponent as DevTo } from '../../assets/icons/devto.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as TikTok } from '../../assets/icons/tiktok.svg';
import { ReactComponent as Medium } from '../../assets/icons/medium.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as YouTube } from '../../assets/icons/youtube.svg';

interface ISocialProfilesProps {
  showTopFourOnly?: boolean;
  isMainScreenMode?: boolean;
}

export function SocialProfiles(props: ISocialProfilesProps) {
  const { showTopFourOnly = false, isMainScreenMode = false } = props;
  const theme = React.useContext(ThemeContext);

  return (
    <div className={profilesCss(theme, isMainScreenMode)}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={t.link.instagram}
        onClick={() => trackEvent('Social network icon click', 'Instagram')}
      >
        <Instagram />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={t.link.tiktok}
        onClick={() => trackEvent('Social network icon click', 'TikTok')}
      >
        <TikTok />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={t.link.youtube}
        onClick={() => trackEvent('Social network icon click', 'YouTube')}
      >
        <YouTube />
      </a>
      <a
        className={linkedInWrapperCss}
        target="_blank"
        rel="noopener noreferrer"
        href={t.link.linkedIn}
        onClick={() => trackEvent('Social network icon click', 'LinkedIn')}
      >
        <LinkedIn />
      </a>
      {!showTopFourOnly && (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={t.link.twitter}
            onClick={() => trackEvent('Social network icon click', 'Twitter')}
          >
            <Twitter />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={t.link.devto}
            onClick={() => trackEvent('Social network icon click', 'DevTo')}
          >
            <DevTo className={devToIconCss} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={t.link.medium}
            onClick={() => trackEvent('Social network icon click', 'Medium')}
          >
            <Medium />
          </a>
        </>
      )}
    </div>
  );
}

const profilesCss = (theme: Theme, isMainScreenMode: boolean) => css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: ${isMainScreenMode ? '28px' : '0'};

  a {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid
      ${theme.isDark ? 'rgba(238, 241, 255, 0.28)' : 'rgba(17, 20, 56, 0.14)'};
    background: ${theme.isDark
      ? 'rgba(17, 20, 44, 0.46)'
      : 'rgba(255, 255, 255, 0.72)'};
    box-shadow: 0 10px 24px rgba(8, 15, 44, 0.14);
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  svg {
    fill: ${theme.svgFill.primary};
    width: 23px;
    height: 23px;

    .st1 {
      fill: ${theme.svgFill.primary};
    }
  }

  a:hover {
    transform: translateY(-2px);
    opacity: 0.85;

    cursor: pointer;
  }
`;

const devToIconCss = css`
  width: 20px !important;
  margin: 0 !important;
`;

const linkedInWrapperCss = css`
  padding-bottom: 0;
`;
