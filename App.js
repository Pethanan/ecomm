import React, { useContext } from "react";
import ProductsStore from "./Components/Routes/ProductsStore";
import About from "./Components/Routes/About";
import Home from "./Components/Routes/Home";
import Login from "./Components/Routes/Login";
import AuthCtx from "./Store/auth-ctx";
import { Route, Redirect, Switch } from "react-router-dom";
function App() {
  const authCtx = useContext(AuthCtx);

  return (
    <Switch>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/login" element={<Login />}>
        {!authCtx.isLoggedIn && <Login></Login>}
        {authCtx.isLoggedIn && <Redirect to="/Products" />}
      </Route>

      <Route path="/Products">
        {authCtx.isLoggedIn && <ProductsStore />}
        {!authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>

      <Route path="/index">
        <Home />
      </Route>

      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
