import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

class TaskItem extends Component {


    onUpdateStatus = () =>{
        let { taskElm }= this.props ;
        this.props.onUpdateStatus(taskElm.id);
    }

    OnDelete = () =>{
        let { taskElm }= this.props ;
        this.props.onDeleteItem(taskElm.id);
    }

    onUpdate = () =>{
        let { taskElm }= this.props ;
        this.props.onOpenForm();
        this.props.onEditTask(taskElm);
    }
    render() {
        return (
                <tr>
                    <td>{ this.props.index }</td>
                    <td>{this.props.taskElm.name}</td>
                    <td className="text-center">
                        <span 
                        className={ this.props.taskElm.status ?" label label-success bt" : "label label-danger bt" }
                        onClick = { this.onUpdateStatus }>
                            { this.props.taskElm.status ? "Kích hoạt" : "Ẩn" }
                        </span>
                    </td>
                    <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick = { this.onUpdate }
                        >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                      <span> </span>
                      <button 
                      type="button" 
                      className="btn btn-danger"
                      onClick = { this.OnDelete }
                      >
                        <span className="fa fa-trash mr-5"></span>Xóa
                      </button>
                    </td>
                </tr>
        )
    }
}

const mapStateToProps = (state) =>{
    return {

    }
}

const mapDispatchToProps = (dispatch,props) =>{
    return{
        onUpdateStatus : (id) => {
            dispatch(action.updateStatus(id));
        },
        onDeleteItem : (id) =>{
            dispatch(action.deleteTask(id));
        },
        onOpenForm : ()=>{
            dispatch(action.openForm());
        },
        onEditTask: (task) =>{
            dispatch(action.editTask(task));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TaskItem);