import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ShopppingPage from "./Routes/ShoppingPage";
import About from "./Routes/About";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<About />}></Route>
    <Route path="/products" element={<ShopppingPage />}></Route>
  </Route>
);
// const router = createBrowserRouter([{ path: "/", element: <ShopppingPage /> }]);

const router = createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
