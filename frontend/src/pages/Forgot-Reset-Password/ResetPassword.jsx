import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { clearError, resetPassword } from '../../Redux/Actions/userAction'
import './ResetPassword.css'

const ResetPassword = () => {
    const [password , setPassword] = useState("")
    const alert = useAlert()
    const [confirmPassword , setConfirmPassword] = useState("")
    const {token} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {error , message} = useSelector(state => state.forgotPassword)
    
    const Submit = () =>{
          dispatch(resetPassword(password,confirmPassword,token))
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
           navigate("/login")
        }
   },[alert, dispatch,error,message,navigate])

  return (
    <div className='reset'>
       <div>Reset Password</div>
      <div>
        <input className='inp' type='password' placeholder='New Password' value={password} onChange={(e) => setPassword(e.target.value)}  />
        <input className='inp' type='password' placeholder='Confirm New Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  />
        <button className='btn' onClick={Submit} >Send</button>
      </div>
    </div>
  )
}

export default ResetPassword
