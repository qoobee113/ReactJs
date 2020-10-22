import * as types from './../../constans/actionTypes';

let initState = {
    by : "name",
    value : -1
} ;

let myReducer = (state = initState , action) =>{
    switch(action.type){
        case types.SORT_TASK :
            state.by = action.sort.by;
            state.value = parseInt(action.sort.value,10)
            return { ...state };
        default : return state;
    }
}

export default myReducer;