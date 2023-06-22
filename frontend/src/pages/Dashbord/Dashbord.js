import React, { useState,useEffect } from "react";
import { useNavigate} from 'react-router-dom';

import './dashbord.css'
import CompFormation from "./CompFormation"
import CompCategorie from "./CompCategorie";
import CompModule from "./CompModule";
import CompSession from "./CompSession";
import {  Link } from "react-router-dom";
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
export default function Dashbord() {
    const [isShown, setIsShown] = useState(0);
    const user = JSON.parse(localStorage.getItem("user"));
    const history = useNavigate();

    const deconnexion=()=>{
        localStorage.removeItem('user');
        window.location.reload(false);
    }
        useEffect(() => {
            if (!user) history("/connect");
          
             }, []); 
return(
    <>  
    <NavBar/>
    <div className="page-template page-template-page-simple page-template-page-simple-php page page-id-9 wp-embed-responsive theme-pyxl-scry woocommerce-account woocommerce-page woocommerce-js" >
<div className="flex-container">
<div style={{flex:"20%"}} className="menuLeft" >
    <ul> 
    <Link onClick={()=>deconnexion()} > <li style={{height:"90px",paddingTop:"30px"}}>Déconnexion </li> </Link>
<br/>
 <Link onClick={()=>setIsShown(0)} > <li style={{height:"90px",paddingTop:"30px"}}>Catégories </li> </Link> 
<Link onClick={()=>setIsShown(1)} > <li style={{height:"90px",paddingTop:"30px"}}>Formations </li> </Link>
<Link onClick={()=>setIsShown(2)} > <li style={{height:"90px",paddingTop:"30px"}}>Modules </li> </Link>
<Link onClick={()=>setIsShown(3)} > <li style={{height:"90px",paddingTop:"30px"}}>Session </li> </Link>


</ul> 
</div>
<div style={{flex:"80%",height:"900px",paddingLeft:"30px"}}>
{
    isShown==0?
 <CompCategorie/> :null
}
{
    isShown==1?
    
    <CompFormation isShown={isShown} setIsShown={setIsShown}/>:null 
}
{
    isShown==2?
 <CompModule/>:null
}
{
    isShown==3?
 <CompSession/>:null
}

</div>

</div>




</div>
    <Footer/>

    </>

)


}