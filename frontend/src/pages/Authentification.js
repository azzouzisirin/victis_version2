import React, { useState } from "react";
import axios from "axios";
import {BASE_URL} from "../helper"

import {  useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ContuctUs from '../components/ContuctUs';
export default function Authentification() {
	const navigate = useNavigate();
 
	const [email, setemail] = useState();
   
	const [password, setpassword] = useState({ email: "", password: "" });
  
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
		  const config = {
			headers: { 
			  "Content-type": "application/json",
			},
		  };
		  const     res = await axios.post(
		  BASE_URL+ "/utilisateur/login",  
			{
			  email:email,
			  password:password,
			},config
		  );
		if(res.data._id){
		  toast.error(res.data._id)
	
		  localStorage.setItem("user", JSON.stringify(res.data));
	
		  navigate('/dashbord')
	 
		}else{
		  toast.error(res.data.resultat)
	
		}
	   
		} catch (ex) {
		  console.log(ex);
		}
	  };
    return ( 
		<> 
		<NavBar/>
<div className="page-template page-template-page-simple page-template-page-simple-php page page-id-9 wp-embed-responsive theme-pyxl-scry woocommerce-account woocommerce-page woocommerce-js" data-template="base.twig">

		

					<h1 className="screen-reader-text" href="#content">
				
			</h1>
		
		<main role="main">
				<section className="page py-5 md:py-13 text-dark">
	
		<div className="content-wrapper max-w-grid mx-auto ">
			<article className="post-type-page" id="post-9">
				<section className="article-content">
										<div className="article-body">
			

<div className="woocommerce"><div className="woocommerce-notices-wrapper"></div>

		<h2>Connexion</h2>

		
    
		<form className="woocommerce-form woocommerce-form-login login" onSubmit={(e) => handleSubmit(e)}>
     
		<br/>
          <label htmlFor="email">Email</label>
          <br/>
          <input
            type="email"
            name="email"
            placeholder="Email"
			value={email}
            onChange={e => {setemail(e.target.value)} }
          />

		<br/><br/>
          <label htmlFor="email">Mot de passe</label>
          <br/>
          <input
            type="text"
            placeholder="Password"
            name="password"
			value={password}
            onChange={e => {setpassword(e.target.value)} }
          />
        <br/>		<br/><br/>

        <button type="submit" style={{width:"90px",height:"40px",background:"DodgerBlue",color:"white",marginLeft:"45%"}}>Login</button>
      
      </form>

</div>

					</div>
				</section>
			</article>
		</div>
	</section>
		</main>

		<Toaster   position="bottom-right"  toastOptions={{
          success: {
            style: {
              width: '700px',
              height:'70px',
              border:'green',
              borderStyle: "solid",
              fontSize:'25px',
            },
          },
          error: {
            style: {
              width: '700px',
              height:'70px',
              border:'red',
              borderStyle: "solid",
              fontSize:'25px',
      
            },
          }, 
        }}
        reverseOrder={false}/>
						
		</div>
		<ContuctUs/>
<Footer/>
    </>
		)
		}