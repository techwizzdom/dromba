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
            onClick={() => trackEvent('AI Camp', 'Register')}
            href={t.link.aiCamp}
          >
            Flatlogic
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
            1-on-1 Coaching (60 mins, $79)
          </Hyperlink>
        </H5>
        <H5>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Booking', '30 min - Links')}
            href={t.link.book30mins}
          >
            1-on-1 Coaching (30 mins, $49)
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
