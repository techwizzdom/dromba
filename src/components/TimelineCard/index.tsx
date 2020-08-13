import { css } from 'emotion';
import * as React from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';
import { Media } from '../../enums/Media';

interface ITimelineCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
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
  align-items: flex-start;

  @media ${Media.TabletDown} {
    flex: 0;
    flex-direction: column;
  }
`;

const borderCss = (theme: any) => css`
  flex-grow: 1;

  margin: 8px 48px 0 0;
  height: 1px;
  min-width: 144px;

  background-color: ${theme.timelineConnectionLineColor};
`;

const timelineCardContentRightCss = css`
  flex: 1;
`;

const titleWrapperCss = css`
  display: flex;
  flex-direction: column;

  @media ${Media.TabletDown} {
    margin-top: 16px;
  }
`;

const titleCss = css`
  font-weight: 800;
`;

const subtitleCss = css`
  font-size: 13px;
  font-weight: 500;
`;

const descriptionCss = css`
  margin-left: 48px;

  @media ${Media.Mobile} {
    margin-left: 0;
  }
`;

const TimelineCard: React.FC<ITimelineCardProps> = (
  props: ITimelineCardProps,
) => {
  const { title, subtitle, children } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <div className={timelineCardContainerCss}>
      <div className={timelineCardContentLeftCss}>
        <div className={borderCss(theme)} />
        <div className={titleWrapperCss}>
          <div className={titleCss}>{title}</div>
          <div className={subtitleCss}>{subtitle}</div>
        </div>
      </div>
      <div className={timelineCardContentRightCss}>
        <div className={descriptionCss}>{children}</div>
      </div>
    </div>
  );
};

export default TimelineCard;
