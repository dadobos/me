import { RussianGreen, Cultured, Charcoal, White, Platinum } from "../Theme";

const MuiOutlinedInput = {
  root: {
    position: "relative",
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      border: `1px solid ${RussianGreen}`,

      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderColor: RussianGreen,
      },
    },
    // border focused
    "&$focused $notchedOutline": {
      borderColor: RussianGreen,
    },
    "&$disabled $notchedOutline": {
      background: Cultured,
      borderColor: Platinum,
      opacity: 0.8,
      color: Charcoal,
    },
  },
  //border before
  notchedOutline: {
    borderColor: Cultured,
  },
  input: {
    background: White,
    padding: ".5rem",
    borderRadius: "3px",
    fontFamily: "Poppins",
    fontSize: " 14px",
    lineHeight: "19px",
    color: Charcoal,

    "&:disabled": {
      background: Cultured,
      opacity: 0.8,
      color: Charcoal,
    },
    notchedOutline: {
      border: "transparent",
    },
  },

  multiline: {
    padding: ".5rem !important",
    border: "0px",
    margin: 0,
  },
};
export default MuiOutlinedInput;
