import Header from "./Header.js";
import Portal from "./Portal.js";

import Footer from "./Footer.js";
import "./globals.css";
// import styles from "./page.module.css";


export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Portal />
      </div>
      <Footer />
    </>
  );
};
