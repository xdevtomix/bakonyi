import React, { Suspense } from 'react';
import styled, { StyleSheetManager } from "styled-components";

// import Header from "./components/Header";
const Header = React.lazy(() => import('./components/Header'));
import Home from "./components/Home";
// import Pricing from "./components/Pricing";
const Pricing = React.lazy(() => import('./components/Pricing'));
// import Breakfast from "./components/Breakfast";
const Breakfast = React.lazy(() => import('./components/Breakfast'));
// import Testimonials from "./components/Testimonials";
const Testimonials = React.lazy(() => import('./components/Testimonials'));
// import Footer from "./components/Footer";
const Footer = React.lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <Home />
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>
        <Suspense fallback={null}>
          <Breakfast />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  width: 100%;
`;