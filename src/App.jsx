import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CatalogPage from "./pages/CanalogPage/CanalogPage.jsx";
// import "./App.css";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
