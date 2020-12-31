import React, {useState} from 'react'
import {Link} from "react-router-dom";
import avocado from './../icons/Vegetables/avocado.svg'
import beet from './../icons/Vegetables/beet.svg'
import carrot from './../icons/Vegetables/carrot.svg'
import cucumber from './../icons/Vegetables/cucumber.svg'
import eggplant from './../icons/Vegetables/eggplant.svg'
import onion from './../icons/Vegetables/onion.svg'
import pepper from './../icons/Vegetables/pepper.svg'
import tomato from './../icons/Vegetables/tomato.svg'
import shoppingcart from './../icons/other/shopping-cart.svg'
import moneybag from './../icons/other/money-bag.svg'


export default function Vegetables(props) {

    var Iavocado = [6,'avocado'];
    var Ibeet = [2,'beet']
    var Icarrot = [3,'carrot']
    var Icucumber = [2,'cucumber']
    var Ieggplant = [4,'eggplant']
    var Ionion = [2,'onion']
    var Ipepper = [6,'pepper']
    var Itomato = [2.5,'tomato']

    const imageClick = (price) => {
        props.funcAdd(price)
      }


    return (
        <div>
        <h2>Vegetables</h2>
        <p className='money'>
            <img src={moneybag} alt=""/><br/>
            <span>{props.money}$</span>
            </p>
            <p  className='p_shop'>
                <Link to ='/cart'> <img src={shoppingcart} alt=""/><br/></Link>
            <span>{props.cart.length}</span>
            </p>
        <div className='vegetables_bg'>
            <div className='vegetables1'>

            <p><img onClick={() => imageClick(Iavocado)} className='img_veg' src={avocado}/><br/><span className='span_veg'>avocado 6$</span></p>
            <p><img onClick={() => imageClick(Ibeet)} className='img_veg' src={beet}/><br/><span className='span_veg'>beet 2$</span></p>
            <p><img onClick={() => imageClick(Icarrot)} className='img_veg' src={carrot}/><br/><span className='span_veg'>carrot 3$</span></p>
            <p><img onClick={() => imageClick(Icucumber)} className='img_veg' src={cucumber}/><br/><span className='span_veg'>cucumber 2$</span></p>

            </div>

            <div  className='vegetables2'>

            <p><img onClick={() => imageClick(Ieggplant)} className='img_veg' src={eggplant}/><br/><span className='span_veg'>eggplant 4$</span></p>
            <p><img onClick={() => imageClick(Ionion)} className='img_veg' src={onion}/><br/><span className='span_veg'>onion 2$</span></p>
            <p><img onClick={() => imageClick(Ipepper)} className='img_veg' src={pepper}/><br/><span className='span_veg'>pepper 6$</span></p>
            <p><img onClick={() => imageClick(Itomato)} className='img_veg' src={tomato}/><br/><span className='span_veg'>tomato 2.5$</span></p>

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
