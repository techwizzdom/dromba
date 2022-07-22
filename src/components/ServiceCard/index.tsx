import * as React from 'react';
import { css } from 'emotion';
import { H4 } from '../core/Heading';
import { Theme } from '../../styles';
import { ThemeContext } from '../../context/ThemeContext';
import { Media } from '../../enums/Media';

interface IServiceCardProps {
  title: string;
  descriptionTop: string;
  descriptionBottom: string;
  children: React.ReactNode;
  href: string;
}

const ServiceCard: React.FC<IServiceCardProps> = (props: IServiceCardProps) => {
  const { title, descriptionTop, descriptionBottom, href, children } = props;
  const theme = React.useContext(ThemeContext);

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={serviceCardCss(theme)}
      href={href}
    >
      {children}
      <H4>{title}</H4>
      <p>{descriptionTop}</p>
      <p>{descriptionBottom}</p>
    </a>
  );
};

const serviceCardCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid black;
  border-radius: 16px;
  padding: 16px;
  gap: 8px;
  min-width: 300px;
  max-width: 400px;
  transition: box-shadow 0.3s ease-in-out;

  @media ${Media.Mobile} {
    max-width: 100%;
  }

  svg {
    width: 112px;
    height: 112px;

    path {
      fill: ${theme.serviceCardLogoColor};
    }
  }

  p {
    text-align: center;
  }

  &:hover {
    box-shadow: inset 0px 0px 16px 8px rgb(0 0 0 / 32%);
  }
`;

export default ServiceCard;
