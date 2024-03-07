import "./Style/App.css";
import React, { Component, Suspense, lazy } from "react";
// import { RootPage } from "./pages/index";
import { BrowserRouter as Router } from "react-router-dom";

const RootPage = lazy(() => import("./pages"));

class App extends Component {

  render(){
    return (
      <Router>
        <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
          <RootPage />
        </Suspense>
      </Router>
    );
  }
}

export default App;
