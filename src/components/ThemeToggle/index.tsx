import * as React from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';

interface IProps {
  toggleTheme: any;
}

const togglerContainer = (theme: any) => css`
  border-radius: 20px;
  padding: 2px;
  border: 1px solid ${theme.border};
  height: 26px;
  width: 50px;
`;

const switcher = (theme: any) => css`
  border-radius: 50px;
  width: 20px;
  height: 20px;
  background-color: ${theme.border};
`;

const ThemeToggle: React.FC<IProps> = (props: IProps) => {
  const theme = React.useContext(ThemeContext);
  return (
    <button
      type="button"
      className={togglerContainer(theme)}
      onClick={() => props.toggleTheme()}
    >
      <div className={switcher(theme)} />
    </button>
  );
};

export default ThemeToggle;
