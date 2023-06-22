
import React, {useState,useEffect} from "react"; 
import axios from "axios";
import {BASE_URL} from "../helper"


export default function DescFormation  () {
    const [data, setData] = useState([]);

    useEffect(() => {
    
		const fetchData = async () => {
		  const res = await axios.get(`${BASE_URL}/categorie/getAllCategorie`);
		  setData(res.data);
		};
		 fetchData();
	  }, []);
    return(
<>  
<section id="#video" className="video bg-dark text-light text-center">
	<div className="pt-8 pb-9 lg:pt-24 lg:pb-32 px-4 grid:px-0 max-w-grid mx-auto">
		<h6 className="text-o14 tracking-07 md:text-o18 font-semibold uppercase"></h6>
		<h3 className="mt-1 md:mt-2 text-h2Sm md:text-h3 font-semibold">Découvrez le logiciel de CAO 3D standard SOLIDWORKS</h3>
		<br/>
		<img className="wistia_embed" src='../../img/imageSolidwork.jpg' width="100%"/>
<script src="./SOLIDWORKS Standard 3D Modeling CAD Software, Buy Online Now_files/E-v1.js.téléchargement" async=""></script>

	</div>
</section>

	<section className="related-products" >
	<div className=" mx-auto " style={{width:"80%"}}>
		<div className="px-4 grid:px-0 flex justify-between">
			<h3 className="text-h2Sm md:text-h2" id="produit">Produits connexes</h3>
							<a href="/categorie" className="button-link inline-flex items-center font-semibold text-blue-4 hover:text-blue-2 hidden grid:flex text-link21 ease-400" style={{marginRight:"15%"}} target="_self">Voir tout 
	<svg className="ml-2 h-6 w-6 stroke-current " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path className="stroke-current" d="M2 12.5h20" strokeWidth="2" strokeMiterlimit="10"></path>
		<path className="stroke-current" d="M15 5.5l7 7-7 7" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
	</svg>
</a>
					</div> 
					<div className="box-container-categ" >
			
					<div className="boxforme" style={{marginLeft:"2px",width:"300px"}}>
										
	
										<a 	href={"/ListFormation/"+data[0].nom}>
										<img className="lozad  object-cover   transition-transform transform duration-750 group-hover:scale-105 ease-in-out"
											style={{width:"300px",height:"250px"}}	src={data[0].photo} alt={data[0].photo}/>
											</a> 
									<div style={{   alignItems: "center",justifyContent:"center",position:"relative",paddingTop:"auto"}}> 
										<a href={"/ListFormation/"+data[0].nom}>
										<h5 style={{fontSize:"20px"}}>Formations {data[0].nom}</h5>
										</a>
																</div>
																</div>
						<div className="boxforme" style={{marginLeft:"2px",width:"300px"}}>
										
	
										<a 	href={"/ListFormation/"+data[1].nom}>
										<img className="lozad  object-cover   transition-transform transform duration-750 group-hover:scale-105 ease-in-out"
											style={{width:"300px",height:"250px"}}	src={data[1].photo} alt={data[1].photo}/>
											</a> 
									<div style={{   alignItems: "center",justifyContent:"center",position:"relative",paddingTop:"auto"}}> 
										<a href={"/ListFormation/"+data[1].nom}>
										<h5 style={{fontSize:"20px"}}>Formations {data[1].nom}</h5>
										</a>
																</div>
							</div>
					<div className="boxforme" style={{marginLeft:"2px",width:"300px"}}>
										
	
										<a 	href={"/ListFormation/"+data[2].nom}>
										<img className="lozad  object-cover   transition-transform transform duration-750 group-hover:scale-105 ease-in-out"
											style={{width:"300px",height:"250px"}}	src={data[2].photo} alt={data[2].photo}/>
											</a> 
									<div style={{   alignItems: "center",justifyContent:"center",position:"relative",paddingTop:"auto"}}> 
										<a href={"/ListFormation/"+data[2].nom}>
										<h5 style={{fontSize:"20px"}}>Formations {data[2].nom}</h5>
										</a>
																</div>
						</div>
					<div className="boxforme" style={{marginLeft:"2px",width:"300px"}}>
										
	
										<a 	href={"/ListFormation/"+data[3].nom}>
										<img className="lozad  object-cover   transition-transform transform duration-750 group-hover:scale-105 ease-in-out"
											style={{width:"300px",height:"250px"}}	src={data[3].photo} alt={data[3].photo}/>
											</a> 
									<div style={{   alignItems: "center",justifyContent:"center",position:"relative",paddingTop:"auto"}}> 
										<a href={"/ListFormation/"+data[3].nom}>
										<h5 style={{fontSize:"20px"}}>Formations {data[3].nom}</h5>
										</a>
																</div>
						</div>
				
									</div>
		<div className="px-4 mt-8 grid:hidden">
			<a className="button-outline text-button16 tracking-16 w-full" href="/categorie" target="_self">Voir tout</a>
		</div>
	</div>
</section>
</>
    )
        }