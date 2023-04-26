import React from 'react'
import './Logout.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import {  logout } from '../../../Redux/Actions/userAction';
import { useAlert } from 'react-alert';


const Logout = () => {
  const dispatch = useDispatch()
  const alert = useAlert()

   const Logout = () =>{
    dispatch(logout())
    alert.success("Logged Out")
   }
  
   

  return (
    <div className='logout'>
    <p>Logout</p>
    <LogoutIcon onClick={() => Logout()} />
    </div>
  )
}

export default Logout
