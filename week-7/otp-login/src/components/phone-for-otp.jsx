import React from 'react'
import { useState } from 'react'
import OtpInput from './otp-input';


const PhoneForOtp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [DisplayPhoneForm, setDisplayPhoneForm] = useState(true);

    const onOtpSubmit = (otp) => {
        console.log("Logged In ", otp);
    }
    
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        if(phoneNumber.length<10 || isNaN(phoneNumber) || phoneNumber.length>10) {
            alert("Invalid phone number");
            return;
        }
        setDisplayPhoneForm(false);
    }

    return (
        <div>
            {DisplayPhoneForm ? <PhoneForm phoneNumber = {phoneNumber} handlePhoneSubmit= {handlePhoneSubmit} handlePhoneNumber = {handlePhoneNumber} /> 
            : <OtpInput length={4} onOtpSubmit={onOtpSubmit} /> }
        </div>
    )
}

function PhoneForm(props) {
    return <>
        <form onSubmit={props.handlePhoneSubmit}>
            <input 
            type='text'
            className='phone-input'
            value={props.phoneNumber}
            onChange={props.handlePhoneNumber}
            placeholder='Enter phone number'
            />
            <br />
            <button className="submit-button" type = 'submit'>Send OTP</button>
        </form>
    </>
}

export default PhoneForOtp
