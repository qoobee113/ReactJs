import * as types from './../../constans/actionTypes';

let data = JSON.parse (localStorage.getItem('task'));


let initState = data ? [...data] : [] ;

let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
    return s4() + "-" + s4() + "-" + s4() + "-" + s4() ;
}
let findIndex = (task,id) => {
    let result = -1;
    task.forEach( (element,index) => {
      if(element.id === id ){
        result = index;
      }
    });
    return result;
  }

let myReducer = (state = initState , action) =>{
    let index = -1;
    switch(action.type){
        case types.LIST_ALL :
            return state;
        case types.SAVE_TASK :
            if(action.task.id)
            {
                index = findIndex(state,action.task.id);
                state[index] ={
                ...state[index],
                id : action.task.id,
                name : action.task.name,
                status : action.task.status
                }
            }else{
                let newTask = {
                    id : generateID(),
                    name : action.task.name,
                    status : action.task.status
                }
                state.push(newTask);
            }
            localStorage.setItem('task',JSON.stringify(state));
            return [...state ];
        case types.UPDATE_STATUS_TASK :
            index = findIndex(state,action.id);
            state[index] ={
                ...state[index],
                status : !state[index].status
            }
            localStorage.setItem('task',JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK : 
            index = findIndex(state,action.id)
            state.splice(index,1);
            localStorage.setItem('task',JSON.stringify(state));
            return [...state];
        default : return state;
    }
}

export default myReducer;