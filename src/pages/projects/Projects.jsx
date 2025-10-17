import React from "react";
import {
  // AngularData,
  ReactData,
  WebsitesData,
  VueData,
  GoData,
  JavaData,
} from "data/Data";
import MainAccordion from "components/main-accordion/MainAccordion";

const Projects = () => {
  return (
    <>
      {/* <MainAccordion items={AngularData} title='Angular' /> */}
      <MainAccordion items={ReactData} title="React" />
      <MainAccordion items={WebsitesData} title="HTML" />
      <MainAccordion items={VueData} title="Vue" />
      <MainAccordion items={GoData} title="Golang" />
      <MainAccordion items={JavaData} title="Java" />
    </>
  );
};

export default Projects;
