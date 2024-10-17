import { useState } from 'react'
import './App.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Root from './Routes/Root';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import SendCodeForForgetPassword from './Pages/SendCodeForForgetPassword/SendCodeForForgetPassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: 
          <SignUp />,
        },
        // {
        //   path: "/Home",
        //   element:
        //   // <LanguageContextProvider>
        //      <Home />
        //   // </LanguageContextProvider>,
        // },
      
        {
          path: "/SignUp",
          element: 
            <SignUp />
        
        },
        {
          path: "/Login",
          element: 
            <Login />
        
        },
        
        {
          path: "/SendCodeForForgetPassword",
          element: 
             <SendCodeForForgetPassword />
        },
        // {
        //   path: "/Register",
        //   element: 
        //      <Register />
        // },

        // {
        //   path: "/SendCode",
        //   element: 
        //      <SendCode />
        // },

        // {
        //   path: "/ForgetPassword",
        //   element: 
        //      <ForgetPassword />
        // },

         {
          path: "/ResetPassword",
          element: 
             <ResetPassword />
        },

        {
          path: "/SendCodeForForgetPassword",
          element: 
             <SendCodeForForgetPassword />
        },


        

        
      

      
      ],
    },
  ]);
  return (
    <>

   <RouterProvider router={router} />

    </>
  )
}

export default App
