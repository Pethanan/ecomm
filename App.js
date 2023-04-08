import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import ProductsStore from "./Components/Routes/ProductsStore";
import AuthCtx from "./Store/auth-ctx";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Routes/Login";

const About = lazy(() => import("./Components/Routes/About"));
const Home = lazy(() => import("./Components/Routes/Home"));

const NavbarHeader = lazy(() => import("./Components/NavBar/NavbarHeader"));

function App() {
  // const [cartShow, setCartShow] = useState(false);

  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.showCart.showCart);

  useEffect(() => {
    const sendDatatoDB = async () => {
      try {
        const response = await fetch(
          "https://ecommerce---online-shopping-default-rtdb.firebaseio.com/pethCart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
      } catch (err) {
        console.log(err);
        alert("Sending data to Cart action was failed");
      }
    };
    sendDatatoDB();
  }, [cart]);

  const authCtx = useContext(AuthCtx);
  // const cartShowHandler = () => {
  //   setCartShow(true);
  // };
  // const cartCloseHandler = () => {
  //   setCartShow(false);
  // };

  return (
    <>
      <NavbarHeader></NavbarHeader>
      {showCart && <Cart />}
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={() => <p>...loading...</p>}>
            <Home />
          </Suspense>
        </Route>

        <Route path="/aboutus">
          <Suspense fallback={() => <p>...loading...</p>}>
            <About />
          </Suspense>
        </Route>

        <Route path="/loginpage">
          {!authCtx.isLoggedIn && <Login></Login>}
          {authCtx.isLoggedIn && <Redirect to="/products" />}
        </Route>

        <Route path="/products">
          {authCtx.isLoggedIn && <ProductsStore />}
          {!authCtx.isLoggedIn && <Redirect to="/loginpage" />}
        </Route>

        <Route path="/homepage">
          <Suspense fallback={() => <p>...loading...</p>}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
    </>
  );
}

export default App;
