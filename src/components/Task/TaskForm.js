import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as action from './../../actions/index';

class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name : '',
            status : true,            
        };
        this.onSave = this.onSave.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    };
    
    onHandleChange (event) {
        let { target } =  event ;
        let { name, value } = target;
        if(name ==="status"){
            value = target.value === "false" ? false : true;
        }
        this.setState({
            [name] : value
        })
    }
    onSave(event) {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.props.onReset();
        this.props.onCloseForm();
    }
    onHuy =() =>{
        this.props.onReset();
        this.props.onCloseForm();
    }
    render() {
        if(!this.props.isDisplayForm) return '';
        let id = this.state.id ;
        return (
            <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">{ id !== "" ?"Cập nhật" : "Thêm Công việc" }</h3>
            </div>
            <div className="panel-body">
              
              <form onSubmit= { this.onSave }>              
                <div className="form-group">
                  <label> Tên công việc :  </label>
                  <input 
                  type="text" 
                  className="form-control"  
                  name="name" 
                  value = { this.state.name }
                  onChange = { this.onHandleChange }
                  />

                </div>
                <label>Trạng thái</label>
                <select  
                  className="form-control" 
                  name="status" 
                  value = { this.state.status }
                  onChange = { this.onHandleChange }
                >
                  <option value={true} >Kích hoạt</option>
                  <option value={false} >Ẩn</option>
                </select>
                <br/>
                
                <button type="submit" className="btn btn-primary ml-40"> Lưu lại </button> <span></span>
                <button type="button" className="btn btn-primary ml-40" onClick = { this.onHuy}> Hủy </button>
              </form>
              
            </div>
        </div>
        )
    }

    componentDidUpdate(prevProps,prevState){
        let { itemEditing } =  this.props ;
        if(itemEditing && prevState === this.state){
            this.setState({
                id : itemEditing.id,
                name : itemEditing.name,
                status : itemEditing.status 
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.updateTask
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onSaveTask : (task) =>{
            dispatch( action.saveTask(task) )
        },
        onCloseForm : ()=>{
            dispatch(action.closeForm())
        },
        onReset : () =>{
            dispatch(action.resetTaskEdit());
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
