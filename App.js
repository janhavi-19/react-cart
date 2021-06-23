import{BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import cart from './pages/cart';
import Navigation from './components/Navigation';
const App=()=>{
    return (
     <>
       <Router>
           <Navigation/>
           <Switch>
               <Route path="/" component={Home} exact></Route>  
               <Route path="/Items" component={Items}></Route>       
               <Route path="/cart" component={cart}></Route>               
           </Switch>
        </Router>
     </>
    )
}
export default App;