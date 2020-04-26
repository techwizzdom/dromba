import { css } from 'emotion';
import { TextHoverUnderlineHeight } from '../../enums/TextHoverUnderlineHeight';

export const underlineClassNameOnHover = (
  className: string,
  height: TextHoverUnderlineHeight,
) => css`
  &:hover ${className}::after {
    content: '';
    transform: scaleX(1);
    transform-origin: left center;
    height: ${height}px;
  }
`;

export const underlineOnHover = (
  height: TextHoverUnderlineHeight,
  theme: any,
) => css`
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 2px;
    background-color: ${theme.textColor};
    width: 100%;
    height: ${height};
    transform: scaleX(0);
    transform-origin: right center;
    transition: transform 0.4s cubic-bezier(0.79, 0.01, 0.22, 0.99);
  }

  &:hover {
    &::after {
      content: '';
      transform: scaleX(1);
      transform-origin: left center;
      background-color: ${theme.textColor};
      height: ${height};
    }
  }
`;
