import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams} from 'react-router-dom';

import {BASE_URL} from "../helper"
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
function ListFormation() {
	const [data, setData] = useState([]);
    const { nomCateg  } = useParams();
	localStorage.setItem("nomCateg",nomCateg)

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
												<a href={"/DescriptFormation/"+item._id}>
												<img className="lozad  object-cover   transition-transform transform duration-750 group-hover:scale-105 ease-in-out"
	                                         style={{width:"400px",height:"250px"}}
														src={item.photo} alt={item.photo}/></a>
												<div style={{   alignItems: "center",justifyContent:"center",position:"relative",paddingTop:"auto"}}> 

										<a href={"/DescriptFormation/"+item._id}>
										
											
														<h5 style={{fontSize:"20px"}}>Formations {item.nom}
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