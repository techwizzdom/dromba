import { css } from 'emotion';
import * as React from 'react';
import { ThemeContext } from '../ThemeContext';
import CircleLogo from '../CircleLogo';

interface ITimelineCardProps {
  title: string;
  subtitle: string;
  description: string;
  isLastCard?: boolean;
}

const timelineCardContainerCss = (theme: any, isLastCard: boolean) => css`
  display: flex;
  align-items: flex-start;
  position: relative;
  /* max-width: 600px; */
  margin-bottom: 68px;

  /* ::before {
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
  } */
`;

const timelineCardContentLeftCss = css`
  display: flex;
  flex: 1;
  align-items: center;
`;

const borderCss = (theme: any) => css`
  height: 1px;
  flex-grow: 1;
  background-color: ${theme.timelineConnectionLineColor};
  min-width: 100px;
  margin-right: 48px;
`;

const timelineCardContentRightCss = (theme: any) => css`
  flex: 1;
`;

// const titleCss = css`
//   font-weight: 600;
// `;

const titleCss = css`
  font-weight: 800;
  flex-grow: 1;
`;

const subtitleCss = (theme: any) => css`
  color: ${theme.textColorSecondary};
  margin-bottom: 12px;
`;

const descriptionCss = css`
  margin-left: 48px;
`;

const TimelineCard: React.FC<ITimelineCardProps> = (
  props: ITimelineCardProps,
) => {
  const { title, subtitle, description, isLastCard = false } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <div className={timelineCardContainerCss(theme, isLastCard)}>
      <div className={timelineCardContentLeftCss}>
        {/* <CircleLogo logo={companyLogo} /> */}
        <div className={borderCss(theme)} />
        <div className={titleCss}>{title}</div>
      </div>
      <div className={timelineCardContentRightCss(theme)}>
        {/* <div className={titleCss}>{title}</div> */}
        {/* <div className={subtitleCss(theme)}>{subtitle}</div> */}
        <div className={descriptionCss}>{description}</div>
      </div>
    </div>
  );
};

export default TimelineCard;
