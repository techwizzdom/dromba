import React, { useEffect } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../util/metrics';
import { Posts } from '../../blog-posts/posts';
import Helmetiser from '../../components/core/Helmetiser';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function Blog() {
  useEffect(() => {
    trackEvent('Blog', 'Open blog page');
  }, []);

  const featured = Posts[0];
  const rest = Posts.slice(1);

  return (
    <main className={pageWrapperCss}>
      <Helmetiser
        title="Blog"
        description="Utilise the full power of tech. Articles on frontend development, career growth, and the tech industry."
        url="https://www.techwizzdom.com/blog"
      />

      <section className={heroSectionCss}>
        <div className={heroInnerCss}>
          <span className={heroLabelCss}>Blog</span>
          <h1 className={heroTitleCss}>
            Utilise the full power of <span className={accentCss}>tech</span>.
          </h1>
        </div>
      </section>

      <section className={featuredSectionCss}>
        <div className={featuredInnerCss}>
          <Link to={`post/${featured.path}`} className={featuredCardCss}>
            <div className={featuredImageWrapperCss}>
              <img src={featured.thumbnail} alt={featured.title} className={featuredImageCss} />
              <span className={featuredBadgeCss}>Latest</span>
            </div>
            <div className={featuredContentCss}>
              <div className={tagRowCss}>
                {(featured as any).tags?.map((tag: string, i: number) => (
                  <span key={i} className={tagCss}>{tag}</span>
                ))}
              </div>
              <h2 className={featuredTitleCss}>{featured.title}</h2>
              <p className={featuredSubtitleCss}>{featured.subtitle}</p>
              <span className={readMoreCss}>
                Read Article
                <span className={arrowCss}>&#8599;</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className={gridSectionCss}>
        <div className={gridInnerCss}>
          <h3 className={gridTitleCss}>All Articles</h3>
          <div className={postsGridCss}>
            {rest.map((post, i) => (
              <BlogCard key={i} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function BlogCard({ post, index }: any) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={cardWrapCss}>
      <Link to={`post/${post.path}`} className={cardCss(isVisible, index)}>
        <div className={cardImageWrapperCss}>
          <img
            src={post.thumbnail}
            alt={post.title}
            className={cardImageCss}
            loading="lazy"
          />
        </div>
        <div className={cardContentCss}>
          <div className={tagRowCss}>
            {post.tags?.slice(0, 2).map((tag: string, i: number) => (
              <span key={i} className={tagSmallCss}>{tag}</span>
            ))}
          </div>
          <h3 className={cardTitleCss}>{post.title}</h3>
          <p className={cardSubtitleCss}>{post.subtitle}</p>
        </div>
      </Link>
    </div>
  );
}

/* ============ STYLES ============ */

const pageWrapperCss = css``;

const heroSectionCss = css`
  padding: calc(var(--nav-height) + 80px) 32px 48px;

  @media (max-width: 768px) {
    padding: calc(var(--nav-height) + 48px) 24px 32px;
  }
`;

const heroInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const heroLabelCss = css`
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  display: block;
  margin-bottom: 16px;
`;

const heroTitleCss = css`
  font-family: var(--font-heading);
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -2px;
`;

const accentCss = css`
  color: var(--color-accent);
`;

const featuredSectionCss = css`
  padding: 0 32px 64px;

  @media (max-width: 768px) {
    padding: 0 24px 48px;
  }
`;

const featuredInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const featuredCardCss = css`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-smooth);

  &:hover {
    border-color: var(--color-border-accent);
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const featuredImageWrapperCss = css`
  position: relative;
  overflow: hidden;
  min-height: 300px;
`;

const featuredImageCss = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const featuredBadgeCss = css`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 14px;
  background: var(--color-accent);
  color: var(--color-bg);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 6px;
`;

const featuredContentCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 40px 40px 40px 0;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const tagRowCss = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const tagCss = css`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-accent);
  background: var(--color-accent-dim);
  padding: 4px 10px;
  border-radius: 4px;
`;

const featuredTitleCss = css`
  font-family: var(--font-heading);
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
`;

const featuredSubtitleCss = css`
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const readMoreCss = css`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-accent);
  margin-top: 8px;
`;

const arrowCss = css`
  font-size: 16px;
`;

const gridSectionCss = css`
  padding: 0 32px 120px;

  @media (max-width: 768px) {
    padding: 0 24px 80px;
  }
`;

const gridInnerCss = css`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const gridTitleCss = css`
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border);
`;

const postsGridCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const cardWrapCss = css``;

const cardCss = (visible: boolean, i: number) => css`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  opacity: ${visible ? 1 : 0};
  transform: translateY(${visible ? 0 : '20px'});
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(i % 3) * 0.1}s;

  &:hover {
    border-color: var(--color-border-accent);
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;

const cardImageWrapperCss = css`
  height: 180px;
  overflow: hidden;
`;

const cardImageCss = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-smooth);

  *:hover > & {
    transform: scale(1.05);
  }
`;

const cardContentCss = css`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const tagSmallCss = css`
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--color-accent);
`;

const cardTitleCss = css`
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.3px;
`;

const cardSubtitleCss = css`
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.5;
`;

export default Blog;
