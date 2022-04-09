import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  card: {
    boxShadow: theme.shadowOuter,
    background: theme.palette.white,
  },
  cardContainer: {
    padding: theme.spacing(3),
  },
  details: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  detailsName: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  detailsList: {
    color: theme.palette.textColor,
    fontSize: theme.spacing(2.8),
    "& li": {
      padding: `${theme.spacing(0.65)} ${theme.spacing(0)}`,
    },
  },
  detailsSeller: {
    fontSize: theme.spacing(4),
    fontWeight: 600,
    marginTop: theme.spacing(2),
    "& img": {
      display: "inline-block",
      verticalAlign: "top",
      width: 18,
      marginRight: theme.spacing(2),
    },
  },
  price: {
    display: "inline-block",
    border: "1px solid" + theme.palette.green,
    fontWeight: 800,
    color: theme.palette.green,
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    borderRadius: 4,
    fontSize: theme.spacing(4),
  },
  sliderImage: {
    width: "100%",
    height: "280px",
    position: "relative",
    backgroundColor: theme.palette.textColor,
    "& img": {
      width: "100%",
      height: "100%",
      position: "absolute",
      objectFit: "cover",
    },
    "& video": {
      width: "100%",
      height: "100%",
      position: "absolute",
      objectFit: "cover",
    },
  },
  location: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      borderTop: "1px dashed #9B9999",
      width: "95%",
      left: "2.5%",
      top: theme.spacing(5),
    },
    "& span": {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.white,
      fontWeight: 800,
      fontSize: theme.spacing(3),
    },
  },
  locationDetails: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: theme.spacing(3),
  },
  locationName: {
    maxWidth: theme.spacing(25),
    textAlign: "right",
    wordWrap: "break-word",
  },
  photoGrid: {
    position: "relative",
    width: "100%",
    height: "300px",
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    justifyContent: "center",
  },
}));
