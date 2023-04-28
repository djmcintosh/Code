import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function recipe({ imageURL, label, calories, cookTime }) {
  return (
    <Grid item key={Card} xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={imageURL}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Dish Name: {label}
          </Typography>
          <Typography>
            <ul>
              <li>Calories: {calories} </li>
              <li>Cookine Time: {cookTime} </li>
            </ul>
          </Typography>
          Ingredients: API call to get "ingredients"
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
