import React from 'react';

import RouteContainer from '../../components/RouteContainer';
import logoMe from '../../assets/images/me.jpg';
import { css } from 'emotion';
import { H3, H4 } from '../../components/core/Heading';

import { ReactComponent as DevTo } from '../../assets/icons/devto.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as TikTok } from '../../assets/icons/tiktok.svg';
import { ReactComponent as Medium } from '../../assets/icons/medium.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import { t } from '../../translations/t';
import { Media } from '../../enums/Media';
import IndexDown from '../../assets/images/index-down.png';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

const meWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

  @media ${Media.Mobile} {
    margin-top: 0;
  }
`;

const meCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 32px;
`;

const logoMeCss = css`
  height: 164px;
  margin-right: 32px;
  border-radius: 50%;
  border: 2px solid green;

  @media ${Media.Mobile} {
    height: 96px;
    margin-right: 16px;
  }
`;

const indexDownCss = css`
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;

  @media ${Media.Mobile} {
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    max-width: 32px;
    max-height: 32px;
  }
`;

const planWrapperCss = css`
  display: flex;
  margin-bottom: 16px;

  h4 {
    margin: 0 4px 0 12px;
  }
`;

const profilesCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

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

const hrefCss = css`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;

  @media ${Media.Mobile} {
    font-size: 20px;
  }
`;

const devToIconCss = css`
  width: 54px;
`;

const linkedInWrapperCss = css`
  padding-bottom: 4px;
`;

function Me() {
  const theme = React.useContext(ThemeContext);

  return (
    <RouteContainer isPureCenteringEnabled={true}>
      <div className={meWrapper}>
        <div className={meCss}>
          <img className={logoMeCss} src={logoMe} alt="logo-me" />
          <div>
            <H3>Hey hey, I'm Dom.</H3>
            <p>A Frontend Engineer.</p>
            <p>In a London tech startup.</p>
          </div>
        </div>
        <div className={planWrapperCss}>
          <img src={IndexDown} className={indexDownCss} alt="index-down" />
          <H4>Check out my plan</H4>
          <img src={IndexDown} className={indexDownCss} alt="index-down" />
        </div>
        <a
          className={hrefCss}
          target="_blank"
          rel="noopener noreferrer"
          href={t.link.zeroKnowledgeTo80k}
        >
          0 knowledge to $80k/year in 6 months
        </a>
        <div className={profilesCss(theme)}>
          <a target="_blank" rel="noopener noreferrer" href={t.link.devto}>
            <DevTo className={devToIconCss} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={t.link.twitter}>
            <Twitter />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={t.link.tiktok}>
            <TikTok />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={t.link.medium}>
            <Medium />
          </a>
          <a
            className={linkedInWrapperCss}
            target="_blank"
            rel="noopener noreferrer"
            href={t.link.linkedIn}
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </RouteContainer>
  );
}

export default Me;
