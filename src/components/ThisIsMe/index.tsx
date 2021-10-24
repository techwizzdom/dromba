import React from 'react';
import logoMe from '../../assets/images/me.jpg';
import { H3, H4 } from '../../components/core/Heading';

import { ReactComponent as DevTo } from '../../assets/icons/devto.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as TikTok } from '../../assets/icons/tiktok.svg';
import { ReactComponent as Medium } from '../../assets/icons/medium.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import { t } from '../../translations/t';
import { Media } from '../../enums/Media';
import { Theme } from '../../styles';
import IndexDown from '../../assets/images/index-down.png';
import { css } from 'emotion';
import { ThemeContext } from '../../context/ThemeContext';

interface IThisIsMeProps {
  isPlanVisible?: boolean;
}

function ThisIsMe(props: IThisIsMeProps) {
  const theme = React.useContext(ThemeContext);
  const { isPlanVisible = false } = props;
  return (
    <div className={meWrapper}>
      <div className={meCss}>
        <img className={logoMeCss} src={logoMe} alt="logo-me" />
        <div>
          {isPlanVisible && <H3>Hey, I'm Dom.</H3>}
          <p className={pCss(isPlanVisible)}>
            {isPlanVisible ? 'A ' : 'Dom is a '}Frontend Engineer and Mentor.
          </p>
          <p className={pCss(isPlanVisible)}>In a London tech startup.</p>
        </div>
      </div>
      {isPlanVisible && (
        <>
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
            All The Resources You Need To Become A Frontend Engineer
          </a>
        </>
      )}
      <div className={profilesCss(theme, isPlanVisible)}>
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
  );
}

const profilesCss = (theme: Theme, isPlanVisible: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${isPlanVisible ? '64px' : '0'};

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

  @media (max-width: 335px) {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
  }
`;

const planWrapperCss = css`
  display: flex;
  margin-bottom: 16px;

  h4 {
    margin: 0 4px 0 12px;
  }

  @media (max-width: 335px) {
    h4 {
      font-size: 20px;
    }
  }
`;

const pCss = (isPlanVisible: boolean) => css`
  font-size: ${isPlanVisible ? '16px' : '18px'};
`;

export default ThisIsMe;
