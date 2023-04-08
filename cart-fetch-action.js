import { showCartActions } from "./showCart";
import { cartActions } from "./cart";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ecommerce---online-shopping-default-rtdb.firebaseio.com/pethCart.json"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Could not Fetch");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.retrieveData(cartData));
    } catch (error) {
      dispatch(
        showCartActions.showNotification({
          status: "Error",
          title: "Error",
          message: "Fetch failed",
        })
      );
    }
  };
};
