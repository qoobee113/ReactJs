import * as types from './../../constans/actionTypes';

let initState = false ; // default : close form

let myReducer = (state = initState , action) =>{
    switch(action.type){
        case types.TOGGLE_FORM :
            return !state;
        case types.OPEN_FORM :
            return true;
        case types.CLOSE_FORM :
            return false;
        default : return state;
    }
}

export default myReducer;