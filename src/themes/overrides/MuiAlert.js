import { Pomegranate, BrandyPunch, White, Spectra, FruitSalad } from "../Theme";

const MuiAlert = {
  root: {
    fontSize: "16px",
    borderRadius: 0,
  },
  standardError: {
    color: White,
    fontWeight: 300,
    backgroundColor: Pomegranate,
  },
  standardWarning: {
    color: White,
    fontWeight: 300,
    backgroundColor: BrandyPunch,
  },
  standardInfo: {
    color: White,
    fontWeight: 300,
    backgroundColor: Spectra,
  },
  standardSuccess: {
    color: White,
    fontWeight: 300,
    backgroundColor: FruitSalad,
  },
  icon: {
    display: "flex",
    opacity: 1,
    fontsize: "16px",
    marginLeft: "3rem",
    marginRight: "1rem",
  },
  message: {
    padding: "16px 0 8px 0",
  },
};
export default MuiAlert;
