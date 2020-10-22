import React, { Component } from 'react';
import TaskForm from './../../components/Task/TaskForm';
import Control from './../../components/Task/Control';
import TaskList from './../../components/Task/TaskList';
import { connect } from 'react-redux';
import * as action from './../../actions/index';



class TaskPage extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){

    let  { isDisplayForm } = this.props ;

    let addBT = isDisplayForm ? "" : <button 
                                      type="button" 
                                      className="btn btn-primary"
                                      onClick = { this.props.onToggleForm }
                                      >
                                          <span className="fa fa-plus mr-5"></span>
                                         Thêm công việc
                                      </button>;
    return (
      <div className="container">
      <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr/>
      </div>
      <div className="row">
          <div className={ isDisplayForm? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "col-xs-0 col-sm-0 col-md-0 col-lg-0" }>           
          {/* Form */}
            <TaskForm />
          </div>
          <div className={ isDisplayForm? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
            {/* ADD */}
              { addBT }
              <span>{ isDisplayForm ? "" : " " }</span>

              {/* Search - Sort */}            
                {/* Search */}                  
                {/* Sort */}
                <Control
                onSort = { this.onSort }
                />
              {/* List*/}
              <div className="row mt-15">               
                  <TaskList 
                  onFillter = { this.onFillter }
                  />
              </div>
          </div>
      </div>
  </div>
    );
  }
  
}

const mapStateToProps = (state) =>{
  return {
      isDisplayForm : state.isDisplayForm
  }
}
const mapDispatchToProps = (dispatch , props) => {
  return {
      onToggleForm : ()=>{
          dispatch(action.toggleForm());
      },
      onOpenForm : ()=>{
        dispatch(action.openForm());
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (TaskPage);
