import React, {useState} from 'react'
import {Link} from "react-router-dom";
import blackforest from './../icons/Dairy/black-forest.svg'
import butter from './../icons/Dairy/butter.svg'
import cheese from './../icons/Dairy/cheese.svg'
import milkbottle from './../icons/Dairy/milk-bottle.svg'
import SlicesOfCheese from './../icons/Dairy/Slices of cheese.svg'
import tiramisu from './../icons/Dairy/tiramisu.svg'
import yogurt from './../icons/Dairy/yogurt.svg'
import shoppingcart from './../icons/other/shopping-cart.svg'
import moneybag from './../icons/other/money-bag.svg'

export default function Dairy(props) {

    var Icake = [10,'cake'];
    var Ibutter = [2,'butter']
    var IgoatCheese = [5,'goat cheese']
    var Imilk = [1,'milk']
    var Icheese = [1.5,'cheese']
    var Itiramisu = [6,'tiramisu']
    var Iyogurt = [2,'yogurt']

    const imageClick = (price) => {
        props.funcAdd(price)
      } 

    return (
        <div>
            <h2>Dairy</h2>
            <p className='money'>
            <img src={moneybag} alt=""/><br/>
            <span>{props.money}$</span>
            </p>
            <p  className='p_shop'>
                <Link to ='/cart'> <img src={shoppingcart} alt=""/><br/></Link>
            <span>{props.cart.length}</span>
            </p>
            <div className='dairy_bg'>
                <div className='dairy1'>
                <p><img onClick={() => imageClick(Icake)} src={blackforest}/><br/><span> cake 10$</span></p>
                <p><img onClick={() => imageClick(Ibutter)}  src={butter}/><br/><span>butter 2$</span></p>
                <p><img onClick={() => imageClick(IgoatCheese)}  src={cheese}/><br/><span>goat cheese 5$</span></p>
                </div>
                <div  className='dairy2'>
                <p><img onClick={() => imageClick(Imilk)}  src={milkbottle}/><br/><span>milk 1$</span></p>
                <p> <img onClick={() => imageClick(Icheese)}  src={SlicesOfCheese}/><br/><span>cheese 1.5$</span></p>
                <p> <img onClick={() => imageClick(Itiramisu)}  src={tiramisu}/><br/><span>tiramisu 6$</span></p></div>
                <div className='dairy3'>
                    <p><img onClick={() => imageClick(Iyogurt)}  src={yogurt}/><br/><span>yogurt 2$</span></p>
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
