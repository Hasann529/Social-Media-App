import React from 'react'
import Post from './Post/Post'
import './PostSide.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { allPosts } from '../../Redux/Actions/postAction'


const PostSide = () => {
   const {posts} = useSelector(state => state.posts)
   const dispatch = useDispatch()

   useEffect(()=>{
          dispatch(allPosts())
   },[dispatch])

  return (
    <div className='postSide'>
       {
        posts?.map((post,id) => (<Post post={post} key={id}/>))
     }
    </div>
  )
}

export default PostSide
