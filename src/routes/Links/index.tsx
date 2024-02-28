import React from 'react';

import RouteContainer from '../../components/RouteContainer';

import { css } from 'emotion';

import Hyperlink from '../../components/Hyperlink';
import Helmetiser from '../../components/core/Helmetiser';
import { t } from '../../translations/t';
import { trackEvent } from '../../util/metrics';
import { H5 } from '../../components/core/Heading';
import ThisIsMe from '../../components/ThisIsMe';
import { Routes } from '../Routes';

function Links() {
  return (
    <RouteContainer isPureCenteringEnabled={true}>
      <Helmetiser
        title="Links"
        description="Find out about my great offers."
        url="https://www.techwizzdom.com/links"
      />
      <ThisIsMe />
      <div className={linksContainerCss}>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            isLarge
            onClick={() => trackEvent('TRC newsletter', 'TRC newsletter')}
            href={t.link.theRichCreatorNewsletter}
          >
            The Rich Creator newsletter
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            isLarge
            onClick={() => trackEvent('TRC community', 'TRC community')}
            route={Routes.TheRichCreator}
          >
            The Rich Creator community
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            isLarge
            onClick={() => trackEvent('Break into tech course', 'Click')}
            route={Routes.BreakIntoTech}
          >
            BREAK INTO TECH (course)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Break into tech eBook', 'Click')}
            href={t.link.breakIntoTechEBook}
          >
            My FREE eBook (how to break into tech)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            onClick={() => trackEvent('BigDevSoon', 'BigDevSoon')}
            isUnderline={true}
            href={t.link.bigDevSoon}
          >
            BigDevSoon (tons of free portfolio projects - use code BIGDEVSOON50)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            onClick={() => trackEvent('Scribe', 'Scribe')}
            isUnderline={true}
            href={t.link.scribe}
          >
            Scribe (free Chrome extension for docs/tutorials)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            onClick={() => trackEvent('Pulseway', 'Pulseway')}
            isUnderline={true}
            href={t.link.pulseway}
          >
            Pulseway (automate everything)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            onClick={() => trackEvent('Jam', 'Jam')}
            isUnderline={true}
            href={t.link.jamNewest}
          >
            Jam (free debugging Chrome extension)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            onClick={() => trackEvent('10Web', '10Web')}
            isUnderline={true}
            href={t.link.tenWeb}
          >
            10Web (AI website builder)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            isEmail={true}
            onClick={() => trackEvent('Email', 'Links')}
            href={t.email.techwizzdom}
          >
            {t.email.techwizzdom}
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            onClick={() =>
              trackEvent('Booking', '45 min - Links - social media mentoring')
            }
            href={t.link.book45minsSocials}
          >
            Social Media Consulting (60 mins, $299)
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
