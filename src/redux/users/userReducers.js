export const GET_DATA = "GET_DATA"


const userReducer = (state = [], action) => {
    switch(action.type){
        case GET_DATA:
            return action.payload;
        default:
            return state;
    }
    

};

export default userReducer;