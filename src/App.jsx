import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Header />
        <Home />
        <Pricing />
        <Testimonials />
        <Footer />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  width: 100%;
`;