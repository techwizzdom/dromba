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
        url="https://www.domagojvidovic.com/links"
      />
      <ThisIsMe />
      <div className={linksContainerCss}>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            isLarge
            onClick={() => trackEvent('Content wizzard course', 'Click')}
            route={Routes.ContentWizzard}
          >
            Content Wizzard: Become A $500k Creator
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
            isUnderline={true}
            onClick={() => trackEvent('EdrawMax', 'Click')}
            href={t.link.edrawMaxAi}
          >
            EdrawMax (AI Diagrams)
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
