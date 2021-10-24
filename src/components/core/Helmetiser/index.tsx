import React from 'react';

interface IHelmetiserProps {
  title?: string;
  description?: string;
}

function Helmetiser(props: IHelmetiserProps) {
  const { title, description } = props;
  document.title = `${title} — Domagoj Vidovic`;
  document
    .querySelector('[property="og:title"]')
    ?.setAttribute('content', title || '');
  document
    .querySelector('[name="twitter:title"]')
    ?.setAttribute('content', title || '');

  document
    .querySelector('[name="description"]')
    ?.setAttribute('content', description || '');
  document
    .querySelector('[property="og:description"]')
    ?.setAttribute('content', description || '');
  document
    .querySelector('[name="twitter:description"]')
    ?.setAttribute('content', description || '');

  return <></>;
}

export default Helmetiser;
