import React from "react";
import { Grid2, Typography, Divider } from "@mui/material";
import About from "../about";
import Blog from "../blog";
import BestPractices from "../best-practices";
import Projects from "../projects";
import { useIntl } from "react-intl";

const Home = () => {
	const t = useIntl();
	return (
		<Grid2 container direction="column" alignItems="stretch">
			<Grid2 container direction="column">
				<Grid2>
					<Typography
						variant="h4"
						component="h2"
						marginTop={4}
						marginBottom={2}>
						{t.formatMessage({
							id: "navigation.projects",
							defaultMessage: "Projects",
						})}
					</Typography>
					<Divider variant="inset" />
				</Grid2>
				<Grid2>
					<Projects />
				</Grid2>
			</Grid2>

			<Grid2 container direction="column">
				<Grid2>
					<Typography
						variant="h4"
						component="h2"
						marginTop={4}
						marginBottom={2}>
						{t.formatMessage({
							id: "navigation.best-practices",
							defaultMessage: "Best Practices",
						})}
					</Typography>
					<Divider variant="inset" />
				</Grid2>
				<Grid2>
					<BestPractices />
				</Grid2>
			</Grid2>

			<Grid2 container direction="column">
				<Grid2>
					<Typography
						variant="h4"
						component="h2"
						marginTop={4}
						marginBottom={2}>
						{t.formatMessage({
							id: "navigation.blog",
							defaultMessage: "Blog",
						})}
					</Typography>
					<Divider variant="inset" />
				</Grid2>
				<Grid2>
					<Blog />
				</Grid2>
			</Grid2>

			<Grid2 container justifyContent="flex-end">
				<Grid2>
					<About />
				</Grid2>
			</Grid2>
		</Grid2>
	);
};

export default Home;
