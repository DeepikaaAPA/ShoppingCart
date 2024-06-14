import { useState } from "react";
import "./App.css";
import { Footer } from "./Components/Footer.jsx";
import { Header } from "./Components/Header.jsx";
import { NavBar } from "./Components/NavBar.jsx";
import { Products } from "./Components/Products.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Products></Products>
      <Footer />
    </>
  );
}

export default App;
