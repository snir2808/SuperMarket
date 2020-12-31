import React, {useState} from 'react'
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import useSound from 'use-sound';
import Modal from './Modal'
import shoppingcart from './../icons/other/shopping-cart.svg'
import moneybag from './../icons/other/money-bag.svg'
import sound from './../icons/other/Cash Register (Kaching) - Sound Effect (HD).mp3'


export default function Cashier (props) {
    const [isOpen, setIsOpen] = useState(false)
    const [play] = useSound(sound);
    const history = useHistory();

    let click = () =>{
        play()
        setIsOpen(true)
        setTimeout(()=>{
            history.push('/')
            setIsOpen(false)
        },3000)
    }


    return (
        <div>
            <h1>Thank you so much<br/> for coming to visit</h1>

            <div className='cashier'>
        <button onClick={()=>{click()}} style={{position: 'relative',top:'357px'}} className='myButton' >PAY</button>
        <Modal open={isOpen} onClose={()=>{setIsOpen(false)}}><h1>Thank you so much for coming again</h1><h2>Your change is {props.money}</h2></Modal>
            </div>
            <div>
                <button  style={{backgroundColor:'#4A5058'}} className='myButton' onClick={()=>{history.goBack()}}>forget something?</button><br/>
                <p className='money'>
            <img src={moneybag} alt=""/><br/>
            <span>{props.money}$</span>
            </p>
            <p  className='p_shop'>
                <Link to ='/cart'> <img src={shoppingcart} alt=""/><br/></Link>
            <span>{props.cart.length}</span>
            </p>

            </div>
        </div>
    )
}
