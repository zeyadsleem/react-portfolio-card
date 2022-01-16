import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <div className="app__container">
        <Header j/>
        <Main />
        <Footer />
      </div>
    </div>
  );
}
