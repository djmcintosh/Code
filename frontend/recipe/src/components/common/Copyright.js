import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright({ siteName, siteURL }) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={siteName}>
        {siteName}
      </Link>{" "}
      {new Date().toString()}
      {"."}
    </Typography>
  );
}
