import React, { useState, useMemo, createContext, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { IntlProvider } from "react-intl";

import {
  responsiveFontSizes,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { MainTheme } from "./themes/Theme";
import { CustomRoutes } from "./routes/Routes";

import messages from "./lang/index"; // new import
// import LanguageSwitcher from "./components/LanguageSwitcher"; // new small component

export const AppContext = createContext({
  toggleColorMode: () => {},
  locale: "en",
  setLocale: () => {},
});

const App = () => {
  const [mode, setMode] = useState("dark");

  const [localeState, setLocaleState] = useState(() => {
    try {
      const saved = localStorage.getItem("locale");
      if (saved) return saved;
    } catch (e) {
      /* ignore (SSR or disabled storage) */
    }
    const nav = typeof navigator !== "undefined" ? navigator.language?.split("-")[0] : null;
    return messages[nav] ? nav : "en";
  });

  const setLocale = useCallback((newLocale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("locale", newLocale);
    } catch (e) {
      /* ignore write failures */
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const contextValue = useMemo(
    () => ({ ...colorMode, locale: localeState, setLocale }),
    [colorMode, localeState, setLocale],
  );

  const theme = useMemo(
    () => responsiveFontSizes(createTheme(MainTheme(mode))),
    [mode],
  );

  return (
    <IntlProvider locale={localeState} messages={messages[localeState]} defaultLocale="en">
      <AppContext.Provider value={contextValue}>
        <ThemeProvider theme={theme}>
          {/* quick language switcher; move or style as needed */}
          {/* <LanguageSwitcher locale={localeState} setLocale={setLocale} /> */}
          <Router basename={process.env.PUBLIC_URL}>
            <CustomRoutes />
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </IntlProvider>
  );
};

export default App;