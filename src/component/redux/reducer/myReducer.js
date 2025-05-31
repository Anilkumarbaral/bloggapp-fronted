const initialState = {
  post: {
    content: [], // This will hold the paged response from backend
  },
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        post: action.payload, // Store the whole response object
      };
    // ...other cases...
    default:
      return state;
  }
};

export default myReducer;