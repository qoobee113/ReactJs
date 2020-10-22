import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

class TaskList extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : "",
            status : -1 // -1 : all, kích hoạt : 1 , ẩn : 0 
        };
    }

    onChange = (event) =>{
        let { target } = event;
        let { name , value } = target;
        this.setState({
            [name] : value
        }, () => { this.props.onFillterTable(this.state) });          
    }

    render() {
        let { task,fillterTable,keyWord,sort } = this.props;
        if(fillterTable){
            if(fillterTable.name){
              task = task.filter((task) => {
                return task.name.toLowerCase().indexOf(fillterTable.name) !== -1;
              })
            }
            if(fillterTable.status !==null && fillterTable.status !== undefined ){
                task = task.filter((task) =>{
                if(fillterTable.status === -1){
                  return task;
                }else{
                  return task.status === (fillterTable.status === 1 ? true : false);
                }
              })
            }
          }
    //Tìm kiếm
    if(keyWord !== null && keyWord !== undefined && keyWord !== '')
    {
      task = task.filter((task) => {
        return task.name.toLowerCase().indexOf(keyWord) !== -1;
      })
    }
    //Sort 
    if(sort.by === "name"){
      task.sort((a,b) =>{
        if(a.name > b.name) return sort.value;
        else if (a.name < b.name ) return -sort.value;
        else return 0;
      });
    }else{
      task.sort((a,b) =>{
        if(a.status > b.status) return -sort.value;
        else if (a.name < b.name ) return sort.value;
        else return 0;
      })
    }
        let elmTask = task.map((elm,index) =>{
            return <TaskItem 
                        taskElm = { elm } 
                        key = { elm.id } 
                        index = { index + 1 } 
                    />
        });
        //Lọc dữ liệu
        let { name , status } = this.state;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <table className="table table-bordered table-hover">
                          <thead>
                              <tr>
                                  <th className="text-center">STT</th>
                                  <th className="text-center">Tên</th>
                                  <th className="text-center">Trạng Thái</th>
                                  <th className="text-center">Hành Động</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td></td>
                                  <td>
                                      <input 
                                      type="text" 
                                      className="form-control" 
                                      name = "name"
                                      value = { name }
                                      onChange = { this.onChange }
                                      />
                                  </td>
                                  <td>
                                      <select 
                                      className="form-control" 
                                      name = "status"
                                      value = {status}
                                      onChange = { this.onChange }
                                      >
                                          <option value="-1">Tất Cả</option>
                                          <option value="0">Ẩn</option>
                                          <option value="1">Kích Hoạt</option>
                                      </select>
                                  </td>
                                  <td></td>
                              </tr>
                              {/* List Item */}
                              { elmTask }
                          </tbody>
                      </table>
                  </div>
        )
    }
    componentDidUpdate(prevProps,prevState){
        
    }
}
const mapStateToProps = (state) =>{
    return {
        task : state.task,
        fillterTable : state.fillterTable,
        keyWord : state.search,
        sort : state.sort
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onFillterTable : (fillter) =>{
            dispatch(action.fillterTable(fillter));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);