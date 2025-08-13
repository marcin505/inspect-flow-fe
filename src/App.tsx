import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { appRoutes } from "@constants/routes";
import { ScrollToTop } from "~/components/ScrollToTop/ScrollToTop";
import theme from "./theme";
import { Container } from "./App.styled";

export const RouteViews = () => {
  return (
    <Container>
      <ToastContainer
        transition={Slide}
        position="top-center"
        closeOnClick
        autoClose={false}
      />
      <Routes>
        {Object.values(appRoutes).map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Container>
  );
};

export const App = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <RouteViews />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
