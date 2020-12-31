import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Cashier from './component/Cashier ';
import Dairy from './component/Dairy';
import Departments from './component/Departments';
import Fish from './component/Fish';
import Home from './component/Home';
import Liquor from './component/Liquor';
import Meet from './component/Meet';
import Tobacco from './component/Tobacco';
import Vegetables from './component/Vegetables';

function App() {
  const history = useHistory();
  const [customer, setCustomer] =useState({})
  const [money, setMoney] =useState(0)
  const [cart, setCart] =useState([])

  let newCustomer = (name,gender,money) =>{
    setCustomer({customerName: name, customerGender: gender})
    setMoney( Number(money))
    setCart([])
  }

  let addToCart = (item) =>{
    if(item[0] > money){
      alert('NO MONEY')
    }else{
      setMoney(money-item[0])
      setCart([...cart,item])
    }
  }

  let deleteItem = (i,item) =>{
    setMoney(money + item[0])
    let newList = cart
    newList = cart.filter((it, index) => i !== index)
    setCart(newList)
  }



  return (
      <div className="App">
    <Router>
      <Switch>

        <Route exact path ='/' component={()=>{return(
        <Home newCust = {newCustomer}
        />)}}></Route>

        <Route path ='/departments' component={()=>{return(<Departments/>)}}></Route>
        <Route path ='/dairy' component={()=>{return(<Dairy
        money = {money}
        cart = {cart}
        funcAdd = {addToCart}
        />)}}></Route>
        <Route path ='/meet' component={()=>{return(<Meet
         money = {money}
         cart = {cart}
         funcAdd = {addToCart}
        />)}}></Route>
        <Route path ='/vegetables' component={()=>{return(<Vegetables
         money = {money}
         cart = {cart}
         funcAdd = {addToCart}
        />)}}></Route>
        <Route path ='/fish' component={()=>{return(<Fish
         money = {money}
         cart = {cart}
         funcAdd = {addToCart}
        />)}}></Route>
        <Route path ='/liquor' component={()=>{return(<Liquor
         money = {money}
         cart = {cart}
         funcAdd = {addToCart}
        />)}}></Route>
        <Route path ='/tobacco' component={()=>{return(<Tobacco
        money = {money}
        cart = {cart}
        funcAdd = {addToCart}
        />)}}></Route>
        <Route path ='/cashier' component={()=>{return(<Cashier
        money = {money}
        cart = {cart}
        funcAdd = {addToCart}
        />)}}></Route>
        <Route path ='/cart' component={()=>{return(<Cart
        funcDel = {deleteItem}
        money = {money}
        cart = {cart}
        funcAdd = {addToCart}
         cart = {cart}
        />)}}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
