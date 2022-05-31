import React from 'react';

import {
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Tilt } from './Tilt';

// import { VioletColorWheel, SeaGreenCrayola } from 'themes/Colors';

const MainCard = ({ imageURL, title, description, url }) => {
	const theme = useTheme();
	// const shadowColor =
	// 	theme.palette.mode === 'dark' ? SeaGreenCrayola : VioletColorWheel;
	const options = {
		reverse: true,
		speed: 1200,
		reset: false,
	};

	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			style={{ textDecoration: 'none' }}>
			<Tilt
				// onClick={(e) => handleClick(e)}
				options={options}
				children={
					<Card
						sx={{
							maxWidth: '320px',
							mx: 'auto',
							color: theme.palette.text.secondary,
							backgroundColor: theme.palette.background.paper,
							// '&:hover': {
							// 	transition: 'all .7s ease',
							// 	boxShadow: `1px 1px 20px 10px ${shadowColor}`,
							// },
						}}>
						<CardActionArea>
							<CardMedia
								component='img'
								height='150'
								image={imageURL}
								alt={title}
							/>
							<CardContent color='white'>
								<Typography gutterBottom variant='h6' component='div'>
									{title}
								</Typography>
								<Typography></Typography>
								{{ description } !== '' && (
									<Typography variant='body2'>{description}</Typography>
								)}
							</CardContent>
						</CardActionArea>
					</Card>
				}
				style={{ padding: 0, margin: 0 }}
			/>
		</a>
	);
};

export default MainCard;
