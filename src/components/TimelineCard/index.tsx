import { css } from 'emotion';
import * as React from 'react';
import { ThemeContext } from '../ThemeContext';
import CircleLogo from '../CircleLogo';

interface ITimelineCardProps {
  title: string;
  subtitle: string;
  description: string;
  companyLogo: string;
  isLastCard?: boolean;
}

const timelineCardContainerCss = (theme: any, isLastCard: boolean) => css`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 600px;
  margin-bottom: 68px;

  ::before {
    display: ${isLastCard ? 'none' : 'block'};
    content: '';
    position: absolute;
    top: 50px;
    right: 0;
    bottom: -63px;
    left: 15px;
    width: 1px;
    border-radius: 2px;
    background-color: ${theme.timelineConnectionLineColor};
  }
`;

const timelineCardContentLeftCss = css`
  margin: 6px 12px auto 0;
`;

const timelineCardContentRightCss = (theme: any) => css``;

const titleCss = css`
  font-weight: 600;
`;

const subtitleCss = (theme: any) => css`
  color: ${theme.textColorSecondary};
  margin-bottom: 12px;
`;

const descriptionCss = css``;

const TimelineCard: React.FC<ITimelineCardProps> = (
  props: ITimelineCardProps,
) => {
  const {
    title,
    subtitle,
    description,
    companyLogo,
    isLastCard = false,
  } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <div className={timelineCardContainerCss(theme, isLastCard)}>
      <div className={timelineCardContentLeftCss}>
        <CircleLogo logo={companyLogo} />
      </div>
      <div className={timelineCardContentRightCss(theme)}>
        <div className={titleCss}>{title}</div>
        <div className={subtitleCss(theme)}>{subtitle}</div>
        <div className={descriptionCss}>{description}</div>
      </div>
    </div>
  );
};

export default TimelineCard;
