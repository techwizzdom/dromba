import React from 'react';

interface IHelmetiserProps {
  title?: string;
  description?: string;
  image?: string;
}

const DEFAULT_TITLE = 'Personal Website And Blog';
const DEFAULT_DESCRIPTION =
  'Frontend Engineer, mentor, and speaker in a London tech startup. Sharing my thoughts and ideas.';
const DEFAULT_IMAGE = 'https://i.imgur.com/63zrOmd.png';

function Helmetiser(props: IHelmetiserProps) {
  const { title, description, image } = props;

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

  return <></>;
}

export default Helmetiser;
