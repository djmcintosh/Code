import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../common/Header";
import Footer from "../common/Footer";
import RecipeSearch from "../recipe/recipeSearch";

const theme = createTheme();
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
      <RecipeSearch />
      <Footer />
    </ThemeProvider>
  );
}
