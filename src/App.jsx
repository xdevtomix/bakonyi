import React, { Suspense } from 'react';
import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
const Introduction = React.lazy(() => import('./components/Introduction'));
const Services = React.lazy(() => import('./components/Services'));
const Pricing = React.lazy(() => import('./components/Pricing'));
/* const Breakfast = React.lazy(() => import('./components/Breakfast')); */
const Programs = React.lazy(() => import('./components/Programs'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Footer = React.lazy(() => import('./components/Footer'));

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