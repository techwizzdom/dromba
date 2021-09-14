import React from 'react';

import RouteContainer from '../../components/RouteContainer';
import logoMe from '../../assets/images/me.jpg';
import { css } from 'emotion';
import { H3, H5, H6 } from '../../components/core/Heading';

import { ReactComponent as DevTo } from '../../assets/icons/devto.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as TikTok } from '../../assets/icons/tiktok.svg';
import { ReactComponent as Medium } from '../../assets/icons/medium.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import Hyperlink from '../../components/Hyperlink';
import { t } from '../../translations/t';

const meWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
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
`;

const profilesCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

  svg {
    margin: 0 12px;
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
`;

const linkedInWrapperCss = css`
  padding-bottom: 4px;
`;

function Me() {
  return (
    <RouteContainer>
      <div className={meWrapper}>
        <div className={meCss}>
          <img className={logoMeCss} src={logoMe} alt="logo-me" />
          <div>
            <H3>Hey hey, I'm Dom.</H3>
            <p>A Frontend Engineer.</p>
            <p>In a London tech startup.</p>
          </div>
        </div>
        // emoji to img
        <H3>👇🏼 Check out my plan 👇🏼</H3>
        <H3>0 knowledge to $80k/year in 6 months</H3>
        <div className={profilesCss}>
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
