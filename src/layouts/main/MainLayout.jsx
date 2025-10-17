import React from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import FullScreenContainer from "layouts/common/fullScreenContainer";
import BackToTop from "../common/backToTop";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <div id="back-to-top-anchor" />
      <Header />
      <FullScreenContainer>
        {children}
        <BackToTop />
      </FullScreenContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
