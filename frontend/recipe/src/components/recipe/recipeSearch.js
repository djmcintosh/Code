import * as React from "react";
//import AppBar from '@mui/material/AppBar';
//import Button from '@mui/material/Button';
//import CameraIcon from '@mui/icons-material/PhotoCamera';
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import CssBaseline from '@mui/material/CssBaseline';
//import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
//import Box from '@mui/material/Box';
//import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
//import Container from '@mui/material/Container';
//import Link from '@mui/material/Link';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Autocomplete, TextField } from "@mui/material";

export default function RecipeSearch() {
  const mealType = ["Breakfast", "Lunch", "Dinner"];
  const diet = ["Balanced", "High-Fiber", "High-Protein"];

  return (
    <div>
      <h3>Choose Your Meal</h3>
      <Autocomplete
        options={mealType}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Meal Type" variant="outlined" />
        )}
      />
      <Autocomplete
        options={diet}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Diet" variant="outlined" />
        )}
      />

      <Stack spacing={{ xs: 1, sm: 2 }} direction="column" flexwrap="wrap">
        <TextField
          id="standard-basic"
          label="Enter Recipe"
          variant="standard"
        />
      </Stack>
    </div>
  );
}

/* export default function RecipeSearch () {

const {setMealType, setSearchTerm} = useState ("");
   
    
const createMealType = (e) => {
    setMealType{e.target.value};
};

const createSearchTerm =(e) => {
    setSearchTerm(e.target.value);
};

return (

<container maxWidth="sm">
    <Stack
    sx={{pt: 4}}
    direction="column"
    spacing={2}
    justifyContent="left">

<typography gutterBottom variant="h5" component="h2">
    <h5>Select Meal Type & Search for Recipes</h5></typography>

<inputLable variants="standard" htmlFor="uncontrolled-native">
    Click to Choose Meal type
</inputLable>


<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="meal type"
    value={""}
    label="Recipe"
    onChange={createMealType}
  >
    <option value={""}>Breakfast</option>
    <option value={""}>Lunch</option>
    <option value={""}>Dinner</option>

  </Select>
</FormControl>

<textField id="searchTerm" label="Search Term" variant="standard" onChange={}></textField>
<button variant="contained" onClick={GetRecipes}> Search for Recipes</button>

</Stack>
</container>
);
} */
