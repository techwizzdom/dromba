import React from 'react';

import RouteContainer from '../../components/RouteContainer';

import { css } from 'emotion';

import Hyperlink from '../../components/Hyperlink';
import Helmetiser from '../../components/core/Helmetiser';
import { t } from '../../translations/t';
import { trackEvent } from '../../util/metrics';

function Links() {
  return (
    <RouteContainer isPureCenteringEnabled={true}>
      <Helmetiser
        title="Links - Domagoj Vidovic"
        description="Find out about my great offers."
      />
      <div className={linksContainerCss}>
        <Hyperlink
          isUnderline={true}
          onClick={() => trackEvent('Teal', 'Chrome Extension')}
          href={t.link.teal}
        >
          Teal Chrome Extension
        </Hyperlink>
        <Hyperlink
          isUnderline={true}
          onClick={() => trackEvent('Booking', '60 min - Links')}
          href={t.link.book60mins}
        >
          1-on-1 Mentoring (60 mins, $49)
        </Hyperlink>
        <Hyperlink
          isUnderline={true}
          onClick={() => trackEvent('Booking', '30 min - Links')}
          href={t.link.book30mins}
        >
          1-on-1 Mentoring (30 mins, $29)
        </Hyperlink>
      </div>
    </RouteContainer>
  );
}

const linksContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export default Links;
