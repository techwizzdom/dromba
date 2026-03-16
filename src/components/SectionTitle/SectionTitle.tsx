import React from 'react';
import { css } from 'emotion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

function SectionTitle({ label, title, subtitle, align = 'left' }: Props) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={wrapperCss(align, isVisible)}>
      {label && <span className={labelCss}>{label}</span>}
      <h2 className={titleCss}>{title}</h2>
      {subtitle && <p className={subtitleCss}>{subtitle}</p>}
    </div>
  );
}

const wrapperCss = (align: string, visible: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: ${align};
  ${align === 'center' ? 'align-items: center;' : ''}
  max-width: 720px;
  ${align === 'center' ? 'margin: 0 auto;' : ''}
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '30px'});
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
`;

const labelCss = css`
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
`;

const titleCss = css`
  font-family: var(--font-heading);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -1px;
  color: var(--color-text);
`;

const subtitleCss = css`
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 560px;
`;

export default SectionTitle;
