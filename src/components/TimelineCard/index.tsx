import { css } from 'emotion';
import * as React from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

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

  margin-right: 48px;

  @media ${Media.TabletDown} {
    flex: 0;
    flex-direction: column;
  }

  @media ${Media.Mobile} {
    margin-right: 24px;
  }

  @media ${Media.MobileSmall} {
    margin-right: 12px;
    min-width: 112px;
  }
`;

const borderCss = (theme: Theme) => css`
  flex-grow: 1;

  /* margin: 8px 48px 0 0; */
  margin-top: 8px;
  height: 1px;
  min-width: 150px;

  background-color: ${theme.timelineConnectionLineColor};

  /* @media ${Media.Mobile} {
    margin-right: 24px;
  } */

  @media ${Media.MobileSmall} {
    /* margin-right: 12px; */
    min-width: 112px;
  }
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
