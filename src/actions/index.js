import * as types from './../constans/actionTypes';
import callAPI from './../utills/apiCaller';

export const actFetchProductRequest = () =>{
    return (dispatch) =>{
        return callAPI('products','GET',null).then(res => {
            dispatch(actFetchProduct(res.data));
        }).catch(err=>{
            console.log(err);
        })
    }
};
export const actFetchProduct = (products) =>{
    return {
        type : types.FETCH_PRODUCT,
        products
    }
}
//Delete
export const actDeleteProductRequest = (id) =>{
    return (dispatch) =>{
        return callAPI(`products/${id}`,'DELETE',null).then(res => {
            if(res)
            {
                dispatch(actDeleteProduct(res.data.id));
            }
        }).catch(err=>{
            console.log(err);
        })
    }
};

export const actDeleteProduct = (id) =>{
    return {
        type : types.DELETE_PRODUCT,
        id
    }
}

//Add
export const addProduct = (product) =>{
    return {
        type : types.ADD_PRODUCT,
        product
    }
}

export const addProductReq = (product) =>{
    return (dispatch) =>{
        return callAPI(`products/`,'POST',{
            name : product.txtName,
            price : product.txtPrice,
            status : product.chkbStatus
        }).then(res => {
            if(res)
            {
                dispatch(addProduct(res.data));
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}
//Edit product to save
export const getProductReq = (id) =>{
    return (dispatch) =>{
        return callAPI(`products/${id}`,'GET',null).then(res => {
            if(res)
            {
                dispatch(getProduct(res.data));
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const getProduct = (product) =>{
    return {
        type : types.EDIT_PRODUCT,
        product
    }
} 

//update item
export const updateProduct = (product) => {
    return {
        type : types.UPDATE_PRODUCT,
        product

    }
}

export const updateProductReq = (product) => {
    return (dispatch) =>{
        return callAPI(`products/${product.id}`,'PUT',product).then(res => {
            if(res)
            {
                console.log(res.data);
                dispatch(updateProduct(res.data));
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}

//Task - list
export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}

export const saveTask = (task) =>{
    return {
        type : types.SAVE_TASK,
        task : task
    }
}

export const toggleForm = () =>{
    return {
        type : types.TOGGLE_FORM
    }
}
export const openForm = () =>{
    return {
        type : types.OPEN_FORM
    }
}
export const closeForm = () =>{
    return {
        type : types.CLOSE_FORM
    }
}

export const updateStatus = (id) =>{
    return {
        type :  types.UPDATE_STATUS_TASK,
        id : id
    }
}
export const deleteTask = (id) =>{
    return {
        type :  types.DELETE_TASK,
        id : id
    }
}
export const editTask = (task) =>{
    return {
        type : types.EDIT_TASK,
        task : task
    }
}

export const resetTaskEdit = () =>{
    return {
        type : types.RESET_TASK_EDIT
    }
}

export const fillterTable = (fillter) =>{
    return {
        type : types.FILLTER_TABLE,
        fillter : fillter
    }
}

export const searchTask = (keyWord) =>{
    return {
        type : types.SEARCH_TASK,
        keyWord : keyWord
    }
}
export const sortTask = (valueSearch) =>{
    return {
        type : types.SORT_TASK,
        sort : valueSearch
    }

}