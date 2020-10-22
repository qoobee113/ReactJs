import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

class Sort extends Component {

    constructor(props){
        super(props);
        this.state = {
            sort : {
                by : "name",
                value : 1
            }
        }
    }

    onClick(name,value)
    {
        this.setState({
            sort : {
                by : name,
                value : value
            }
        },()=> (this.props.onSort(this.state.sort)))
    }
    render() {
        let { sort } = this.state;
        return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick = { () => this.onClick("name",1) }>
                        <a role="button" href=" #" className = { sort.by === "name" && sort.value === 1 ? "sort-selected" : "" }>
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        Tên A-Z
                                    </span>
                                </a>
                    </li>
                    <li onClick = { () => this.onClick("name",-1) }>
                        <a role="button" href=" #" className = { sort.by === "name" && sort.value === -1 ? "sort-selected" : "" } >
                                    <span className="fa fa-sort-alpha-desc pr-5">
                                        Tên Z-A
                                    </span>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick = { () => this.onClick("status",1) }>
                        <a role="button" href=" #" className = { sort.by === "status" && sort.value === 1 ? "sort-selected" : "" }>Trạng Thái Kích Hoạt</a></li>
                    <li onClick = { () => this.onClick("status",-1) }>
                        <a role="button" href=" #" className = { sort.by === "status" && sort.value === -1 ? "sort-selected" : "" }>Trạng Thái Ẩn</a></li>
                </ul>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {

    }
};
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onSort : (valueSort) =>{
            dispatch(action.sortTask(valueSort))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (Sort);