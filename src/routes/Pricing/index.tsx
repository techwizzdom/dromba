import { css } from 'emotion';
import React from 'react';
import { H1, H3 } from '../../components/core/Heading';
import PricingBlockItem from '../../components/PricingBlockItem';
import RouteContainer from '../../components/RouteContainer';
import TestimonialsGrid from '../../components/TestimonialsGrid';
import VerticalSpacing from '../../components/VerticalSpacing';
import { ThemeContext } from '../../context/ThemeContext';
import { Media } from '../../enums/Media';
import { PricingBundle } from '../../enums/PricingBundle';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import { Theme } from '../../styles';
import { t } from '../../translations/t';

function Pricing() {
  const theme = React.useContext(ThemeContext);

  const id = window.location.pathname.split('/')[2];
  const formattedId = id.toString();
  let standardPrice = 0;
  let premiumPrice = 0;
  let megaPrice = 0;
  // let magicalPrice = 0;
  let wrongId = false;

  if (formattedId.includes(PricingBundle.Medium)) {
    standardPrice = 1100;
    premiumPrice = 1600;
    megaPrice = 2800;
    // magicalPrice = 4300;
  } else if (formattedId.includes(PricingBundle.Expensive)) {
    standardPrice = 1200;
    premiumPrice = 1900;
    megaPrice = 3400;
    // magicalPrice = 5900;
  } else if (formattedId.includes(PricingBundle.AboveExpensive)) {
    standardPrice = 4500;
    premiumPrice = 6000;
    megaPrice = 8500;
    // magicalPrice = 6300;
  } else if (formattedId.includes(PricingBundle.Dom)) {
    standardPrice = 3300;
    premiumPrice = 4900;
    megaPrice = 7800;
    // magicalPrice = 7300;
  } else {
    wrongId = true;
    standardPrice = 5000;
    premiumPrice = 8000;
    megaPrice = 14000;
    // magicalPrice = 23000;
  }

  return (
    <RouteContainer isPureCenteringEnabled={true}>
      {wrongId ? (
        <>
          <H1>You messed up the URL. Special price for you now.</H1>
          <VerticalSpacing height={VerticalSpacingHeight.Medium} />
        </>
      ) : (
        <>
          <H1>Last 90 days.</H1>
          <VerticalSpacing height={VerticalSpacingHeight.Medium} />
          <H3>
            <div className={statsCss}>
              <span className={statCss(theme)}>
                {t.socials.views} <br></br> views
              </span>
              <span className={statCss(theme)}>
                {t.socials.likes} <br></br> likes
              </span>
              <span className={statCss(theme)}>
                {t.socials.saves} <br></br> saves
              </span>
            </div>
          </H3>
          <VerticalSpacing height={VerticalSpacingHeight.Large} />
          <H1>Let's make everyone know you in one day.</H1>
        </>
      )}
      {/* <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={topPricingCss}>
        <div className={pricingItemCss(theme)}>
          <div className={topPricingNamePriceCss}>
            <H2>Magical reach</H2>
            <H2>${magicalPrice}</H2>
          </div>
          <VerticalSpacing height={VerticalSpacingHeight.Medium} />
          <div className={topPricingItemsCss}>
            <PricingBlockItem>
              <strong>2 Instagram Reels</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>2 TikTok videos</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 YouTube long-form mention</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>2 YouTube shorts</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>2 LinkedIn posts</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>2 Instagram stories</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>2 TikTok stories</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>CTA to any link you provide</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>
                Link on my website and linked with my bio for 20 days
              </strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>
                Full ownership of the created content for 3 months
              </strong>
            </PricingBlockItem>
          </div>
        </div>
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <H1>Don't worry, there are other packages too.</H1> */}
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={pricingWrapperCss}>
        <div className={pricingItemCss(theme)}>
          <H3>Mega reach</H3>
          <H3>${megaPrice}</H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem>
              <strong>1 Instagram Reel</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 TikTok video</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 YouTube short</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>2 Instagram stories (with a clickable link)</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 LinkedIn video post</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 Tweet with video</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 TikTok story</strong>
            </PricingBlockItem>
            <PricingBlockItem>CTA to any link you provide</PricingBlockItem>
            <PricingBlockItem>
              That link on my website and linked with my bio for{' '}
              <strong>10 days</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>
                Full ownership and ad authorisation of the created content for 3
                months
              </strong>
            </PricingBlockItem>
          </div>
        </div>
        <div className={pricingItemCss(theme)}>
          <H3>Premium</H3>
          <H3>${premiumPrice}</H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem>
              <strong>1 Instagram Reel</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 Instagram story</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 TikTok video</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 YouTube short</strong>
            </PricingBlockItem>
            <PricingBlockItem>CTA to any link you provide</PricingBlockItem>
            <PricingBlockItem>
              That link on my website and linked with my bio for{' '}
              <strong>7 days</strong>
            </PricingBlockItem>
            <PricingBlockItem isError>
              Ownership of the created content
            </PricingBlockItem>
          </div>
        </div>
        <div className={pricingItemCss(theme)}>
          <H3>Standard</H3>
          <H3>${standardPrice}</H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem>
              <strong>1 Instagram story</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 Instagram post (not Reel</strong>)
            </PricingBlockItem>
            <PricingBlockItem>CTA to any link you provide</PricingBlockItem>
            <PricingBlockItem>
              That link on my website and linked with my bio for 5 days
            </PricingBlockItem>
            <PricingBlockItem isError>
              Ownership of the created content
            </PricingBlockItem>
          </div>
        </div>
      </div>
      <VerticalSpacing height={VerticalSpacingHeight.Xlarge} />
      <H1>People love to work with me!</H1>
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <TestimonialsGrid />
    </RouteContainer>
  );
}

// const topPricingCss = css`
//   padding: 0 64px;

//   @media ${Media.Mobile} {
//     padding: 0;
//   }
// `;

// const topPricingNamePriceCss = css`
//   display: flex;
//   justify-content: center;
//   gap: 32px;

//   @media ${Media.Mobile} {
//     flex-direction: column;
//     align-items: center;
//     gap: 4px;
//   }
// `;

// const topPricingItemsCss = css`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   column-gap: 64px;
//   row-gap: 4px;

//   @media ${Media.Mobile} {
//     grid-template-columns: 1fr;
//   }
// `;

const pricingWrapperCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: flex-start;

  @media ${Media.Mobile} {
    grid-template-columns: 1fr;
  }
`;

const pricingItemCss = (theme: Theme) => css`
  border: 4px solid ${theme.textColor};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
`;

const pricingItemDescriptionCss = css`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const statsCss = css`
  display: flex;
  gap: 64px;

  @media ${Media.Mobile} {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const statCss = (theme: Theme) => css`
  background-color: ${theme.hyperlinkUnderlineColor};
  border-radius: 50%;
  width: 156px;
  height: 156px;
  display: grid;
  place-items: center;
  text-align: center;

  @media ${Media.Mobile} {
    width: 116px;
    height: 116px;
  }
`;

export default Pricing;
