import * as types from './../../constans/actionTypes';

let initState = '' ; // default : close form

let myReducer = (state = initState , action) =>{
    switch(action.type){
        case types.SEARCH_TASK :
            return action.keyWord;
        default : return state;
    }
}

export default myReducer;