import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const About = () => {
	const theme = useTheme();

	return (
		<Container id='about'>
			<Grid
				container
				direction='row'
				alignItems='stretch'
				justifyContent='flex-end'>
				<div
					style={{
						minHeight: '70vh',
						display: 'flex',
						alignItems: 'flex-end',
					}}>
					<Grid
						container
						direction='column'
						alignItems='flex-end'
						justifyContent='flex-end'
						spacing={3}>
						<Grid item>
							<Typography variant='h4' align='right' inline='true'>
								Software Developer
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='h1'
								gutterBottom
								inline='true'
								sx={{
									fontFamily: 'Chilanka',
									textTransform: 'uppercase',
									letterSpacing: '2rem',
									textAlign: 'left',
									[theme.breakpoints.down('md')]: {
										textAlign: 'right',
										letterSpacing: '1rem',
									},
								}}>
								Dan Dobos
							</Typography>
						</Grid>

						<Grid item>
							<Typography align='right' inline='true' variant='h6'>
								Characterized by the desire of understanding and implementing
								technological innovations.
							</Typography>
						</Grid>
						
						<Grid item>
							<Typography align='right' inline='true'>
								Contact
							</Typography>
							<Link
								variant='h6'
								href='mailto:danandreidobos@gmail.com'
								target='_blank'
								color='inherit'>
								danandreidobos@gmail.com
							</Link>
						</Grid>
					</Grid>
				</div>
			</Grid>
		</Container>
	);
};

export default About;
