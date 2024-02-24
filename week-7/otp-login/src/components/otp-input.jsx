import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({length=4, onOtpSubmit=() => {}}) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));

    const inputRefs = useRef([]);
    
    useEffect(() => {
        if(inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    const handleChange = (idx, e) => {
        const value = e.target.value;
        if(isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[idx] = value.substring(value.length-1);
        setOtp(newOtp);
        
        if(value && idx<length-1 && inputRefs.current[idx+1]) {
            inputRefs.current[idx+1].focus();
        }   
    }

    const handleKeyDown = (idx, e) => {
        if(e.key === "Backspace" && !otp[idx] && idx>0 && inputRefs.current[idx-1]) {
            inputRefs.current[idx-1].focus();
        }
    }

    const handleOnClick = (idx) => {
        inputRefs.current[idx].setSelectionRange(1,1);
    }

    const handleOnButtonClick = () => {
        if(otp.length === length) {
            const combinedOtp = otp.join("");
            onOtpSubmit(combinedOtp);
        } 
        else alert("Please enter all digits in otp");

    }

    return (
        <>
         {otp.map((value, idx) => {
            return (
                <>
                    <input 
                    key = {idx}
                    type="text"
                    ref={(input) => (inputRefs.current[idx] = input)}
                    value={value}
                    onChange={(e) => handleChange(idx, e)}
                    onClick={() => handleOnClick(idx)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    className="otp-input"
                    />
                </>
            )
        })}
        <br />
        <button className="submit-button" onClick={handleOnButtonClick}>Login</button>            
        </>
    )

}

export default OtpInput
