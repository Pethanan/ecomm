import React from "react";
import AddToCartButton from "./AddToCartButton";
import classes from "./ShoppingItemsList.module.css";
import { Container, Col, Row } from "react-bootstrap";

const productsArr = [
  {
    id: Math.round(Math.random()),
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: Math.round(Math.random()),
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: Math.round(Math.random()),
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: Math.round(Math.random()),
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ShoppingItemsList = (props) => {
  const items = (
    <Container className={classes["main-container"]}>
      <Row className={classes["row-section"]}>
        <Col>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ textAlign: "center" }}
          >
            <h4 className={classes["item-title"]}>{productsArr[0].title} </h4>
            <div className={classes["img-container"]}>
              <img
                className={classes["item-img"]}
                src={productsArr[0].imageUrl}
                alt="prod"
              />
            </div>
            <h4 className={classes["item-amount"]}>${productsArr[0].price}</h4>
            <AddToCartButton
              item={productsArr[0]}
              addToCartHandler={props.addToCartHandler}
            ></AddToCartButton>
          </div>
        </Col>
        <Col>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ textAlign: "center" }}
          >
            <h4 className={classes["item-title"]}>{productsArr[1].title} </h4>
            <div className={classes["img-container"]}>
              <img
                className={classes["item-img"]}
                src={productsArr[1].imageUrl}
                alt="prod"
              />
            </div>
            <h4 className={classes["item-amount"]}>${productsArr[1].price}</h4>
            <AddToCartButton
              item={productsArr[1]}
              addToCartHandler={props.addToCartHandler}
            ></AddToCartButton>
          </div>
        </Col>
      </Row>
      <Row className={classes["row-section"]}>
        <Col>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ textAlign: "center" }}
          >
            <h4 className={classes["item-title"]}>{productsArr[2].title} </h4>
            <div className={classes["img-container"]}>
              <img
                src={productsArr[2].imageUrl}
                alt="prod"
                className={classes["item-img"]}
              />
            </div>
            <h4 className={classes["item-amount"]}>${productsArr[2].price}</h4>
            <AddToCartButton
              item={productsArr[2]}
              addToCartHandler={props.addToCartHandler}
            ></AddToCartButton>
          </div>
        </Col>
        <Col>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ textAlign: "center" }}
          >
            <h4 className={classes["item-title"]}>{productsArr[3].title} </h4>
            <div className={classes["img-container"]}>
              <img
                src={productsArr[3].imageUrl}
                alt="prod"
                className={classes["item-img"]}
              />
            </div>
            <h4 className={classes["item-amount"]}>${productsArr[3].price}</h4>
            <AddToCartButton
              item={productsArr[3]}
              addToCartHandler={props.addToCartHandler}
            ></AddToCartButton>
          </div>
        </Col>
      </Row>
    </Container>
  );

  return (
    <>
      <div className={classes["shopping-title"]}>THE GENERICS</div>
      <div className={classes.list}>Shopping Items</div>
      {items}
    </>
  );
};

export default ShoppingItemsList;
