import * as React from 'react';
import { useDevice } from '../../hooks/useDevice';

import { DeviceType } from '../../enums/DeviceType';

import HeaderMobile from '../HeaderMobile';
import HeaderDesktop, { ILogoDiving } from '../HeaderDesktop';

interface IHeaderProps {
  toggleTheme: () => void;
  isLogoDiving: ILogoDiving;
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { toggleTheme, isLogoDiving } = props;

  const deviceType = useDevice();

  return (
    <>
      {deviceType === DeviceType.Mobile ? (
        <HeaderMobile toggleTheme={toggleTheme} isLogoDiving={isLogoDiving} />
      ) : (
        <HeaderDesktop toggleTheme={toggleTheme} isLogoDiving={isLogoDiving} />
      )}
    </>
  );
};

export default Header;
