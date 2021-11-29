import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Header />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div``;