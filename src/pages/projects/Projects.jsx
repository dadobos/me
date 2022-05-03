import React from 'react';
import Box from '@mui/material/Box';

const Projects = () => {
	return (
		<div >
			Projects ...in progress
			<Box>
				{[...new Array(52)]
					.map(
						() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
					)
					.join('\n')}
			</Box>
		</div>
	);
};

export default Projects;
