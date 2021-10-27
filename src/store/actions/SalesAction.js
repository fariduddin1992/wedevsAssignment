import * as Types from '../types/SalesTypes';

export const getProductList = (productList) => async dispatch => {
    dispatch({type: Types.GET_SALES_PRODUCT_LIST, payload: productList});
}
export const inputAddHandling = (inputName, inputValue) => async dispatch => {
    let data = {
        inputName: inputName,
        inputValue: inputValue,
      };
    dispatch({type: Types.GET_SEARCH_DATA_INPUT, payload: data});
}