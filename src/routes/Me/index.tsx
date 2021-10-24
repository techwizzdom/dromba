import React, { useState } from 'react';

import RouteContainer from '../../components/RouteContainer';

import { css } from 'emotion';

import Hyperlink from '../../components/Hyperlink';
import Helmetiser from '../../components/core/Helmetiser';
import ThisIsMe from '../../components/ThisIsMe';

const privacyPolicyCss = (isPolicyOpen: boolean) => css`
  display: ${isPolicyOpen ? 'block' : 'none'};
  width: 300px;
  position: fixed;
  bottom: 32px;
  left: calc(50vw - 150px);
  padding: 12px 16px;
  font-size: 12px;
  text-align: center;
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
    var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  border: 2px solid #000000a6;
  border-radius: 4px;
`;

function Me() {
  const [isPolicyOpen, setIsPolicyOpen] = useState<boolean>(
    localStorage.getItem('isPolicyViewedDrommer') === 'true' ? false : true,
  );

  const closePolicy = () => {
    localStorage.setItem('isPolicyViewedDrommer', 'true');
    setIsPolicyOpen(false);
  };

  return (
    <RouteContainer isPureCenteringEnabled={true} onClick={closePolicy}>
      <Helmetiser
        title="Personal Website And Blog"
        description="Master Web Dev With Me."
      />
      <ThisIsMe isMainScreenMode={true} />
      <div className={privacyPolicyCss(isPolicyOpen)}>
        To improve your experience even more, I use cookies for analytics. Find
        out more{' '}
        <Hyperlink href="https://www.freeprivacypolicy.com/live/00b087ad-a4a1-4885-8265-15beceb176df">
          here
        </Hyperlink>
      </div>
    </RouteContainer>
  );
}

export default Me;
