import { listCart } from './listCart';
import { listProducts } from './listProducts';

import {combineReducers} from "redux"
export const reducer = combineReducers({
    listProducts,
    listCart
})