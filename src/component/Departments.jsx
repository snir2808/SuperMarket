import React, {useState} from 'react'
import {Link} from "react-router-dom";

export default function Departments(props) {
    const [help, setHelp] = useState({display: 'none',})
    let divHelp = (flag) =>{
        if(flag == 0){
            setHelp({    position: 'fixed',
            top: '58%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '5px',
            zIndex: 1000})
        }
        else{
            setHelp({display: 'none',})
        }
    }
    return (
        <div>
            <h1>hi {props.customer.customerGender} {props.customer.customerName} Which department do you want to start ?</h1>
            <Link to='/dairy'><button style={{backgroundColor:'#4361EE'}} className='myButton'>Dairy</button></Link>
                <Link to='/Meet'><button style={{backgroundColor:'#D00000'}} className='myButton'>Meet</button></Link>
                <Link to='/Vegetables'><button style={{backgroundColor:'#80B918'}} className='myButton'>Vegetables</button></Link>
                <Link to='/Fish'><button style={{backgroundColor:'#01497C'}} className='myButton'>Fish</button></Link>
                <Link to='/Liquor'><button style={{backgroundColor:'#2E294E'}} className='myButton'>Liquor</button></Link>
                <Link to='/Tobacco'><button style={{backgroundColor:'#585123'}} className='myButton'>Tobacco</button></Link><br/>
                <button id ='help_b' onMouseEnter={()=>{divHelp(0)}} onMouseLeave ={()=>{divHelp(1)}}className='myButton'>?</button>
                <div className='help_div' style={help}> Hi Mr. Snir<br/> I understand you need help ..<br/>
                    In our supermarket you can find everything.<br/>
                    Below each class you will find a list of additional classes you can go through.<br/>
                    If you click on your shopping cart you will see what is inside, how much money you have left, and even delete what you do not want.<br/>
                    Finally you have a button to checkout where you can pay.
            </div>
        </div>

    )
}
