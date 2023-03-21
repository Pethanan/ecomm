import React from "react";
import AddToCartButton from "./AddToCartButton";
import classes from "./ShoppingItemsList.module.css";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 5,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 6,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 7,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 8,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 9,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ShoppingItemsList = (props) => {
  const items = productsArr.map((prod) => (
    <li
      key={prod.id}
      className="d-flex flex-column justify-content-center"
      style={{ textAlign: "center" }}
    >
      <h4 className={classes["item-title"]}>{prod.title} </h4>
      <div className={classes["img-container"]}>
        <img className={classes["item-img"]} src={prod.imageUrl} alt="prod" />
      </div>
      <h4 className={classes["item-amount"]}>${prod.price}</h4>
      <AddToCartButton item={prod}></AddToCartButton>
    </li>
  ));

  return (
    <>
      <div className={classes["shopping-title"]}>THE GENERICS</div>
      <div className={classes.list}>Shopping Items</div>
      <ul className={classes["grid-list"]}>{items}</ul>
    </>
  );
};

export default ShoppingItemsList;
