import { ADD_CART } from "../constranins"
type Product = {
    listProducts: []
    product_id: number,
    product_name:string,
    image:string,
    price: number,
    description:string
}
export const add_cart = (product:Product)=> {
    return {
        type:ADD_CART,
        payload:product
    }
}