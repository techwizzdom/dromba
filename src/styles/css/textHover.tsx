import { css } from 'emotion';

export const underlineClassNameOnHover = (className: string) => css`
  &:hover ${className} {
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100% 100%;
  }
`;

export const underlineOnHover = (theme: any) => css`
  display: inline;
  background-image: linear-gradient(
    transparent 90%,
    ${theme.textColor} 90%,
    ${theme.textColor} 100%
  );
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: 0% 100%;
  transform: none;
  transition: background-size 0.5s cubic-bezier(0.79, 0.01, 0.22, 0.99) 0s,
    background-position 0s step-end 0.5s;

  &:hover {
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100% 100%;
  }
`;

export const underline = (theme: any) => css`
  display: inline;
  background-image: linear-gradient(
    transparent 90%,
    ${theme.textColor} 90%,
    ${theme.textColor} 100%
  );
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: 100% 100%;
`;
