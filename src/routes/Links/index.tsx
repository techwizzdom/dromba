import React from 'react';

import RouteContainer from '../../components/RouteContainer';

import { css } from 'emotion';

import Hyperlink from '../../components/Hyperlink';
import Helmetiser from '../../components/core/Helmetiser';
import { t } from '../../translations/t';
import { trackEvent } from '../../util/metrics';
import { H5 } from '../../components/core/Heading';
import ThisIsMe from '../../components/ThisIsMe';

function Links() {
  return (
    <RouteContainer isPureCenteringEnabled={true}>
      <Helmetiser
        title="Links"
        description="Find out about my great offers."
        url="https://www.domagojvidovic.com/links"
      />
      <ThisIsMe />
      <div className={linksContainerCss}>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Otta', 'Click')}
            href={t.link.otta}
          >
            Otta
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Locofy', 'Click')}
            href={t.link.locofy}
          >
            Locofy.ai
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('E-Pal', 'Referal')}
            href={t.link.epal}
          >
            E-Pal
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Rapyd', 'Hack the galaxy')}
            href={t.link.rapyd}
          >
            Hack The Galaxy
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            isEmail={true}
            onClick={() => trackEvent('Email', 'Links')}
            href={t.email.javascriptwizz}
          >
            {t.email.javascriptwizz}
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() =>
              trackEvent('Booking', '45 min - Links - social media mentoring')
            }
            href={t.link.book45minsSocials}
          >
            Social Media Mentoring (45 mins,{' '}
            <span
              style={{
                textDecoration: 'line-through',
                marginRight: '4px',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              $199
            </span>
            $149)
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Booking', '60 min - Links')}
            href={t.link.book60mins}
          >
            Tech Mentoring (60 mins,{' '}
            <span
              style={{
                textDecoration: 'line-through',
                marginRight: '4px',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              $149
            </span>
            $119)
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Booking', '30 min - Links')}
            href={t.link.book30mins}
          >
            Tech Mentoring (30 mins,{' '}
            <span
              style={{
                textDecoration: 'line-through',
                marginRight: '4px',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              $99
            </span>
            $79)
          </Hyperlink>
        </H5>
      </div>
    </RouteContainer>
  );
}

const linksContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 16px;
`;

export default Links;
