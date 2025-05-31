const initialState = {
post: [],
}
  

 const myReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'SET_POSTS':
        return {
            ...state,
            post: action.payload,
        };
        case 'ADD_POST':
        return {
            ...state,
            post: [...state.post, action.payload],
        };
        case 'UPDATE_POST':
        return {
            ...state,
            post: state.post.map((p) =>
            p.id === action.payload.id ? action.payload : p
            ),
        };
        case 'DELETE_POST':
        return {
            ...state,
            post: state.post.filter((p) => p.id !== action.payload),
        };
        default:
        return state;
}
}
export default myReducer; 