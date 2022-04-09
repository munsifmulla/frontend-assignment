import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  card: {
    boxShadow: theme.shadowOuterLarge,
  },
  sliderImage: {
    width: "100%",
    height: "280px",
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      position: "absolute",
      objectFit: "cover",
    },
  },
}));
