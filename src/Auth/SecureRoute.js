import React , {Children} from 'react'
import { Navigate } from 'react-router-dom'



const SecureRoute = ({children}) => {
  return (document.cookie.indexOf("jwt") !== -1) ? children:<Navigate to="/" /> 
}

export {SecureRoute};