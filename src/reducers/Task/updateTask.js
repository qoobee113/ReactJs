import * as types from './../../constans/actionTypes';

let initState = {
    id : '',
    name: '',
    status : true
} ; //

let myReducer = (state = initState , action) =>{
    switch(action.type){
        case types.EDIT_TASK :
            return action.task;
        case types.RESET_TASK_EDIT:
            return state = {
                ...state,
                id : '',
                name : '',
                status : true
            }
        default : return state;
    }
}

export default myReducer;