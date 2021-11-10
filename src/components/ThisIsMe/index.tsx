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
import { trackEvent } from '../../util/metrics';
import Hyperlink from '../Hyperlink';

interface IThisIsMeProps {
  isMainScreenMode?: boolean;
}

function ThisIsMe(props: IThisIsMeProps) {
  const theme = React.useContext(ThemeContext);
  const { isMainScreenMode = false } = props;
  return (
    <div className={meWrapper}>
      <div className={meCss}>
        <img className={logoMeCss} src={logoMe} alt="logo-me" />
        <div>
          {isMainScreenMode && <H3>Hey, I'm Dom.</H3>}
          <p className={pCss(isMainScreenMode)}>
            {isMainScreenMode ? 'A ' : 'Dom is a '}Frontend engineer, mentor,
            and speaker.
          </p>
          <p className={pCss(isMainScreenMode)}>In a London tech startup.</p>
          <p className={pCss(isMainScreenMode, true)}>
            Let's supercharge your career.
          </p>
        </div>
      </div>
      {isMainScreenMode && (
        <>
          <div className={planWrapperCss}>
            <div className={emojiWrapper}>
              <img src={IndexDown} className={indexDownCss} alt="index-down" />
            </div>
            <H4>Book a career/code mentoring</H4>
            <div className={emojiWrapper}>
              <img src={IndexDown} className={indexDownCss} alt="index-down" />
            </div>
          </div>
          <div className={bookingsCss}>
            <Hyperlink
              isUnderline={true}
              isLarge={true}
              onClick={() => trackEvent('Booking', '60 min')}
              href={t.link.book60mins}
            >
              60 min ($49)
            </Hyperlink>
            <Hyperlink
              isUnderline={true}
              isLarge={true}
              onClick={() => trackEvent('Booking', '30 min')}
              href={t.link.book30mins}
            >
              30 mins ($29)
            </Hyperlink>
          </div>
        </>
      )}
      <div className={profilesCss(theme, isMainScreenMode)}>
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

const profilesCss = (theme: Theme, isMainScreenMode: boolean) => css`
  display: flex;
  align-items: center;
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
  align-items: center;
  margin-bottom: 16px;
  white-space: nowrap;

  h4 {
    margin: 0 4px 0 12px;
    text-align: center;
    display: inline;
  }

  @media (max-width: 512px) {
    h4 {
      white-space: initial;
    }
  }

  @media (max-width: 335px) {
    h4 {
      font-size: 20px;
    }
  }
`;

const emojiWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const bookingsCss = css`
  display: flex;
  justify-content: space-between;
  max-width: 568px;
  width: 100%;
`;

const pCss = (isMainScreenMode: boolean, isBold?: boolean) => css`
  font-size: ${isMainScreenMode ? '16px' : '18px'};
  ${isBold && 'font-weight: bold;'}
`;

export default ThisIsMe;
