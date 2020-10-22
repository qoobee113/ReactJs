import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

class Search extends Component {

    constructor(props){
        super(props);
        this.state= {
            keywWord : ""
        };
    }

    onChange = (event) =>{
        let { target } = event;
        let { name, value } = target;
        this.setState({
            [name] : value
        })
    }

    onSearch = ()=>{
        this.props.onSearch(this.state.keywWord);
        //console.log(this.state);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Nhập từ khóa..." 
                name ="keywWord"
                value = { this.state.keywWord }
                onChange = { this.onChange }
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick = { this.onSearch }>
                <span className="fa fa-search mr-5"></span>Tìm
                </button>
                </span>
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
        onSearch : (keyWord) =>{
            dispatch(action.searchTask(keyWord))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (Search);