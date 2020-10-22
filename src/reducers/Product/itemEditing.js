import * as Types from '../../constans/actionTypes';

let initState = {
    id:'',
    name : '',
    price : '',
    status : true
};

const myReducer = (state = initState , action) =>{
    switch (action.type){
        case Types.EDIT_PRODUCT:
            state = action.product;
            return {...state};
        default: return state;
    }
}

export default myReducer;
