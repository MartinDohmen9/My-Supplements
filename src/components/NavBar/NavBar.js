import React, { useState } from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"
import { UserAuth } from "../../context/AuthContext";
import { Button } from "@mui/material";
import {auth} from '../../firebase/firebase';
import login from '../../login.png'

const NavBar = () => {

    const categories = [
        {nombre:"Creatinas",id:"0", route:"category/Creatinas"},
        {nombre:"Proteinas",id:"1", route:"category/Proteinas"},
        {nombre:"Alimentos",id:"2", route:"category/Alimentos"},
        {nombre:"Dulces",id:"3", route:"category/Contacto"}
    ];

    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
      try {
        await logOut()
      } catch (error) {
        console.log(error)
      }
    }

    const [ isOpen, setIsOpen ] = useState(false);
    return (
            <div className="NavBar">
                <Link style={{ textDecoration: 'none' , marginLeft: '15px',}} to="/"> <h3 className="tienda"> My Supplements </h3> </Link>
                <div className={`nav-items ${isOpen && "open"}`}>

                    {categories.map((category)=> 
                        <Link style={{ textDecoration: 'none' }} key={category.id} to={category.route}>
                            <b>{category.nombre}</b>
                        </Link>)}

                </div>
                <div className="queryContainer">
                <div className="display">
                    <div className="login">
                        {user?.displayName 
                        ? <div>
                            <Link to='/login' style={{textDecoration:'none', color:"azure"}}><h5 className="displayName">{user?.displayName}</h5></Link>
                            <Button sx={{m: 1, p: 1}} style={{backgroundColor: "inherit", margin: "0px", padding: "0px", color:"azure"}} variant="" onClick={handleSignOut}>Logout</Button> 
                        </div>
                        : (<Link to='/login'><img src={login} className="loginIcon"/></Link>)}
                    </div>
                    <CartWidget/>
                </div>
                    <div className={`nav-toggle ${isOpen && "open"}`}
                        onClick={ () => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                </div>
                </div>
            </div>
    )
};

export default NavBar