import React, { useState } from 'react'
import './ProfileCard.css'
import Cover from '../../../img/cover.jpg'
import { useSelector } from 'react-redux'
import List from '../../../pages/List'
import { Link } from 'react-router-dom'

const ProfileCard = () => {
   const {user} = useSelector(state => state.user)
   const [follow , setFollow] = useState("Following")

   const toggle =(k) =>{
        if(k === "Followers")
          setFollow("Followers")
          else
          setFollow("Following")
   }

  return (
    <div>
    <div className='profileCard'>
      <div className="profileImages">
        <img src={Cover} alt='cover' />
        <img src={user?.avatar?.url} alt='profile' />
      </div>
      <div className="profileName">
        <span>{user?.name}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user?.followers?.length}</span>
            <span onClick={() => toggle("Followers")} >Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user?.following?.length}</span>
            <span onClick={() => toggle("Following")} >Following</span>
          </div>
       </div>
       <hr />
       </div>
       
       <Link to={`/profile/${user.name}`}  state={user}>
        My Profile
        </Link>
     
    </div>
      <div className='ff'>
             <span>{follow}</span>
             { follow === "Followers" ? user?.followers?.map(fol => (<List fol={fol} x={false} key={fol} />) ) :  user?.following?.map(fol => (<List  fol={fol} x={false} key={fol} />))  }

      </div>
    </div>
  )
}

export default ProfileCard
