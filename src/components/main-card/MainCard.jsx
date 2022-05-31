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
		easing:  'cubic-bezier(.09,.67,.54,.76)'
		// reset: false,
	};

	return (
		<Tilt
			// style={{ padding: 0, margin: 0 }}
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
					<CardMedia
						component='img'
						height='150'
						image={imageURL}
						alt={title}
					/>
					<CardActionArea>
						<CardContent
							color='white'
							onClick={() => window.open(url, '_blank')}>
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
		/>
	);
};

export default MainCard;
