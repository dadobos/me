import BlueGreen from '../Theme';
import Celadon from '../Theme';
import Cultured from '../Theme';
import Charcoal from '../Theme';

const MuiSelect = {
  root: {
    background: '#FFFFFF',
    padding: '.5rem',
    borderRadius: '3px',
    fontFamily: 'Poppins',
    fontSize: '14px',
    lineHeight: '19px',
    textAlign: 'left',
    color: Charcoal,
    border: `1px solid ${Cultured}`,
    '&:focus': {
      borderRadius: '3px',
      borderColor: 'transparent',
      background: '#FFFFFF',
    },
  },
  select: {
    minWidth: '5.5rem',
    borderRadius: '3px',
    border: `1px solid ${Celadon}`,
    fontSize: '16px',
    lineHeight: '19px',
    '&:focus': {
      borderRadius: '3px',
      borderColor: Celadon,
      background: '#FFFFFF',
    },
  },

  selectMenu: {
    background: '#FFFFFF',
    color: Celadon,
    '&:notchedOutline': {
      borderColor: 'transparent !important',
    },
  },

  outlined: {
    color: `${Charcoal} !important`,
    borderColor: 'transparent',
    fontSize: '14px',
    lineHeight: '19px',
    '&:hover ': {
      borderColor: 'transparent',
      outline: 'none',
    },
    '&:focus': {
      background: '#FFFFFF',
      borderColor: 'transparent',
    },
  },
  iconOutlined: {
    color: BlueGreen,
  },
  icon: {
    color: Celadon,
  },
};

export default MuiSelect;
