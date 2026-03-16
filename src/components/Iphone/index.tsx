import React, { useState, useRef } from 'react';
import { css } from 'emotion';

import iphoneup from '../../assets/images/iphoneup.png';
import iphonedown from '../../assets/images/iphonedown.png';
import playIcon from '../../assets/images/play-icon.png';

interface IProps {
  video: string;
  cover: string;
  height?: number;
}

export function Iphone(props: IProps) {
  const { video, cover, height } = props;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
        setHasStarted(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <div className={iphoneContentCss} onClick={() => onVideoClick()}>
      <video
        ref={videoRef}
        className={iphoneVideoCss}
        width="320"
        height={height || undefined}
        src={video}
      />
      <img
        src={iphoneup}
        className={iphoneupCss}
        alt="Top part of iPhone mockup"
      />
      <img
        src={iphonedown}
        className={iphonedownCss}
        alt="Bottom part of iPhone mockup"
      />
      <img
        src={cover}
        className={iphoneCoverCss(hasStarted)}
        alt="Cover of iPhone mockup"
      />
      <img
        src={playIcon}
        className={playIconCss(isVideoPlaying)}
        alt="Play button"
      />
    </div>
  );
}

const iphoneContentCss = css`
  position: relative;
  height: 620px;
  width: 352px;
  border-radius: 36px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(239, 243, 255, 0.72) 100%
  );
  box-shadow: 0 18px 45px rgba(7, 15, 42, 0.18);
  cursor: pointer;
`;

const iphoneVideoCss = css`
  position: absolute;
  top: 28px;
  left: 16px;
  border-radius: 24px;
`;

const iphoneupCss = css`
  position: absolute;
  width: 340px;
  left: 6px;
  top: 6px;
  z-index: 3;
`;

const iphonedownCss = css`
  position: absolute;
  width: 340px;
  bottom: 6px;
  left: 6px;
  z-index: 3;
`;

const iphoneCoverCss = (hasStarted: boolean) => css`
  position: absolute;
  width: 320px;
  height: 568px;
  top: 28px;
  left: 16px;
  border-radius: 24px;
  z-index: 1;
  cursor: pointer;
  ${hasStarted && 'display: none;'}
`;

const playIconCss = (isVideoPlaying: boolean) => css`
  position: absolute;
  opacity: ${isVideoPlaying ? '0' : '0.9'};
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 72px;
  background: linear-gradient(135deg, #6f5cff 0%, #4ad8ff 100%);
  border-radius: 50%;
  padding: 12px;
  width: 72px;
  box-shadow: 0 10px 30px rgba(74, 216, 255, 0.38);
  z-index: 2;
`;
