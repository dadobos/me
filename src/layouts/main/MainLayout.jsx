import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import FullScreenContainer from 'layouts/common/fullScreenContainer';

const MainLayout = (props) => {
	const { children } = props;

	return (
		<div
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
			}}>
			<Header />
			<FullScreenContainer>{children}</FullScreenContainer>
			<Footer />
		</div>
	);
};

export default MainLayout;
