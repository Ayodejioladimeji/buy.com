import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/details" exact component={Details}/>
          <Route path="/cart" exact component={Cart}/>
          <Route exact component={Default}/>
        </Switch>
        <Modal/>
      </Router>
    </>
  );
}

export default App;
