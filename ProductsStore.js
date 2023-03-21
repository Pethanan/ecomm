import React from "react";
import ShoppingItemsList from "../ShoppingMenu/ShoppingItemsList";

function ProductsStore(props) {
  console.log(props.isCartShowButtoClicked);

  return (
    <React.Fragment>
      <ShoppingItemsList cartShowHandler={props.cartShowHandler} />
      {/* <Button> Cart Items</Button> */}
    </React.Fragment>
  );
}

export default ProductsStore;
