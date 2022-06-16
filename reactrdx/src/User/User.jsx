import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {LoadDataAction} from '../Redux/user/user.action'

const User = () => {
  let [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  
  let user = useSelector((state)=>{
        return state.user;
  });
  useEffect(() =>{
    setLoading(true);
      dispatch(LoadDataAction());
      setLoading(false);
  })
  return (
    <>
     <div>User</div>
    <pre>{JSON.stringify(user)}</pre>
  
    </>
  )
}

export default User