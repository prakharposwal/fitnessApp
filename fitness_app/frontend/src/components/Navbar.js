import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext();


    const handleClick = () =>{
        logout();
    }

    return(
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      {/* <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </a> */}
      {/* <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Login
      </a> */}
      <nav>
        {user && (
            <div>
              <span >{user.email}</span>
              <button onClick={handleClick } style={{marginLeft:20}}>Log Out</button>
            </div>
        )}
        {!user && (
            <div> 
              <Link to='/login' style={{ textDecoration: "none", color: "#3A1212" }}>Login</Link>
              <Link to='/signup' style={{ textDecoration: "none", color: "#3A1212" }}>Signup</Link>
            </div>
        )}
        
      </nav>
    </Stack>
  </Stack>
    )
};

export default Navbar;
