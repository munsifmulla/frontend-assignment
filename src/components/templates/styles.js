import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  logo: {
    height: theme.spacing(9),
  },
  appHeader: {
    padding: theme.spacing(1.75),
    background: theme.color,
    boxShadow: theme.shadowLower,
    textAlign: "center",
    position: "sticky",
    top: 0,
    background: theme.palette.white,
    zIndex: 2,
  },
  appBody: {
    maxWidth: theme.spacing(240),
    minHeight: "110vh",
    margin: "0 auto",
    padding: theme.spacing(3),
  },
}));
