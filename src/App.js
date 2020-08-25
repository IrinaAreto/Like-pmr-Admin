import React from "react";
import "./App.css";
import { PageHeader } from "./components/PageHeader";
import { NavigationRouters } from "./components/NavigationRouters";
import { PageFooter } from "./components/PageFooter";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <header className="header">
          <PageHeader />
        </header>
          <NavigationRouters />
        <footer className="footer">
          <PageFooter />
        </footer>
      </div>
    </div>
  );
}

export default App;
