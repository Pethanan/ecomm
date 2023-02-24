import React from "react";
import classes from "./ShoppingItemsList.module.css";
import { Navbar, Container, Nav, Col, Row, Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
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
            <Button
              as="input"
              type="submit"
              value="Add to Cart"
              className={classes["order-btn"]}
            />
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
            <Button
              as="input"
              type="submit"
              value="Add to Cart"
              className={classes["order-btn"]}
            />
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
            <Button
              as="input"
              type="submit"
              value="Add to Cart"
              className={classes["order-btn"]}
            />
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
            <Button
              as="input"
              type="submit"
              value="Add to Cart"
              className={classes["order-btn"]}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing" className={classes.navs}>
                Pricing
              </Nav.Link>
              <Nav.Link href="#features" className={classes.navs}>
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className={classes.navs}>
                Pricing
              </Nav.Link>
            </Nav>
            <Nav>
              <Button className={classes.navs} onClick={props.cartShowHandler}>
                Cart
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
      <h1 className={classes["shopping-title"]}>THE GENERICS</h1>
      <h2 className={classes.list}>Shopping Items</h2>
      {items}
    </>
  );
};

export default ShoppingItemsList;
