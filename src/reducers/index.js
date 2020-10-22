import { combineReducers } from 'redux';
import products from './Product/products';
import item from './Product/itemEditing';
import task from './Task/task';
import isDisplayForm from './Task/isDisplayForm';
import updateTask from './Task/updateTask';
import fillterTable from './Task/fillterTable'
import search from './Task/searchTask';
import sortTask from './Task/sortTask';

const myReducers = combineReducers({
    products : products,
    item : item,
    task : task,
    isDisplayForm : isDisplayForm,
    updateTask : updateTask ,
    fillterTable : fillterTable,
    search : search,
    sort : sortTask
});
export default myReducers;