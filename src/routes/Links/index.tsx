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
            onClick={() => trackEvent('Recrooit', 'Referal')}
            href={t.link.recrooit}
          >
            Recrooit
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Bamblue', 'Referal')}
            href={t.link.bamblue}
          >
            Anti blue-light glasses (Bamblue)
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
            href={t.email.dvidovic}
          >
            {t.email.dvidovic}
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Booking', '60 min - Links')}
            href={t.link.book60mins}
          >
            1-on-1 Coaching (60 mins,{' '}
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
            1-on-1 Coaching (30 mins,{' '}
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
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            onClick={() =>
              trackEvent(
                'Booking',
                'All Resources You Need To Become a FE Engineer',
              )
            }
            href={t.link.zeroKnowledgeTo80k}
          >
            All The Resources You Need To Become A Frontend Engineer
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
