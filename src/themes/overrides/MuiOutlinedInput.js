import Celadon from '../Theme'
import Cultured from '../Theme'
import Charcoal from '../Theme'
const MuiOutlinedInput = {
  root: {
    position: 'relative',
    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
      border: `1px solid ${Celadon}`,

      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        borderColor: Celadon,
      },
    },
    // border focused
    '&$focused $notchedOutline': {
      borderColor: Celadon,
    },
    '&$disabled $notchedOutline': {
      background: Cultured,
      borderColor: '#E5E5E5',
      opacity: 0.8,
      color: Charcoal,
    
    },
  },
  //border before
  notchedOutline: {
    borderColor: Cultured,
  },
  input: {
    background: '#FFFFFF',
    padding: '.5rem',
    borderRadius: '3px',
    fontFamily: 'Poppins',
    fontSize: ' 14px',
    lineHeight: '19px',
    color: Charcoal,

    '&:disabled': {
      background: Cultured,
      opacity: 0.8,
      color: Charcoal,
    },
    notchedOutline: {
      border: 'transparent',
    },
  },

  multiline: {
    padding: '.5rem !important',
    border: '0px',
    margin: 0,
  },
};
export default MuiOutlinedInput;
