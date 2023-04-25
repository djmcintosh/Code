import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright({ website, websiteURL }) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={"" + websiteURL + ""}>
        {website}
      </Link>{" "}
      {new Date().toString()}
      {"."}
    </Typography>
  );
}
