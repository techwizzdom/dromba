import { useEffect } from 'react';

interface IHelmetiserProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  type?: 'website' | 'article' | 'profile';
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_TITLE = 'Tech Wizzdom';
const DEFAULT_DESCRIPTION =
  'A 9-5 senior frontend engineer turned into tech content creator, influencer and tech startup founder. I make viral technology content.';
const DEFAULT_IMAGE = 'https://i.imgur.com/BsBbxEn.png';
const DEFAULT_URL = 'https://www.techwizzdom.com';
const DEFAULT_KEYWORDS =
  'tech content creator, frontend engineer, startup founder, social media creator, influencer marketing';

const upsertMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
  let element = document.querySelector(`meta[${attr}="${value}"]`) as
    | HTMLMetaElement
    | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, value);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as
    | HTMLLinkElement
    | null;

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }

  canonical.href = href;
};

const upsertStructuredData = (
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>,
) => {
  const existingJsonLd = document.querySelector(
    'script[data-app-schema="true"]',
  ) as HTMLScriptElement | null;

  if (!structuredData) {
    if (existingJsonLd) {
      existingJsonLd.remove();
    }
    return;
  }

  let jsonLd = existingJsonLd;

  if (!jsonLd) {
    jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.setAttribute('data-app-schema', 'true');
    document.head.appendChild(jsonLd);
  }

  jsonLd.textContent = JSON.stringify(structuredData);
};

function Helmetiser(props: IHelmetiserProps) {
  const {
    title,
    description,
    image,
    url,
    keywords = DEFAULT_KEYWORDS,
    type = 'website',
    structuredData,
  } = props;

  useEffect(() => {
    const updatedTitle = `${title || DEFAULT_TITLE} — Domagoj Lalk Vidovic`;
    const updatedDescription = description || DEFAULT_DESCRIPTION;
    const updatedImage = image || DEFAULT_IMAGE;
    const updatedUrl = url || DEFAULT_URL;

    document.title = updatedTitle;

    upsertMetaTag('name', 'description', updatedDescription);
    upsertMetaTag('name', 'keywords', keywords);
    upsertMetaTag('name', 'robots', 'index, follow, max-image-preview:large');
    upsertMetaTag('property', 'og:title', updatedTitle);
    upsertMetaTag('property', 'og:description', updatedDescription);
    upsertMetaTag('property', 'og:image', updatedImage);
    upsertMetaTag('property', 'og:url', updatedUrl);
    upsertMetaTag('property', 'og:type', type);
    upsertMetaTag('property', 'og:site_name', 'Tech Wizzdom');
    upsertMetaTag('name', 'twitter:title', updatedTitle);
    upsertMetaTag('name', 'twitter:description', updatedDescription);
    upsertMetaTag('name', 'twitter:image', updatedImage);
    upsertMetaTag('name', 'twitter:card', 'summary_large_image');

    upsertCanonical(updatedUrl);
    upsertStructuredData(structuredData);
  }, [description, image, keywords, structuredData, title, type, url]);

  return null;
}

export default Helmetiser;
