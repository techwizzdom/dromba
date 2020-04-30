import * as React from 'react';
import { useDevice } from '../../hooks/useDevice';
import { DeviceType } from '../../enums/DeviceType';
import { Link } from 'react-router-dom';
import { underlineOnHover } from '../../styles/css/textHover';
import { TextHoverUnderlineHeight } from '../../enums/TextHoverUnderlineHeight';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';

const navigationItemCss = (theme: any, isMobile: boolean) => css`
  position: relative;
  color: ${theme.textColor};
  display: ${isMobile ? 'flex' : 'block'};
  justify-content: center;
  height: ${isMobile ? '32px' : 'auto'};

  ${underlineOnHover(TextHoverUnderlineHeight.Medium, theme)};
`;

const NavigationItems: React.FC = () => {
  const deviceType = useDevice();
  const theme = React.useContext(ThemeContext);

  const isMobile = deviceType === DeviceType.Mobile;

  return (
    <>
      <Link to="/" className={navigationItemCss(theme, isMobile)}>
        Das Haus
      </Link>
      <Link to="timeline" className={navigationItemCss(theme, isMobile)}>
        Timeline
      </Link>
      <Link to="about" className={navigationItemCss(theme, isMobile)}>
        About who?
      </Link>
      <Link to="blog" className={navigationItemCss(theme, isMobile)}>
        Blog
      </Link>
    </>
  );
};

export default NavigationItems;
