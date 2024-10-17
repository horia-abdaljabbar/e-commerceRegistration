import React, { useState } from 'react'
import './ResetPassword.css'
import { NavLink } from "react-router-dom";

function ResetPassword() {
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
  return (
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
              <NavLink className="arrowIcon" to="/SendCodeForForgetPassword" 
              >
              <img src="./RegistrationImages/arrowIcon.svg"/>
              </NavLink>
              </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="mb-5">
                                                                    <div className="text-center mb-4">
                                                                        <h2 className='m-5'>اعادة تعيين كلمة المرور</h2>
                                                                        <a href="#!">
                                                                            <img src="./RegistrationImages/keyIcon.svg" alt="key Logo" width={90} height={57} />
                                                                        </a>
                                                                    </div>
                                                                   
                                                                <p className='authTitle'>أدخل <span className="emailWord">كلمة المرور الجديدة </span>الخاصة بحسابك
                                                                </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <form>


                                                            <div className="row gy-3 overflow-hidden">
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
                                                            </div>
                                                            <div className="row">


                                                                <div className="col-12">
                                                                    <div className="d-grid">
                                                                        <button className="btn btn-dark btn-lg submitBtn" type="submit">اعادة تعيين كلمة المرور</button>
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
  )
}

export default ResetPassword