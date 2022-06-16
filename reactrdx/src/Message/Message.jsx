import React from 'react'
import {gmAction,gnAction} from '../Redux/message/message.action'
import {useDispatch, useSelector} from 'react-redux'

const Message = () => {
  let dispatch = useDispatch();
  let message = useSelector((state)=>{
    return state.message
  })
  let gmHandler = () =>{
    dispatch(gmAction())
  }
  let gnHandler = () =>{
    dispatch(gnAction())
  }
  let msg = "Hello"
  return (
    <div>
      <pre>{JSON.stringify(message)}</pre>
      <h1>Message:{message.message}</h1>
      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message