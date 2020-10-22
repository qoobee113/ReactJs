import React,{ Component,lazy } from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions/index';
import { Link } from 'react-router-dom';
const Productlist = lazy(() => import('./../../components/Productlist/Productlist'));
const ProductItem = lazy(() => import('./../../components/ProductItem/ProductItem'));


class ProductListPage extends Component {

    componentDidMount(){
        this.props.fetchOnProduct();      
    }
    onDelete = (id) =>{
        this.props.onDeleteProduct(id);
    }

    showProduct = (products) =>{
        let result = null;
        if(products.length > 0){
            result = products.map((product,index) => {
                return <ProductItem
                        key = {index}
                        product = { product }
                        index = { index }
                        onDelete = { this.onDelete }
                        />
            })
        }
        return result;
    }

  render()
  {
      let { products } = this.props ;
    return ( 
        <div className = "container">
            <div className="text-center">
                <h1>Danh sách sản phẩm</h1>
                <hr/>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">     
                  <Link to="/product/add" className="btn btn-info mb-10">Thêm sản phẩm</Link> 
                    <Productlist>      
                    {
                        this.showProduct(products)
                    }
                    </Productlist>                               
                </div>
            </div>    
        </div>    
      );
  }
}
const mapStateToProps = (state) =>{
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        fetchOnProduct : () =>{
            dispatch(action.actFetchProductRequest());
        },
        onDeleteProduct : (id) =>{
            dispatch(action.actDeleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductListPage);
