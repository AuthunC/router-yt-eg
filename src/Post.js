import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {

    //Simply getting id using useParams and displaying the id value
    const {id}=useParams()
    
  return (
    <div>Post {id}</div>
  )
}

export default Post