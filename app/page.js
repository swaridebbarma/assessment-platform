import Header from "./Header.js";
import Portal from "./Portal.js";

import Footer from "./Footer.js";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Portal />
        <Footer />
      </div>

    </>
  );
};
