import { combineReducers } from "redux";
import { productReducer, selecetedProductReducer } from "./productReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selecetedProductReducer,
});
