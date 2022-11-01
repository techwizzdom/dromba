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
  height: 610px;
  width: 340px;
  cursor: pointer;
`;

const iphoneVideoCss = css`
  position: absolute;
  top: 20px;
  left: 10px;
  border-radius: 24px;
`;

const iphoneupCss = css`
  position: absolute;
  width: 340px;
  z-index: 3;
`;

const iphonedownCss = css`
  position: absolute;
  width: 340px;
  bottom: 0;
  z-index: 3;
`;

const iphoneCoverCss = (hasStarted: boolean) => css`
  position: absolute;
  width: 320px;
  height: 568px;
  top: 20px;
  left: 10px;
  border-radius: 24px;
  z-index: 1;
  cursor: pointer;
  ${hasStarted && 'display: none;'}
`;

const playIconCss = (isVideoPlaying: boolean) => css`
  position: absolute;
  opacity: ${isVideoPlaying ? '0' : '0.9'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 72px;
  background-color: #f0cf1c;
  border-radius: 50%;
  padding: 12px;
  width: 72px;
  z-index: 2;
`;
