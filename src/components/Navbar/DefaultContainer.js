import Navbar from ".";
import {Outlet } from "react-router-dom";

const DefaultContainer = () => {
    return ( 
    <>
        <Navbar/>
        <Outlet/>
    </> 
);
}
 
export default DefaultContainer;