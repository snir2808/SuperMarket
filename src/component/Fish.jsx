import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import caviar from './../icons/Fish/caviar.svg'
import fishegg from './../icons/Fish/fish egg.svg'
import fish from './../icons/Fish/fish.svg'
import salmon from './../icons/Fish/salmon.svg'
import sashimi from './../icons/Fish/sashimi.svg'
import tuna from './../icons/Fish/tuna.svg'
import shoppingcart from './../icons/other/shopping-cart.svg'
import moneybag from './../icons/other/money-bag.svg'


export default function Fish(props) {

    var Icaviar = [12,'caviar'];
    var Ifishegg = [15,'fishegg']
    var Ifish = [7,'fish']
    var Isalmon = [5,'salmon']
    var Isashimi = [6,'sashimi']
    var Ituna = [25,'tuna']

    const imageClick = (price) => {
        props.funcAdd(price)
      } 


    return (
        <div>
        <h2>Fish</h2>
        <p className='money'>
            <img src={moneybag} alt=""/><br/>
            <span>{props.money}$</span>
            </p>
            <p  className='p_shop'>
                <Link to ='/cart'> <img src={shoppingcart} alt=""/><br/></Link>
            <span>{props.cart.length}</span>
            </p>
        <div className='meet_bg'>
            <div className='meet1'>

            <p><img onClick={() => imageClick(Icaviar)} src={caviar}/><br/><span>caviar 12$</span></p>
            <p><img onClick={() => imageClick(Ifishegg)} src={fishegg}/><br/><span>fish egg 15$</span></p>

            </div>

            <div  className='meet2_2'>

            <p><img onClick={() => imageClick(Ifish)} src={fish}/><br/><span>peter's fish 7$</span></p>
            <p> <img onClick={() => imageClick(Isalmon)} src={salmon}/><br/><span>salmon 5$</span></p>

            </div>

            <div className='meet3'>

            <p><img onClick={() => imageClick(Isashimi)} src={sashimi}/><br/><span>sashimi 6$</span></p>
            <p><img onClick={() => imageClick(Ituna)} src={tuna}/><br/><span>tuna 25$</span></p>

            </div>


            
        </div>
        <h2>Which department do we continue to?</h2>
            <div>
            <Link to='/dairy'><button style={{backgroundColor:'#4361EE'}} className='myButton'>Dairy</button></Link>
                <Link to='/Meet'><button style={{backgroundColor:'#D00000'}} className='myButton'>Meet</button></Link>
                <Link to='/Vegetables'><button style={{backgroundColor:'#80B918'}} className='myButton'>Vegetables</button></Link>
                <Link to='/Fish'><button style={{backgroundColor:'#01497C'}} className='myButton'>Fish</button></Link>
                <Link to='/Liquor'><button style={{backgroundColor:'#2E294E'}} className='myButton'>Liquor</button></Link>
                <Link to='/Tobacco'><button style={{backgroundColor:'#585123'}} className='myButton'>Tobacco</button></Link>
                <br/><Link to='/cashier'><button style={{backgroundColor:'#4A5058'}} className='myButton'>payment</button></Link>

            </div>
    </div>
    )
}
