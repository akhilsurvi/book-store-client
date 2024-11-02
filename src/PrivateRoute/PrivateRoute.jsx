import React, { useContext, useEffect,useState } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import { isLoggedIn } from '../ServerMethods/apiCalls';

const PrivateRoute = ({children}) => {
    // const {user,loading}=useContext(AuthContext);
    const [isUserlogged, setisUserlogged] = useState(false)
    
    const location=useLocation();
    useEffect(() => {
        setisUserlogged(isLoggedIn());
    }, [isUserlogged])
    

    if(!isUserlogged){
        return <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }
    if(isUserlogged){
        return children;
    }
  return (
   <Navigate to='/login' state={{from:location}} replace></Navigate>
  )
}

export default PrivateRoute
