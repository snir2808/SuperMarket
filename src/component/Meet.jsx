import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import bacon from './../icons/Meet/bacon.svg'
import beef from './../icons/Meet/beef.svg'
import chickenleg from './../icons/Meet/chicken-leg.svg'
import chickenwings from './../icons/Meet/chicken-wings.svg'
import sausages from './../icons/Meet/sausages.svg'
import steak from './../icons/Meet/steak.svg'
import shoppingcart from './../icons/other/shopping-cart.svg'
import moneybag from './../icons/other/money-bag.svg'


export default function Meet(props) {

    var Ibacon = [12,'bacon'];
    var Ibeef = [15,'beef']
    var Ichickenleg = [7,'chicken leg']
    var Ichickenwings = [5,'chicken wings']
    var Isausages = [6,'sausages']
    var Isteak = [15,'steak']

    const imageClick = (price) => {
        props.funcAdd(price)
      }


    return (
        <div>
        <h2>Meet</h2>
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

            <p><img onClick={() => imageClick(Ibacon)} src={bacon}/><br/><span>bacon 12$</span></p>
            <p><img onClick={() => imageClick(Ibeef)} src={beef}/><br/><span>beef 15$</span></p>

            </div>

            <div  className='meet2'>

            <p><img onClick={() => imageClick(Ichickenleg)} src={chickenleg}/><br/><span>chicken leg 7$</span></p>
            <p> <img onClick={() => imageClick(Ichickenwings)} src={chickenwings}/><br/><span>chicken wings 5$</span></p>

            </div>

            <div className='meet3'>

            <p><img onClick={() => imageClick(Isausages)} src={sausages}/><br/><span>sausages 6$</span></p>
            <p><img onClick={() => imageClick(Isteak)} src={steak}/><br/><span>steak 25$</span></p>

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
