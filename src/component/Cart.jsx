import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';



export default function Cart(props) {
    const history = useHistory();
    var sum = 0

    let remove = (index,item) =>{
        props.funcDel(index,item)
    }



    return (
        <div>
            <h1>Shopping cart</h1>
            <ul>
                {props.cart.map((item,index)=>{
                    sum +=item[0]
                    return(
                        <li>{item[1]}   {item[0]}$ <button onClick={()=>{remove(index,item)}} className='Bdelete'><span className='Sdelete'>+</span></button></li>
                        
                    )
                })}
            </ul>
            <h2>Total:{sum}$</h2>
            <button  style={{backgroundColor:'#4A5058'}} className='myButton' onClick={()=>{history.goBack()}}>Continue shopping</button><br/>

        </div>
    )
}
