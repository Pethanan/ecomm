import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ProductsStore from "./Components/Routes/ProductsStore";
import About from "./Components/Routes/About";
import Home from "./Components/Routes/Home";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/Products" element={<ProductsStore />}></Route>
    <Route path="/index" element={<Home />}></Route>
    <Route path="/" element={<Home />}></Route>
  </Route>
);
// const router = createBrowserRouter([{ path: "/", element: <ShopppingPage /> }]);

const router = createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
