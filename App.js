import "./App.css";
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

function App() {
  const productsList = (
    <Container style={{ marginTop: "70px" }}>
      <Row style={{ marginBottom: "50px" }}>
        <Col>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ textAlign: "center" }}
          >
            <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
              ${productsArr[0].title}{" "}
            </h4>
            <div style={{ textAlign: "center" }}>
              <img
                src={productsArr[0].imageUrl}
                alt="prod"
                style={{ width: "55%", height: "auto" }}
              />
            </div>
            <h4 style={{ marginTop: "30px" }}>${productsArr[0].price}</h4>
            <Button as="input" type="submit" value="Add to Cart" />
          </div>
        </Col>
        <Col>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ textAlign: "center" }}
          >
            <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
              ${productsArr[1].title}{" "}
            </h4>
            <div style={{ textAlign: "center" }}>
              <img
                src={productsArr[1].imageUrl}
                alt="prod"
                style={{ width: "55%", height: "auto" }}
              />
            </div>
            <h4 style={{ marginTop: "30px" }}>${productsArr[1].price}</h4>
            <Button as="input" type="submit" value="Add to Cart" />
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "50px" }}>
        <Col>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ textAlign: "center" }}
          >
            <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
              ${productsArr[2].title}{" "}
            </h4>
            <div style={{ textAlign: "center" }}>
              <img
                src={productsArr[2].imageUrl}
                alt="prod"
                style={{ width: "55%", height: "auto" }}
              />
            </div>
            <h4 style={{ marginTop: "30px" }}>${productsArr[2].price}</h4>
            <Button as="input" type="submit" value="Add to Cart" />
          </div>
        </Col>
        <Col>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ textAlign: "center" }}
          >
            <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
              ${productsArr[3].title}{" "}
            </h4>
            <div style={{ textAlign: "center" }}>
              <img
                src={productsArr[3].imageUrl}
                alt="prod"
                style={{ width: "55%", height: "auto" }}
              />
            </div>
            <h4 style={{ marginTop: "30px" }}>${productsArr[3].price}</h4>
            <Button as="input" type="submit" value="Add to Cart" />
          </div>
        </Col>
      </Row>
    </Container>
  );

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Store
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h1
        style={{
          textAlign: "center",
          padding: "40px 0",
          backgroundColor: "black",
          color: "white",
        }}
      >
        SHOPPING ITEMS
      </h1>

      <>{productsList}</>
    </>
  );
}

export default App;
