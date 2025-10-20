import React from "react";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BlogAccordion = ({ blogContent }) => {
	// normalize blogContent to an array to avoid `map` errors
	const items = Array.isArray(blogContent)
		? blogContent
		: blogContent
		? [blogContent]
		: [];

	if (items.length === 0) return null;

	return items.map(({ title, description }, itemIdx) => {
		const lines = Array.isArray(description)
			? description
			: description
			? [description]
			: [];

		return (
			<Accordion key={title ?? itemIdx}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls={`panel-${itemIdx}-content`}
					id={`panel-${itemIdx}-header`}>
					<Typography variant="h4">{title}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{lines.map((lineContent, idx) => (
						<Typography
							key={`${itemIdx}-${idx}`}
							variant="subtitle1"
							style={{ fontSize: "18px" }}
							paragraph>
							{lineContent}
						</Typography>
					))}
				</AccordionDetails>
			</Accordion>
		);
	});
};

export default BlogAccordion;
