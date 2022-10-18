import React from "react";
import { useAuth } from '../context/AuthContext'

const dashboard = () =>{
    const { user } = useAuth()

    return (
        <>
            {user? (
                <div>
                    <h1>Welcome to your</h1>
                </div>
              ):<>
               <div>This is a protected route</div>
               </>}
         </>)
}

export default dashboard