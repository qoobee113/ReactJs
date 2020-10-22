import React,{ Component, Suspense } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes';
import Loading from './components/Loading/Loading';
import './App.css';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  showCotent =(routes) =>{
    let result = null;
    if(routes.length > 0){
      result = routes.map((route ,index) => {
        return <Route 
                key = {index} 
                path={route.path}
                exact = { route.exact }
                component = { route.main }
                />
      })
    }
    return <Switch>{result}</Switch>
  }
  render()
  {
    return (   
      <Router>
      <Suspense fallback={<Loading/>}>
      <div> 
        <Menu /> 
            { this.showCotent(routes) }            
      </div>
      </Suspense>
      </Router>
      );
  }
}

export default App;
