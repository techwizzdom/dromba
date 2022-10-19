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
    standardPrice = 700;
    premiumPrice = 1200;
    megaPrice = 1800;
  } else if (formattedId.includes(PricingBundle.Medium)) {
    standardPrice = 900;
    premiumPrice = 1400;
    megaPrice = 2000;
  } else if (formattedId.includes(PricingBundle.Expensive)) {
    standardPrice = 1200;
    premiumPrice = 1600;
    megaPrice = 2400;
  } else if (formattedId.includes(PricingBundle.Dom)) {
    standardPrice = 1500;
    premiumPrice = 2000;
    megaPrice = 2900;
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
          <H1>In one day, everyone will know what you do.</H1>
          <VerticalSpacing height={VerticalSpacingHeight.Medium} />
          <H3>180k+ engaged tech followers across platforms.</H3>
        </>
      )}
      <VerticalSpacing height={VerticalSpacingHeight.Large} />
      <div className={pricingWrapperCss}>
        <div className={pricingItemCss(theme)}>
          <H3>Standard</H3>
          <H3>${standardPrice}</H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem>1 Reel, IG post, or TT video</PricingBlockItem>
            <PricingBlockItem>CTA to any link you provide</PricingBlockItem>
            <PricingBlockItem>
              That link on my website and linked with my bio for 1 month
            </PricingBlockItem>
            <PricingBlockItem>
              Full ownership of the created content
            </PricingBlockItem>
          </div>
        </div>
        <div className={pricingItemCss(theme)}>
          <H3>Premium</H3>
          <H3>${premiumPrice}</H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem>
              <strong>1 Reel</strong>
            </PricingBlockItem>
            <PricingBlockItem>
              <strong>1 TikTok video</strong>
            </PricingBlockItem>
            <PricingBlockItem>CTA to any link you provide</PricingBlockItem>
            <PricingBlockItem>
              That link on my website and linked with my bio for{' '}
              <strong>2 months</strong>
            </PricingBlockItem>
            <PricingBlockItem>I create content all by myself</PricingBlockItem>
            <PricingBlockItem>
              Full ownership of the created content
            </PricingBlockItem>
          </div>
        </div>
        <div className={pricingItemCss(theme)}>
          <H3>Mega reach</H3>
          <H3>${megaPrice}</H3>
          <div className={pricingItemDescriptionCss}>
            <PricingBlockItem>
              <strong>1 Reel or IG post</strong>
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
              <strong>3 months</strong>
            </PricingBlockItem>
            <PricingBlockItem>I create content all by myself</PricingBlockItem>
            <PricingBlockItem>
              Full ownership of the created content
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

export default Pricing;
