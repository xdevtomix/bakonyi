import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Breakfast from "./components/Breakfast";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Header />
        <Home />
        <Introduction />
        <About />
        <Pricing />
        <Breakfast />
        <Programs />
        <Testimonials />
        <Gallery />
        <Footer />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  width: 100%;
`;