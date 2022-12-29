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

function Pricing() {
  const theme = React.useContext(ThemeContext);

  const id = window.location.pathname.split('/')[2];
  const formattedId = id.toString();
  let standardPrice = 0;
  let premiumPrice = 0;
  let megaPrice = 0;
  let wrongId = false;

  if (formattedId.includes(PricingBundle.Cheap)) {
    standardPrice = 900;
    premiumPrice = 1400;
    megaPrice = 1900;
  } else if (formattedId.includes(PricingBundle.Medium)) {
    standardPrice = 1100;
    premiumPrice = 1600;
    megaPrice = 2400;
  } else if (formattedId.includes(PricingBundle.Expensive)) {
    standardPrice = 1200;
    premiumPrice = 1900;
    megaPrice = 2800;
  } else if (formattedId.includes(PricingBundle.Dom)) {
    standardPrice = 1800;
    premiumPrice = 2400;
    megaPrice = 3300;
  } else {
    wrongId = true;
    standardPrice = 5000;
    premiumPrice = 8000;
    megaPrice = 14000;
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
                86M <br></br> views
              </span>
              <span className={statCss(theme)}>
                6M <br></br> likes
              </span>
              <span className={statCss(theme)}>
                1.3M <br></br> saves
              </span>
            </div>
          </H3>
          <VerticalSpacing height={VerticalSpacingHeight.Large} />
          <H1>Let's make everyone know you in one day.</H1>
        </>
      )}
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={pricingWrapperCss}>
        <div className={pricingItemCss(theme)}>
          <H3>Standard</H3>
          <H3>${standardPrice}</H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem>
              1 IG story, 1 IG "regular" post (not Reel), <strong>or</strong> 1
              TikTok video
            </PricingBlockItem>
            <PricingBlockItem>CTA to any link you provide</PricingBlockItem>
            <PricingBlockItem>
              That link on my website and linked with my bio for 2 days
            </PricingBlockItem>
            <PricingBlockItem isError>
              Ownership of the created content
            </PricingBlockItem>
          </div>
        </div>
        <div className={pricingItemCss(theme)}>
          <H3>Premium</H3>
          <H3>${premiumPrice}</H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem>
              <strong>1 IG Reel</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              1 IG story, 1 IG post, <strong>or</strong> 1 TikTok video
            </PricingBlockItem>
            <PricingBlockItem>CTA to any link you provide</PricingBlockItem>
            <PricingBlockItem>
              That link on my website and linked with my bio for{' '}
              <strong>5 days</strong>
            </PricingBlockItem>
            <PricingBlockItem>I create content all by myself</PricingBlockItem>
            <PricingBlockItem isError>
              Ownership of the created content
            </PricingBlockItem>
          </div>
        </div>
        <div className={pricingItemCss(theme)}>
          <H3>Mega reach</H3>
          <H3>${megaPrice}</H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem>
              <strong>1 IG Reel</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 TikTok video</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 YouTube short</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 Instagram post</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 Instagram story</strong>
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
              Full ownership of the created content for 3 months
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
