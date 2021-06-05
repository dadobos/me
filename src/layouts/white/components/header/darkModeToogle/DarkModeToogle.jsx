import React from 'react';
import { makeStyles } from '@material-ui/styles';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';


const useStyles = makeStyles((theme) => ({
 white: {
  color: "#fff",
  marginRight:'1rem'
},
black: {
  color: "#000",
  marginRight:'1rem'
},
}));

const DarkModeToogle = (props) => {
  const classes = useStyles();
  const { darkMode, setDarkMode } = props;

  return (
  <span onClick={() => setDarkMode(!darkMode)}>
    {darkMode ?
    <WbSunnyOutlinedIcon className={classes.white}/> : <NightsStayOutlinedIcon className={classes.black}/>}
  </span>

  );
};

export default DarkModeToogle;
