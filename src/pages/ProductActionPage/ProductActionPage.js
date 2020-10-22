import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from './../../actions/index';

class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state ={
            id : null,
            txtName : '',
            txtPrice : '',
            chkbStatus : true
        }
    }

    componentDidMount(){
        let { match } = this.props;
        if(match){
            let { id } = match.params;
            this.props.funcItemEditing(id);              
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props.itemEditing && this.state === prevState){
            let { itemEditing } = this.props
            this.setState({
                id : itemEditing.id,
                txtName : itemEditing.name,
                txtPrice : itemEditing.price,
                chkbStatus : itemEditing.status
            });
        }
    }
    onChange = (e) =>{
        let { target } = e;
        let { name } = target;
        let value = target.type ==='checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onSave = e =>{
        e.preventDefault();
        let { id,txtName,txtPrice,chkbStatus } = this.state;
        let { history } =  this.props ;
        if(id){
            this.props.onUpdateProduct({
                id : id,
                name : txtName,
                price : txtPrice,
                status : chkbStatus
            })
            history.goBack();
        }
        else{
            this.props.onAddProduct(this.state);
            history.goBack();
        }
    }
  render()
  {
    let tittle = this.state.id ? 'Sửa sản phẩm' : 'Thêm sản phẩm';
    return ( 
        <div className ="container" > 
        <div className="row">
            
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                
            </div>
            
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">               
                <form onSubmit = { this.onSave }>
                    <legend>{ tittle }</legend>              
                    <div className="form-group">
                        <label >Tên sản phẩm </label>
                        <input type="text" className="form-control" name ='txtName'
                        value = { this.state.txtName || ''}
                        onChange = { this.onChange }
                        />
                    </div> 
                    <div className="form-group">
                        <label>Giá </label>
                        <input type="number" className="form-control" name="txtPrice" 
                        value = { this.state.txtPrice || ''}
                        onChange = { this.onChange }
                        />
                    </div>     
                    <div className="form-group">
                        <label>Trạng thái </label>                        
                    </div>                    
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="chkbStatus"
                            checked = { this.state.chkbStatus }
                            onChange = { this.onChange }
                            />
                            Còn hàng
                        </label>
                    </div>                                    
                    <button type="submit" className="btn btn-primary mr-10">Lưu lại</button>
                    <Link to="/product-list" className="btn btn-primary"> Trở lại </Link>
                </form>
                </div>
            </div>     
        </div>    
      );
  }
}

const mapStateToProps = (state) =>{
    return{
        itemEditing : state.item
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddProduct :  (product) =>{
            dispatch(action.addProductReq(product))
        },
        funcItemEditing : (id) =>{
            dispatch(action.getProductReq(id))
        },
        onUpdateProduct : (product) =>{
            dispatch(action.updateProductReq(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductActionPage);
