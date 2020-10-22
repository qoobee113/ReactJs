import React,{ Component } from 'react';
import { Route , Link } from 'react-router-dom';

const menus = [
  {
    name : 'Trang chủ',
    to : '/',
    exact : true
  },
  {
    name : 'Quản lý sản phẩm',
    to : '/product-list',
    exact : false
  },
  {
    name : 'Quản lý công việc',
    to: '/task-list',
    exact : false
  }
];
 const MenuLink = ({ label , to , activeOnlyWhenExact}) =>{
   return <Route
            path = {to}
            exact = { activeOnlyWhenExact }
            children = {({match}) => {
              let active = match ? 'active' : '';
              return (
                <li className= { active }>
                    <Link to ={ to }>
                        {label}
                    </Link>
                </li>
              )
            } }
          />
 }

class Menu extends Component {
  showMenu = (menus) =>{
    let result = null;
    if(menus.length > 0){
      result = menus.map((menu,index) => {
      return(  <MenuLink 
          key ={ index } 
          label ={ menu.name } 
          to ={ menu.to} 
          activeOnlyWhenExact = {menu.exact}
        />) ;
      })
    }
    return result;
  }
  render()
  {
    return (   
        <div className="navbar navbar-default">
          <Link className="navbar-brand" to='/'>Call API</Link>
          <ul className="nav navbar-nav">
            { this.showMenu(menus) }
          </ul>
        </div>        
      );
  }
}

export default Menu;
