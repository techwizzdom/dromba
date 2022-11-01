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
  margin-top: ${isMainScreenMode ? '64px' : '0'};

  svg {
    margin: 0 12px;
    fill: ${theme.svgFill.primary};

    .st1 {
      fill: ${theme.svgFill.primary};
    }
  }

  svg:hover {
    cursor: pointer;
    fill-opacity: 0.5;

    .st1 {
      fill-opacity: 0.5;
    }
  }
`;

const devToIconCss = css`
  width: 54px;
  margin: 0 4px !important;
`;

const linkedInWrapperCss = css`
  padding-bottom: 4px;
`;
