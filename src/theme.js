import { createTheme } from "@mui/material/styles";

const animall = createTheme({
  spacing: 5,
  palette: {
    white: "#fff",
    textColor: "#4E4C4C",
    blue: "#1976d2",
    green: "#009688",
  },
  shadowOuter: "0px 0px 5px rgba(0,0,0,0.25)",
  shadowOuterLarge: "0 8px 40px -12px rgba(0,0,0,0.3)",
  shadowLower: "3px 0px 5px rgba(0,0,0,0.25)",
});

export default animall;
