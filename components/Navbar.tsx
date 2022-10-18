import React from "react";
import Link from "next/link";

const Navbar = () =>{
return(
    <nav>
        <Link href="/login">Login</Link>
        <Link href="/signup">Register</Link>
    </nav>
)
}

export default Navbar