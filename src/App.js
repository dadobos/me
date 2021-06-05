import React,{useState,} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider,responsiveFontSizes } from '@material-ui/core/styles';
import theme from './themes';
import Routes from './routes';

export const ThemeContext = React.createContext()


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  const responsiveFontsTheme = responsiveFontSizes(theme);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
    <ThemeProvider theme={responsiveFontsTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes />
      </Router>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
