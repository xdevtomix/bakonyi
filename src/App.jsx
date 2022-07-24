import { Suspense, lazy } from 'preact/compat';
import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
const Introduction = lazy(() => import('./components/Introduction'));
const Services = lazy(() => import('./components/Services'));
const Pricing = lazy(() => import('./components/Pricing'));
/* const Breakfast = lazy(() => import('./components/Breakfast')); */
const Programs = lazy(() => import('./components/Programs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Gallery = lazy(() => import('./components/Gallery'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Header />
        <Home />
        <Suspense>
          <Introduction />
          <Services />
          <Pricing />
          {/* <Breakfast /> */}
          <Programs />
          <Testimonials />
          <Gallery />
          <Footer />
        </Suspense>
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  width: 100%;
`;