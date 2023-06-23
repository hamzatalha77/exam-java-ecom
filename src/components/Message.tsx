import React from 'react'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <>
      <h1>Your Cart is Empty</h1>
      <Link to="/">Go Back</Link>
    </>
  )
}

export default Message
