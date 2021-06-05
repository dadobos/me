import React,{useContext} from 'react';
import {IconButton} from '@material-ui/core'
import {ThemeContext} from '../../../../../App'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';

const DarkModeToogle = () => {

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const icon = darkMode ?
  <WbSunnyOutlinedIcon /> : <NightsStayOutlinedIcon />

  return (
    <IconButton
        disableRipple
        onClick={() => setDarkMode(!darkMode)}
  >
    {icon}
  </IconButton>

  );
};

export default DarkModeToogle;
