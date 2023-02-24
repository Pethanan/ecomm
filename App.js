import React, { useState } from "react";
import "./App.css";
import ShoppingItemsList from "./ShoppingItemsList";
import Cart from "./Cart";

function App() {
  const [isCartShowButtoClicked, setIsCartShowButtoClicked] = useState(false);

  const cartShowHandler = () => {
    setIsCartShowButtoClicked((prev) => !prev);
  };
  return (
    <React.Fragment>
      <ShoppingItemsList cartShowHandler={cartShowHandler} />
      {isCartShowButtoClicked && <Cart></Cart>}
    </React.Fragment>
  );
}

export default App;
