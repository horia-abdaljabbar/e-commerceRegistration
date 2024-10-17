import React from 'react'
import { useEffect, useState, useRef } from 'react'
import './SendCodeForForgetPassword.css'
import { NavLink } from "react-router-dom";
function SendCodeForForgetPassword() {
    const [otp, setOtp] = useState(new Array(5).fill(""));
    const otpBoxReference = useRef([]);
    let newArr = [...otp];

    function handleChange(value, index) {
        newArr[index] = value;
        setOtp(newArr);
        console.log(otp);

        if (value && index < 5 - 1) {
            otpBoxReference.current[index + 1].focus();
        }

        if (value && index == 1 && newArr[index - 1] == '') {
            otpBoxReference.current[index - 1].focus();
            newArr.fill("");
            index = index + 1;
            setOtp(newArr);
            console.log("return");
        }

        if (value && index == 2 && newArr[index - 1] == '' && newArr[index - 2] == '') {
            otpBoxReference.current[index - 2].focus();
            newArr.fill("");
            index = index + 1;
            setOtp(newArr);
            console.log("return");
        }

        if (value && index == 3 && newArr[index - 1] == '' && newArr[index - 2] == '' && newArr[index - 3] == '') {
            otpBoxReference.current[index - 3].focus();
            newArr.fill("");
            index = index + 1;
            setOtp(newArr);
            console.log("return");
        }


        if (value && index == 4 && newArr[index - 1] == '' && newArr[index - 2] == '' && newArr[index - 3] == '' && newArr[index - 4] == '') {
            otpBoxReference.current[index - 4].focus();
            newArr.fill("");
            index = index + 1;
            setOtp(newArr);
            console.log("return");
        }

    }

    function handleBackspaceAndEnter(e, index) {
        if (e.key === "Backspace" && index > 0) {
            e.target.value = '';
            otpBoxReference.current[index - 1].focus();
            console.log(e.key);
        }

    }
    return (

        <>
            <div className="area">
                {/* <Header/> */}

                <ul className="circles">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
                <div className='registerForm'>
                    <section>
                        <div className="container">

                            <div className="row justify-content-center">
                                <div className="col-12 col-xxl-11">
                                    <div className="regCard">

                                        <div className="form d-flex align-items-center justify-content-center">

                                            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                                <div className="col-12 col-lg-11 col-xl-10">
                                                    <div className="card-body">
                                                    <div className="col d-flex flex-column align-items-start justify-content-end">
              <NavLink className="arrowIcon" to="/Login" 
              >
              <img src="./RegistrationImages/arrowIcon.svg"/>
              </NavLink>
              </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="mb-5">
                                                                    <div className="text-center mb-4">
                                                                        <h2 className='m-5'>التحقق من البريد الالكتروني</h2>
                                                                        <a href="#!">
                                                                            <img src="./RegistrationImages/keyIcon.svg" alt="key Logo" width={90} height={57} />
                                                                        </a>
                                                                    </div>
                                                                    {/* Welcome back you've been missed! */}
                                                                   
                                                                <p className='authTitle'> الرجاء ادخال <span className="emailWord"> الرمز</span> الخاص ببريدك الالكتروني
                                                                </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <form>


                                                            <div className="row gy-3 overflow-hidden">
                                                                <div className="col-12">
                                                                    <div className="col codeInputs mb-3 d-flex flex-row justify-content-center alig-items-center gap-3 ">

                                                                        {otp.map((digit, index) => (
                                                                            <input key={index} value={digit} maxLength={1}
                                                                                onChange={(e) => handleChange(e.target.value, index)}
                                                                                onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                                                                                //  onKeyDown={(e)=> handleBackspaceAndEnter(e, index)}

                                                                                ref={(reference) => (otpBoxReference.current[index] = reference)}
                                                                                className="form-control mb-4 shadow-1 otpInput"

                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">


                                                                <div className="col-12">
                                                                    <div className="d-grid">
                                                                        <button className="btn btn-dark btn-lg submitBtn" type="submit">تابع</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

            </div>
        </>
    )
}

export default SendCodeForForgetPassword