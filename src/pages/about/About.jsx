import React from "react";
import { Container, Grid2, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const About = () => {
	const theme = useTheme();

	return (
		<Container id="about">
			<Grid2
				container
				direction="row"
				alignItems="stretch"
				justifyContent="flex-end">
				<div
					style={{
						minHeight: "70vh",
						display: "flex",
						alignItems: "flex-end",
					}}>
					<Grid2
						container
						direction="column"
						alignItems="flex-end"
						justifyContent="flex-end"
						spacing={3}>
						<Grid2>
							<Typography align="right" inline="true" sx={{ fontSize: "32px" }}>
								Software Developer
							</Typography>
						</Grid2>
						<Grid2>
							<Typography
								variant="h1"
								gutterBottom
								inline="true"
								sx={{
									fontFamily: "Chilanka",
									textTransform: "uppercase",
									letterSpacing: "2rem",
									textAlign: "left",
									[theme.breakpoints.down("md")]: {
										textAlign: "right",
										letterSpacing: "1rem",
									},
								}}>
								Dan Dobos
							</Typography>
						</Grid2>

						<Grid2>
							<Typography align="right" inline="true" sx={{ fontSize: "22px" }}>
								Characterized by the desire of understanding and implementing
								technological innovations.
							</Typography>
						</Grid2>

						<Grid2>
							<Typography align="right" inline="true">
								Contact
							</Typography>
							<Link
								variant="h6"
								href="mailto:danandreidobos@gmail.com"
								target="_blank"
								color="inherit">
								danandreidobos@gmail.com
							</Link>
						</Grid2>
					</Grid2>
				</div>
			</Grid2>
		</Container>
	);
};

export default About;
