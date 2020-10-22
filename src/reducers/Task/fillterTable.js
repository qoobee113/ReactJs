import * as types from './../../constans/actionTypes';

let initState = {
    name : '',
    status : -1 // -1 : tất cả , 
} ; //

let myReducer = (state = initState , action) =>{
    switch(action.type){
        case types.FILLTER_TABLE :
            action.fillter.status = parseInt(action.fillter.status,10);
            return action.fillter;
        default : return state;
    }
}

export default myReducer;