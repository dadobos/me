import { BlueGreen, RussianGreen, Cultured, Charcoal, White } from "../Theme";

const MuiSelect = {
  root: {
    background: White,
    padding: ".5rem",
    borderRadius: "3px",
    fontFamily: "Poppins",
    fontSize: "14px",
    lineHeight: "19px",
    textAlign: "left",
    color: Charcoal,
    border: `1px solid ${Cultured}`,
    "&:focus": {
      borderRadius: "3px",
      borderColor: "transparent",
      background: White,
    },
  },
  select: {
    minWidth: "5.5rem",
    borderRadius: "3px",
    border: `1px solid ${RussianGreen}`,
    fontSize: "16px",
    lineHeight: "19px",
    "&:focus": {
      borderRadius: "3px",
      borderColor: RussianGreen,
      background: White,
    },
  },

  selectMenu: {
    background: White,
    color: RussianGreen,
    "&:notchedOutline": {
      borderColor: "transparent !important",
    },
  },

  outlined: {
    color: `${Charcoal} !important`,
    borderColor: "transparent",
    fontSize: "14px",
    lineHeight: "19px",
    "&:hover ": {
      borderColor: "transparent",
      outline: "none",
    },
    "&:focus": {
      background: White,
      borderColor: "transparent",
    },
  },
  iconOutlined: {
    color: BlueGreen,
  },
  icon: {
    color: RussianGreen,
  },
};

export default MuiSelect;
