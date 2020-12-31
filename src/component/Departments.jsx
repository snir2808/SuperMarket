import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function Departments(props) {

    // <img src={Milk}/>
    return (
        <div>
            <h1>Which department do you want to start ?</h1>
            <Link to='/dairy'><button style={{backgroundColor:'#4361EE'}} className='myButton'>Dairy</button></Link>
                <Link to='/Meet'><button style={{backgroundColor:'#D00000'}} className='myButton'>Meet</button></Link>
                <Link to='/Vegetables'><button style={{backgroundColor:'#80B918'}} className='myButton'>Vegetables</button></Link>
                <Link to='/Fish'><button style={{backgroundColor:'#01497C'}} className='myButton'>Fish</button></Link>
                <Link to='/Liquor'><button style={{backgroundColor:'#2E294E'}} className='myButton'>Liquor</button></Link>
                <Link to='/Tobacco'><button style={{backgroundColor:'#585123'}} className='myButton'>Tobacco</button></Link>

        </div>
    )
}
