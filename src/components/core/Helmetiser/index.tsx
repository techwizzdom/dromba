import React from 'react';

interface IHelmetiserProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const DEFAULT_TITLE = 'Personal Website And Blog';
const DEFAULT_DESCRIPTION =
  "Senior frontend engineer. Content creator. Mentor. Speaker. Let's create awesome stuff.";
const DEFAULT_IMAGE = 'https://i.imgur.com/5Spkm5M.png';
const DEFAULT_URL = 'https://domagojvidovic.com';

function Helmetiser(props: IHelmetiserProps) {
  const { title, description, image, url } = props;

  const updatedTitle = `${title || DEFAULT_TITLE} — Domagoj Vidovic`;
  document.title = updatedTitle;
  document
    .querySelector('[property="og:title"]')
    ?.setAttribute('content', updatedTitle);
  document
    .querySelector('[name="twitter:title"]')
    ?.setAttribute('content', updatedTitle);

  document
    .querySelector('[name="description"]')
    ?.setAttribute('content', description || DEFAULT_DESCRIPTION);
  document
    .querySelector('[property="og:description"]')
    ?.setAttribute('content', description || DEFAULT_DESCRIPTION);
  document
    .querySelector('[name="twitter:description"]')
    ?.setAttribute('content', description || DEFAULT_DESCRIPTION);

  document
    .querySelector('[property="og:image"]')
    ?.setAttribute('content', image || DEFAULT_IMAGE);
  document
    .querySelector('[name="twitter:image"]')
    ?.setAttribute('content', image || DEFAULT_IMAGE);

  document
    .querySelector('[property="og:url"]')
    ?.setAttribute('content', url || DEFAULT_URL);

  return <></>;
}

export default Helmetiser;
