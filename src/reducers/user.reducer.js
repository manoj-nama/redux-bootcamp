const initialState = {
  loading: false,
  list: []
};
const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_USER': {
      const list = [...state.list];
      list.push(action.user)
      return { ...state, list };
    }
    case 'FETCH_USER_STARTED': {
      return { ...state, loading: true }
    }
    case 'FETCH_USER_SUCCESS': {
      const list = [...state.list, action.user];
      return { list, loading: false }
    }
    case 'FETCH_USER_FAILED': {
      return { list: [], loading: false, err: action.err }
    }
    default: {
      return state;
    }
  }
};

export default userReducer;