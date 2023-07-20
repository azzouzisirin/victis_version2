import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams} from 'react-router-dom';

import {BASE_URL} from "../helper"
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
function ListFormation() {
	const [data, setData] = useState([]);
    const { nomCateg  } = useParams();
	const centerDivStyle = {
		display: 'flex',
		justifyContent:'center',
		alignItems:'center',
		width:"100%",height:"85px"
	  };
	useEffect(() => {
   
		const fetchData = async () => {
		  const res = await axios.get(`${BASE_URL}/formation/getByCategorie/`+nomCateg);
		  setData(res.data.allclients);
		};
		 fetchData();

	  }, []);
  return (
<>
<NavBar/>
<br/>
<div style={{textAlign:"center"}}>
			<h1 >Formations {nomCateg}</h1>
		</div>

		<main >
		<div className="box-container-categ" >
								{data.map((item) => (
										<div className="boxforme">
													<div style={{height:"80%"}}>
												<a href={"/DescriptFormation/"+nomCateg+"/"+item.nom}>
												<img 
	                                         style={{width:"400px",height:"100%"}}
														src={item.photo} alt={item.photo}/></a>
                              	</div>  <div style={centerDivStyle}>
										<a href={"/DescriptFormation/"+nomCateg+"/"+item.nom}>
										
											
														<h5 style={{fontSize:"22px"}}>Formations {item.nom}
														</h5>
												
											
											</a>
										</div>
									</div>
									 ))} 
								</div>
							
						</main>


    <Footer/>


</>


  )
}

export default ListFormation;