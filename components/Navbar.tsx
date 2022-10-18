import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import router from "next/router";

const Navbar = () =>{
    const { user, logout } = useAuth()
return(
    <nav>
        {user? (
            <div>
                <button onClick={() => {
                    logout()
                    router.push('/login')
                  }}>Logout</button>
            </div>
        ):
        <>
        <Link href="/login">Login</Link>
        <Link href="/signup">Register</Link>
        </>
        }

    </nav>
)
}

export default Navbar