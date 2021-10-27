import * as types from '../../types/SalesTypes';

const initialState = {
  productList: [],
  filterProduct:[],
  isLoggedIn: false,
};

const SalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SALES_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case types.GET_SEARCH_DATA_INPUT:
      console.log(`action.payload`, action.payload);

      let searchFilterData=[];

      let searchText = action.payload.inputValue;
      if(searchText.length >0){
        searchFilterData = state.productList.filter((item)=>{
          const filterProduct = item.productName + ''+item.price;
          const itemData = filterProduct.toUpperCase();
          const textData = searchText.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }) 
      }
    
      return {
        ...state,
        filterProduct:searchFilterData
        
      };
    default:
      return state;
  }
};

export default SalesReducer;
