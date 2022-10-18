import React from "react";
import { useAuth } from '../context/AuthContext'

const dashboard = () =>{
    const { user } = useAuth()

    return (
        <>
            {user? (
                <div  style={{
                    margin: 'auto',
                    textAlign: 'center',
                   }}>
                    <h1>Welcome to your page</h1>
                </div>
              ):<>
               <div>This is a protected route</div>
               </>}
         </>)
}

export default dashboard