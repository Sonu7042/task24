import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    const {userid}= useParams()
 console.log("userid", userid)
  
  return (
    <div>
      
    </div>
  )
}

export default User
