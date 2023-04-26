import React from 'react'
import AllUser from './AllUsers/AllUser'
import Logout from './Logout/Logout'
import './RightSide.css'
import TrendCard from './TrendCard/TrendCard'
import NewPost from './UploadPost/NewPost'

const RightSide = () => {
  return (
    <div className='rightSide'>
      <Logout />
      <NewPost />
      <AllUser />
      <TrendCard /> 
    </div>
  )
}

export default RightSide
