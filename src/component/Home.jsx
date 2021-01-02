import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';


export default function Home(props) {

    const history = useHistory();
    const [name, setName] = useState()
    const [gender, setGender] = useState()
    const [money, setMoney] = useState()

    let validName= (e) => {
        let str = e.target.value
        if(str.length == 0){
            alert('Please enter your name!')
        }else{
            setName(str)
        }
    }

    let validMoney = (e) => {
        let num = e.target.value
        Number(num)
        if(num == 0 || num == undefined || num == NaN || num == null){
            alert('Did you really come to the supermarket without money ???')
        }else{
            setMoney(num)
        }
    }

    let newCustomer = () =>{
        if(name !== undefined && gender != undefined && money > 0){
            props.newCust(name, gender, money)
            history.push('/departments')
        }else{
            alert('Something is wrong with the details you entered')
        }
    }









    return (
        <div>
             <h1>Wellcome <br/>to the <br/>SuperMarket</h1>
            <h2>Hi, please enter your details</h2>

            <label htmlFor="">Name </label><br/>
            <input onChange={validName} type="text"/><br/>
            

            <label htmlFor="">Gender:</label>
            <input onClick={(e)=>{return(setGender(e.target.value))}} type="radio" name='gender' value='male' />
            <label>male</label>
            <input onClick={(e)=>{return(setGender(e.target.value))}} type="radio" name='gender' value='female'/>
            <label>female</label><br/>

            <label htmlFor="">How much money do you have ?</label><br/>
            <input onChange={validMoney} type="number"/><br/>

            <button className='myButton' onClick={newCustomer}>Let's do some shopping</button>
        </div>
    )
}
