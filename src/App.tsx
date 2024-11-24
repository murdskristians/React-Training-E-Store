import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import CategoryPage from "./pages/CategoryPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import ProductPage from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import TermsAndConditions from "./pages/TermsAndConditions";
import Cart from "./pages/Cart";
import { Button } from "@mui/material"; 
import { createTheme, ThemeProvider } from "@mui/material/styles"; 
import { CssBaseline } from "@mui/material"; 

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/subcategory" element={<SubcategoryPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        <Button variant="contained" color="primary">
          Hello MUI
        </Button>
      </Router>
    </ThemeProvider>
  );
}

export default App;
