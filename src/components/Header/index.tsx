import * as React from 'react';
import { useDevice } from '../../hooks/useDevice';
import { DeviceType } from '../../enums/DeviceType';
import HeaderMobile from '../HeaderMobile';
import HeaderDesktop from '../HeaderDesktop';

interface IHeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { toggleTheme } = props;

  const deviceType = useDevice();

  return (
    <>
      {deviceType === DeviceType.Mobile ? (
        <HeaderMobile toggleTheme={toggleTheme} />
      ) : (
        <HeaderDesktop toggleTheme={toggleTheme} />
      )}
    </>
  );
};

export default Header;
