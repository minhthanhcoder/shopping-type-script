import { ADD_CART } from "../constranins";
 
type Action = {
    type:string,
    payload: any;
};
type Product = {
    listProducts: []
    product_id: number,
    product_name:string,
    image:string,
    price: number,
    description:string
}

//check cart
const findIndexProduct = (id:number, arr:[])=> {
   const producIndex = arr.findIndex((pro:Product) => pro.product_id === id)
   return producIndex
}
const initalState = JSON.parse(localStorage.getItem("carts")) || []
export const listCart = (state = initalState, action: Action) => {
   
    
 switch (action.type) {
    case ADD_CART:
        const indexProduct = findIndexProduct(action.payload.product_id, state)
        console.log(indexProduct);
        if (indexProduct === -1 ) {
        console.log("vào chưa có");

            //nếu chưa thì push vào mảng
            const newArr = [...state,{...action.payload, quantity: 1}];
            //lưu vào local
            localStorage.setItem("carts", JSON.stringify(newArr))
            return newArr
        }else {
        console.log("vào đã có push thêm");
            // nếu sp tồn tại thì tăng số lượng
            const updateCart = [...state]
            updateCart[indexProduct].quantity +=1
            localStorage.setItem("carts", JSON.stringify(updateCart))
            return updateCart;
        }
        default:
            return state

}}