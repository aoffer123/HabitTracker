import React , {Children, useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'



const SecureRoute = ({children},props) => {
    console.log(props.val)
  return (props.val) ? children:<Navigate to="/SignInSide" /> 
}

export {SecureRoute};