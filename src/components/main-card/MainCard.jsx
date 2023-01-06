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

const MainCard = ({ imageURL, title, description, url }) => {
	const theme = useTheme();

	const options = {
		reverse: true,
		speed: 1200,
		easing: 'cubic-bezier(.09,.67,.54,.76)',
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
					}}>
					<CardMedia
						component='img'
						height='150'
						image={imageURL}
						alt={title}
					/>
					{{ description } !== '' && (
						<Typography variant='body2'>{description}</Typography>
					)}
					<CardActionArea>
						<CardContent
							color='white'
							onClick={() => window.open(url, '_blank')}>
							<Typography gutterBottom variant='h6' component='div'>
								{title}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			}
		/>
	);
};

export default MainCard;
