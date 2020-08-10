import { css } from 'emotion';
import * as React from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

interface ITimelineCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const timelineCardContainerCss = css`
  display: flex;
  align-items: flex-start;
  position: relative;

  margin-bottom: ${VerticalSpacingHeight.Large};
`;

const timelineCardContentLeftCss = css`
  display: flex;
  flex: 1;
  align-items: center;
`;

const borderCss = (theme: any) => css`
  flex-grow: 1;

  margin-right: 48px;
  height: 1px;
  min-width: 100px;

  background-color: ${theme.timelineConnectionLineColor};
`;

const timelineCardContentRightCss = css`
  flex: 1;
`;

const titleCss = css`
  flex-grow: 1;

  font-weight: 800;
`;

const descriptionCss = css`
  margin-left: 48px;
`;

const TimelineCard: React.FC<ITimelineCardProps> = (
  props: ITimelineCardProps,
) => {
  const { title, description } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <div className={timelineCardContainerCss}>
      <div className={timelineCardContentLeftCss}>
        <div className={borderCss(theme)} />
        <div className={titleCss}>{title}</div>
      </div>
      <div className={timelineCardContentRightCss}>
        <div className={descriptionCss}>{description}</div>
      </div>
    </div>
  );
};

export default TimelineCard;
