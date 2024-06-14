import { useState } from "react";
import "./App.css";
import { Footer } from "./Components/Footer.jsx";
import { Header } from "./Components/Header.jsx";
import { NavBar } from "./Components/NavBar.jsx";
import { Products } from "./Components/Products.jsx";
function App() {
  const [count, setCount] = useState(0);
  let [noOfItems, setNoOfItems] = useState(0);
  return (
    <>
      <NavBar noOfItems={noOfItems}  ></NavBar>
      <Header></Header>
      <Products noOfItems={noOfItems} setNoOfItems={setNoOfItems}></Products>
      <Footer />
    </>
  );
}

export default App;
