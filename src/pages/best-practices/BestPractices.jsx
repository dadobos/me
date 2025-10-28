import React from "react";
import { CSSData, JSData } from "data/Data";
import MainAccordion from "components/main-accordion/MainAccordion";

const BestPractices = () => {
	return (
		<>
			<MainAccordion items={CSSData} title="CSS Only" />
			<MainAccordion items={JSData} title="Vanilla JS/TS" />
		</>
	);
};

export default BestPractices;
