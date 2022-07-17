import React from "react";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./GlobalStyles";
import Body from "./components/Body"

function App() {
  return (
    <>
    <GlobalStyle/>
    <header>
      <Navbar/>
    </header>
    <main>
      <Body/>
    </main>
    </>
  );
}

export default App;
