import { ADD_CART } from "../constranins";
import products from "../data/listProducts.json"

export const listProducts = (state = products, action: unknown) => {
console.log(action);

return state;
}