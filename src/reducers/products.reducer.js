const initialStateProducts = {
  loading: false,
  list: []
};
const productsReducer = (state = initialStateProducts, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT': {
      const list = [...state.list];
      list.push(action.product);
      return { ...state, list };
    }
    case 'FETCH': {
      return { ...state, loading: true };
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;