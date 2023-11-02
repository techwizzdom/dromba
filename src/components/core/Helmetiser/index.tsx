import React from 'react';

interface IHelmetiserProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const DEFAULT_TITLE = 'Tech Wizzdom';
const DEFAULT_DESCRIPTION =
  'Senior frontend engineer turned into tech content creator and influencer. I make viral tech content.';
const DEFAULT_IMAGE = 'https://i.imgur.com/lvEdL9Q.png';
const DEFAULT_URL = 'https://techwizzdom.com';

function Helmetiser(props: IHelmetiserProps) {
  const { title, description, image, url } = props;

  const updatedTitle = `${title || DEFAULT_TITLE} — Domagoj Lalk Vidovic`;
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
