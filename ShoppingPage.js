import React, { useState } from "react";
import ShoppingItemsList from "../ShoppingMenu/ShoppingItemsList";
import Cart from "../Components/Cart/Cart";
import NavbarHeader from "../Components/NavBar/NavbarHeader";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

function ShopppingPage() {
  const [isCartShowButtoClicked, setIsCartShowButtoClicked] = useState(false);

  const [addedCartItems, setAddedCartItems] = useState(cartElements);

  const cartShowHandler = () => {
    setIsCartShowButtoClicked((prev) => !prev);
  };

  const addToCartHandler = (item) => {
    console.log("clicked");
    setAddedCartItems([...addedCartItems, item]);
    console.log(addedCartItems);
  };

  return (
    <React.Fragment>
      <NavbarHeader cartShowHandler={cartShowHandler}></NavbarHeader>
      <ShoppingItemsList
        cartShowHandler={cartShowHandler}
        addToCartHandler={addToCartHandler}
      />
      {isCartShowButtoClicked && <Cart cartItems={addedCartItems}></Cart>}
    </React.Fragment>
  );
}

export default ShopppingPage;
