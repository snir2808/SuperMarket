import React, {useState} from 'react'
import {Link} from "react-router-dom";
import beerbottle from './../icons/Liquor/beer-bottle.svg'
import beercan from './../icons/Liquor/beer-can.svg'
import liquor from './../icons/Liquor/liquor.svg'
import vodka from './../icons/Liquor/vodka.svg'
import wine from './../icons/Liquor/wine.svg'
import champagne from './../icons/Liquor/champagne.svg'
import shoppingcart from './../icons/other/shopping-cart.svg'
import moneybag from './../icons/other/money-bag.svg'


export default function Liquor(props) {

    var Ibeerbottle = [6,'beer bottle'];
    var Ibeercan = [4,'beer can']
    var Iliquor = [30,'liquor']
    var Ivodka = [40,'vodka']
    var Iwine = [20,'wine']
    var Ichampagne = [60,'champagne']

    const imageClick = (price) => {
        props.funcAdd(price)
      } 


    return (
        <div>
        <h2>Liquor</h2>
        <p className='money'>
            <img src={moneybag} alt=""/><br/>
            <span>{props.money}$</span>
            </p>
            <p  className='p_shop'>
                <Link to ='/cart'> <img src={shoppingcart} alt=""/><br/></Link>
            <span>{props.cart.length}</span>
            </p>
        <div className='liquors_bg'>
            <div className='liquors1'>

            <p><img onClick={() => imageClick(Ibeerbottle)} className='img_liq' src={beerbottle}/><br/><span className='span_liq'>beer 6$</span></p>
            <p><img onClick={() => imageClick(Ibeercan)} className='img_liq' src={beercan}/><br/><span className='span_liq'>beer-can 4$</span></p>
            <p><img onClick={() => imageClick(Iliquor)} className='img_liq' src={liquor}/><br/><span className='span_liq'>liquor 30$</span></p>

            </div>

            <div  className='liquors2'>

            <p><img onClick={() => imageClick(Ivodka)} className='img_liq' src={vodka}/><br/><span className='span_liq'>vodka 40$</span></p>
            <p><img onClick={() => imageClick(Iwine)} className='img_liq' src={wine}/><br/><span className='span_liq'>wine 20$</span></p>
            <p><img onClick={() => imageClick(Ichampagne)} className='img_liq' src={champagne}/><br/><span className='span_liq'>champagne 60$</span></p>

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
