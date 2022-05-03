import { BlueGreen, Cultured, Charcoal } from '../Theme';

const MuiSwitch = {
	root: {
		overflow: 'visible',
		width: '4rem',
	},
	switchBase: {
		background: 'transparent',
		'&$checked': {
			transform: 'translateX(26px)',
			'&$checked + $track': {
				backgroundColor: Cultured,
				border: 'none',
				boxShadow: 'none',
				width: 36,
			},
			'& $thumb': {
				backgroundColor: BlueGreen,
				boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
			},
		},
	},

	thumb: {
		backgroundColor: Charcoal,
		boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
		width: 20,
		height: 20,
	},
	track: { backgroundColor: Cultured, width: 36 },
	checked: {},
};
export default MuiSwitch;
