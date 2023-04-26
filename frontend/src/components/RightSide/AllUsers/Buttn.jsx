import React, { useEffect } from 'react'
import './Buttn.css'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, followAndUnfollowUser, loadUser } from '../../../Redux/Actions/userAction'
import { useState } from 'react'
import { allPosts } from '../../../Redux/Actions/postAction'


const Buttn = ({User}) => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)
  
    const temp = "Follow"
    const [s , setS] = useState(temp)

   useEffect(()=>{

    for (let i = 0; i < user?.following?.length; i++) {
      if(user?.following[i] === User._id )
          setS("Following")
     
   }
   },[User,user])
  
    const followUnfollow = async (id) =>{
        await dispatch(followAndUnfollowUser(id))
         if(s === "Follow")
         setS("Following")
         else
         setS("Follow")

       await  dispatch(loadUser())
       await dispatch(allUsers())
       await dispatch(allPosts())
    }


  return (
    <button className={s} onClick={() => followUnfollow(User._id)}>
      {s}
    </button>
  )
}

export default Buttn
