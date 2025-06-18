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
        url="https://www.techwizzdom.com/links"
      />
      <ThisIsMe />
      <div className={linksContainerCss}>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Second Brain', 'Second Brain')}
            href={t.link.secondBrain}
          >
            Second Brain (the smartest AI)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Sparroww', 'Sparroww')}
            href={t.link.sparroww}
          >
            Sparroww (Digital Hollywood)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Product Hunt', 'Product Hunt')}
            href={t.link.producthunt}
          >
            Product Hunt (Second Brain)
          </Hyperlink>
        </H5>
        <H5 alignCenter={true}>
          <Hyperlink
            isUnderline={true}
            onClick={() => trackEvent('Krisp', 'Krisp')}
            href={t.link.krisp}
          >
            Krisp.ai (AI meeting assistant)
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
