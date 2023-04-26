import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, forgotPassword } from '../../Redux/Actions/userAction'
import './ForgotPassword.css'

const ForgotPassword = () => {
   const [email , setEmail] = useState("")
   const dispatch = useDispatch()
   const alert  = useAlert()
   const {message , error} = useSelector(state => state.forgotPassword)

   const Submit = () =>{
         dispatch(forgotPassword(email))
   }
   useEffect(()=>{
        if(error)
        { 
            alert.error(error)
            dispatch(clearError())
        }
        if(message)
        {
            alert.success(message)
        }
   },[alert, dispatch,error,message])
  return (
    <div className='forgot'>
      <div>Enter Your Email Here</div>
      <div className='inline'>
        <input className='inp' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
        <button className='btn' onClick={Submit} >Send</button>
      </div>
    </div>
  )
}

export default ForgotPassword
