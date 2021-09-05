import React from 'react';
import { css } from 'emotion';

import BuyMeACroissantImage from '../../assets/images/buy-me-a-croissant.png';
import { Media } from '../../enums/Media';
import { t } from '../../translations/t';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

const buyMeACroissantCss = (theme: Theme) => css`
  position: fixed;
  bottom: 32px;
  width: 56px;
  height: 56px;
  left: calc(50vw - 498px);

  border-radius: 50px;
  background-color: ${theme.buyMeACroissantBackgroundColor};
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px, rgb(0 0 0 / 20%) 0px 2px 24px;

  @media ${Media.Tablet} {
    left: 24px;
  }

  @media ${Media.Mobile} {
    right: 16px;
    left: unset;
  }
`;

const buyMeACroissantImageCss = css`
  width: 56px;
  height: 56px;
`;

const BuyMeACroissant: React.FC = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <a
      className={buyMeACroissantCss(theme)}
      href={t.link.buyMeACroissant}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={buyMeACroissantImageCss}
        src={BuyMeACroissantImage}
        alt="croissant"
      />
    </a>
  );
};

export default BuyMeACroissant;
