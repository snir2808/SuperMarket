import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import cigarette from './../icons/Tobacco/cigarette.svg'
import cigars from './../icons/Tobacco/cigars.svg'
import lighter from './../icons/Tobacco/lighter.svg'
import smokingpipe from './../icons/Tobacco/smoking-pipe.svg'
import vape from './../icons/Tobacco/vape.svg'
import weed from './../icons/Tobacco/weed.svg'
import shoppingcart from './../icons/other/shopping-cart.svg'
import moneybag from './../icons/other/money-bag.svg'


export default function Tobacco(props) {

    var Icigarette = [6,'cigarette'];
    var Icigars = [14,'cigars']
    var Ilighter = [1,'lighter']
    var Ismokingpipe = [4,'smokingpipe']
    var Ivape = [20,'vape']
    var Iweed = [16,'weed']

    const imageClick = (price) => {
        props.funcAdd(price)
      }



    return (
        <div>
        <h2>Tobacco</h2>
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

            <p><img onClick={() => imageClick(Icigarette)} className='img_liq' src={cigarette}/><br/><span className='span_liq'>marlboro 6$</span></p>
            <p><img onClick={() => imageClick(Icigars)} className='img_liq' src={cigars}/><br/><span className='span_liq'>cigars 14$</span></p>
            <p><img onClick={() => imageClick(Ilighter)} className='img_liq' src={lighter}/><br/><span className='span_liq'>clipper 1$</span></p>

            </div>

            <div  className='liquors2'>

            <p><img onClick={() => imageClick(Ismokingpipe)} className='img_liq' src={smokingpipe}/><br/><span className='span_liq'>smoking-pipe 4$</span></p>
            <p><img onClick={() => imageClick(Ivape)} className='img_liq' src={vape}/><br/><span className='span_liq'>vape 20$</span></p>
            <p><img onClick={() => imageClick(Iweed)} className='img_liq' src={weed}/><br/><span className='span_liq'>weed 16$</span></p>

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
