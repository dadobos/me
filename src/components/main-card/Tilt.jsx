import React, { useEffect, useRef } from 'react';

import VanillaTilt from 'vanilla-tilt';

export const Tilt = (props) => {
	const { options, children } = props;
	const tilt = useRef(null);

	useEffect(() => {
		VanillaTilt.init(tilt.current, options);
	}, [options]);

	return <div ref={tilt}>{children}</div>;
};
