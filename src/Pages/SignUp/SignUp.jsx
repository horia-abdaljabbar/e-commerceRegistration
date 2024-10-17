import React, { useState } from 'react'
import './SignUp.css'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { NavLink } from "react-router-dom";


function SignUp() {
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility1 = (e) => {
        e.preventDefault();
        setShowPassword1(!showPassword1);
    };
    const handleChange = (value) => {
        setPhone(value);

    };

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
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="mb-5">
                                                                    <div className="text-center mb-2">
                                                                    <h2 className='mb-4'>تسجيل حساب</h2>
                                                                    <a href="#!">
                                                             <img src="./RegistrationImages/signUp.svg" alt="SignUp logo" width={60} height={57} />
                                                                        </a>     
                                                                    </div>
                                                                                                                              </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="d-flex gap-3 flex-column">
                                                                    {/* <a href="#!" className="btn btn-lg btn-outline-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                          </svg>
                          <span className="ms-2 fs-6">Log in with Google</span>
                        </a> */}
                                                                </div>
                                                                {/* <p className="text-center mt-4 mb-5">Or sign in with</p> */}
                                                            </div>
                                                        </div>
                                                        <form action="#!">
                                                            <div className="row gy-3 overflow-hidden">
                                                                <div className="col-12">
                                                                    <div className="form-floating mb-2 rtl" >
                                                                        <input type="email" 
                                                                            className="form-control w-100" name="email" id="email" placeholder="name@example.com" required />
                                                                        <label htmlFor="email" className="form-label" >البريد الالكتروني</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-floating mb-2">
                                                                        <PhoneInput
                                                                            defaultCountry="ps"
                                                                            value={phone}
                                                                            onChange={handleChange}
                                                                            className="phone"
                                                                            placeholder="رقم الجوال"


                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-floating mb-2 rtl">
                                                                        <input 
                                                                            className="form-control w-100 password" 
                                                                            name="password" id="password" placeholder="Password" required
                                                                            type={showPassword ? "text" : "password"}

                                                                             />
                                                                        <button
                                                                            className="eyeIcon border border-0 bg-white"
                                                                            onClick={togglePasswordVisibility}
                                                                        >
                                                                            {showPassword ? (
                                                                                <img src="/RegistrationImages/eyeIcon.svg"
                                                                                />
                                                                            ) : (
                                                                                <img src="/RegistrationImages/hideEyeIcon.svg" />

                                                                            )}
                                                                        </button>
                                                                        <label htmlFor="password" className="form-label">كلمة المرور</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-floating mb-2 rtl">
                                                                        <input 
                                                                             className="form-control w-100 password1" 
                                                                            name="confirmPassword" id="password1" placeholder="Password" required
                                                                            type={showPassword1 ? "text" : "password"}

                                                                             />
                                                                        <button
                                                                            className="eyeIconN border border-0 bg-white"
                                                                            onClick={togglePasswordVisibility1}
                                                                        >
                                                                            {showPassword1 ? (
                                                                                <img src="/RegistrationImages/eyeIcon.svg" />
                                                                            ) : (
                                                                                <img src="/RegistrationImages/hideEyeIcon.svg" />

                                                                            )}
                                                                        </button>
                                                                        <label htmlFor="password" className="form-label" >تأكيد كلمة المرور</label>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-12">
                                                                    <div className="form-check">
                                                                        <input style={inputStyle}
                                                                            className="form-check-input" type="checkbox" defaultValue name="remember_me" id="remember_me" />
                                                                        <label className="form-check-label text-secondary" htmlFor="remember_me style={labelStyle}">
                                                                            Keep me logged in
                                                                        </label>
                                                                    </div>
                                                                </div> */}

                                                                <div className="col-12">
                                                                    <div className="d-grid">
                                                                        <button className="btn btn-dark btn-lg submitBtn" type="submit" >تسجيل حساب</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 mt-2">
                                                                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-2">
                                                                        <NavLink to="/Login" className="link-secondary link">لديك حساب بالفعل؟</NavLink>
                                                                        {/* already have an account */}
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

export default SignUp