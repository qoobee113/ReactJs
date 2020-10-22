 import * as Types from '../../constans/actionTypes';
 
 let initState = [];
 let findIndex = (arr,id) =>{
    let result = -1;
    arr.forEach( (element,index) => {
        if(element.id === id ){
            result = index;
        }
    });
    return result;
}
 let myReducer = ( state = initState , action) =>{
     let index = -1;
     let { product } = action;
     switch (action.type){
        case Types.FETCH_PRODUCT :
            state = action.products;
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state];
        case Types.UPDATE_PRODUCT :
            index =findIndex(state,product.id);
            state[index] = {
                ...state[index],
                id : product.id,
                name : product.name,
                price : product.price,
                status : product.status
            }
            return [...state];
        case Types.DELETE_PRODUCT :
            index = findIndex(state,action.id);
            state.splice(index,1);
            return [...state];
         default : return state;
     }
 }
 export default myReducer;