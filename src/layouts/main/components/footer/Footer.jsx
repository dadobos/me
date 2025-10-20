import React from "react";
import { Grid2, Typography } from "@mui/material";

const Footer = () => {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<Grid2
			container
			sx={{
				marginTop: "auto",
				zIndex: 1300,
				minHeight: "24px",
			}}
			justifyContent="center">
			<Grid2 item>
				<Typography
					inline="true"
					variant="body1"
					fontFamily="Nanum Gothic Coding">
					Dan Dobos &copy; {getCurrentYear()}
				</Typography>
			</Grid2>
		</Grid2>
	);
};

export default Footer;
