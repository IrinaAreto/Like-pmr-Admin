import React from "react";
import styles from "./App.module.css";
import { PageHeader } from "./components/Header/PageHeader";
import { NavigationRouters } from "./components/Navigation/NavigationRouters";
import { PageFooter } from "./components/Footer/PageFooter";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.layout}>
        <header className={styles.header}>
          <PageHeader />
        </header>
          <NavigationRouters />
        <footer className={styles.footer}>
          <PageFooter />
        </footer>
      </div>
    </div>
  );
}

export default App;
