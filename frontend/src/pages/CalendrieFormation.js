import React, { useState } from 'react';

function CalendrieFormation() {
const [menuAffiche,setmenuAffiche]=useState(0)
const [clickCateg,setclickCateg]=useState(false)
const [clickFormation,setclickFormation]=useState(false)

const handleClickCateg = () => setclickCateg(!clickCateg);
const handleClickFormation = () => setclickFormation(!clickFormation);

  return (
<>

<nav className="w-full transform " style={{width:"600px",height:"100%"}}>
	{menuAffiche==0?	<div >
		<div className=" flex h-20 bg-grey-5 sticky top-0 z-10" >
		<img  width="80px" height="40px" style={{marginTop:"5px"}} src="../../img/logo_VICTIS.png" alt="logo"/>

								<button className="mobile-menu-close h-full self-start flex ml-auto" data-action="close"  >
									<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
										<use href="#icon-close"/>
									</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}} >
								<button style={{fontSize:"18px",color:"white",flex:"2",    lineHeight: "1.5",fontWeight:"bold"}} onClick={() =>setmenuAffiche(1)}>
								Formations
								</button>
								<button style={{flex:"1",paddingLeft:"195px"}} onClick={() =>setmenuAffiche(1)}>
								<svg class="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
						</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}} >
								<button style={{fontSize:"18px",color:"white",flex:"2", marginLeft:"50px",   lineHeight: "1.5",fontWeight:"bold"}} onClick={() =>setmenuAffiche(2)}>
								Prestations de service
								</button>
								<button style={{flex:"1",paddingLeft:"150px"}} onClick={() =>setmenuAffiche(2)} >
								<svg class="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
						</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}} >
								<button style={{fontSize:"18px",color:"white",flex:"2"  ,paddingLeft:"10px",  lineHeight: "1.5",fontWeight:"bold"}} onClick={() =>setmenuAffiche(3)}>
								Recrutement
								</button>
								<button style={{flex:"1",paddingLeft:"195px"}} onClick={() =>setmenuAffiche(3)} >
								<svg class="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
						</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}} onClick={() =>setmenuAffiche(4)}>
								<button style={{fontSize:"18px",color:"white",flex:"2" ,marginLeft:"-5px",    lineHeight: "1.5",fontWeight:"bold"}}>
								Actualités
								</button>
								<button style={{flex:"1",paddingLeft:"205px"}} onClick={() =>setmenuAffiche(4)}>
								<svg class="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
						</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}}>
								<button style={{fontSize:"18px",color:"white",flex:"2",marginLeft:"-10px",    lineHeight: "1.5",fontWeight:"bold"}} onClick={() =>setmenuAffiche(5)}>
								À propos
								</button>
								<button style={{flex:"1",paddingLeft:"212px"}} onClick={() =>setmenuAffiche(5)}>
								<svg class="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
						</svg>
								</button>
							</div>
						
    
</div>:null} 
{menuAffiche==1?
 <div style={{background:"#030b16"}}>
	<div className=" flex h-20 bg-grey-5 sticky top-0 z-10" >

		<div style={{color:'white',fontSize:'18px',margin:"30px",fontWeight:"bold",width:"500px"}}>
	<button onClick={() =>setmenuAffiche(0)}> <svg class="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
										<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="square"></path>
									</svg> 
									<p style={{marginLeft:"50px",marginTop:"-38px"}}>Formations</p></button>	</div>

		<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setmenuAffiche(0)} >
			<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
			<use href="#icon-close"/>
			</svg>
			</button>
	</div>
					<ul className="menu flex-col text-light">
			<li className="menu-item">
					<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" onClick={handleClickCateg} style={{marginLeft:'20px'}} >
						Les Catégories
							<figure className=" inline h-6 w-6 relative" >
							{clickCateg==true? <svg className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2" style={{marginLeft:"-60px"}} ><use href="#icon-minus"/></svg>:

								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2" style={{marginLeft:"-60px"}}><use href="#icon-plus"/></svg>}
							</figure>
						</button>
				{clickCateg==true?	<nav className="border-b-2 mx-5 border-clear  overflow-hidden transition-max-h duration-500 ease-in-out" >
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=3d-printing" target="">
									3D Printing
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=3d-scanners" target="">
									3D Scanners
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=fdm" target="">
									FDM
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=programmable-photopolymerization" target="">
									P3
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=electronic-printing" target="">
									PCB
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=polyjet" target="">
									PolyJet
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=post-processing" target="">
									Post-Processing
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=saf" target="">
									SAF
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=stereolithography" target="">
									Stereolithography
								</a>
														<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2 group" href="/hardware/technology" target="">
								Voir tout
								<svg className="ml-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 25">
									<path d="M2 12.5h20" stroke="#00B6FF" stroke-width="2" stroke-miterlimit="10"/>
									<path d="M15 5.5l7 7-7 7" stroke="#00B6FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
								</svg>
							</a>
						</nav>:null}
					</div>
									</li>
			<li className="menu-item">
						<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" onClick={handleClickFormation} style={{marginLeft:'20px'}}>
						Les Formations
						<figure className="ml-auto inline h-6 w-6 relative">
							{clickFormation==true? <svg className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2" style={{marginLeft:"-60px"}}><use href="#icon-minus"/></svg>:

								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2" style={{marginLeft:"-60px"}}><use href="#icon-plus"/></svg>}
							</figure>
						</button>
						{clickFormation==true?			<nav className="border-b-2 mx-5 border-clear  overflow-hidden transition-max-h duration-500 ease-in-out" >
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=aerospace" target="">
									Aerospace
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=automotive" target="">
									Automotive
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=consumer-goods" target="">
									Consumer Goods
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=dental" target="">
									Dental
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=education" target="">
									Education
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=energy" target="">
									Energy
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=engineering-services" target="">
									Engineering Services
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=government" target="">
									Government
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=industrial-manufacturing" target="">
									Industrial Manufacturing
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-industry=medical" target="">
									Medical
								</a>
														<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2 group" href="/hardware/industry" target="">
								Voir tout
								<svg className="ml-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 25">
									<path d="M2 12.5h20" stroke="#00B6FF" stroke-width="2" stroke-miterlimit="10"/>
									<path d="M15 5.5l7 7-7 7" stroke="#00B6FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
								</svg>
							</a>
						</nav>:null}
					</div>
									</li>
			<li className="menu-item" style={{marginLeft:'20px'}}>
																<a className="menu-link  flex items-center px-6 h-15 font-semibold hover:text-blue-2 ease-200" href="/product-category/hardware?product-promotion=new" target="">
						
																Nouveau
					</a>
									</li>
			<li className="menu-item" style={{marginLeft:'20px'}}>
																<a className="menu-link  flex items-center px-6 h-15 font-semibold hover:text-blue-2 ease-200" href="/product-category/hardware?product-promotion=best-sellers" target="">
						
																Promotions
					</a>
									</li>
		
	</ul>
</div>:null}

{menuAffiche==2?
 <div style={{background:"#030b16"}}>
	
	<div className=" flex h-20 bg-grey-5 sticky top-0 z-10" >

		<div style={{color:'white',fontSize:'18px',margin:"30px",fontWeight:"bold",width:"500px"}}>
	<button onClick={() =>setmenuAffiche(0)}> <svg class="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
										<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="square"></path>
									</svg> 
									<p style={{marginLeft:"50px",marginTop:"-38px"}}>Prestations de service</p></button>	</div>

		<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setmenuAffiche(0)} >
			<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
			<use href="#icon-close"/>
			</svg>
			</button>
	</div>
<ul className="menu flex-col text-light">
			<li className="menu-item">
					<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Analyse
							<figure className="ml-auto inline h-6 w-6 relative">
								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-analysis"/></svg>
							</figure>
						</button>
				
					</div>
									</li>
			<li className="menu-item">
			<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Automatisation des affaires
							<figure className="ml-auto inline h-6 w-6 relative">
								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
									<use href="#icon-data"/></svg>
							</figure>
						</button>
						
					</div>
								

								</li>
								<li className="menu-item">
			<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Gestion de données
							<figure className="ml-auto inline h-6 w-6 relative">
								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
									<use href="#icon-data"/></svg>
							</figure>
						</button>
						
					</div>
								

								</li>
								<li className="menu-item">
			<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Conception
							<figure className="ml-auto inline h-6 w-6 relative">
								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
									<use href="#icon-design"/></svg>
							</figure>
						</button>
						
					</div>
								

								</li>
								<li className="menu-item">
			<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Documentation
							<figure className="ml-auto inline h-6 w-6 relative">
								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
									<use href="#icon-info"/></svg>
							</figure>
						</button>
						
					</div>
								

								</li>
								<li className="menu-item">
			<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Électrique
							<figure className="ml-auto inline h-6 w-6 relative">
								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
									<use href="#icon-government"/></svg>
							</figure>
						</button>
						
					</div>
								

								</li>
								<li className="menu-item">
			<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						DoD / Government Services
							<figure className="ml-auto inline h-6 w-6 relative">
								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
									<use href="#icon-prototyping"/></svg>
							</figure>
						</button>
						
					</div>
								

								</li>
								<li className="menu-item">
			<div className="inline-menu"  >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						3D Printing &amp; Manufacturing
							<figure className="ml-auto inline h-6 w-6 relative">
								<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
									<use href="#icon-plus"/></svg>
							</figure>
						</button>
						
					</div>
								

								</li>
		
	                     </ul>
</div>:null}
{menuAffiche==3?
 <div style={{background:"#030b16"}}>
	<div className=" flex h-20 bg-grey-5 sticky top-0 z-10" >

<div style={{color:'white',fontSize:'18px',margin:"30px",fontWeight:"bold",width:"500px"}}>
<button onClick={() =>setmenuAffiche(0)}> <svg class="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
								<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="square"></path>
							</svg> 
							<p style={{marginLeft:"50px",marginTop:"-38px"}}>Recrutement</p></button>	</div>

<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setmenuAffiche(0)} >
	<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
	<use href="#icon-close"/>
	</svg>
	</button>
</div>

<ul className="menu flex-col text-light">
			<li className="menu-item">
					<div className="inline-menu" x-data="{open: false}" >
				
					<nav className="border-b-2 mx-5 border-clear transition-max-h duration-500 ease-in-out" >
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=3d-printing" target="">
									3D Printing
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=3d-scanners" target="">
									3D Scanners
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=fdm" target="">
									FDM
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=programmable-photopolymerization" target="">
									P3
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=electronic-printing" target="">
									PCB
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=polyjet" target="">
									PolyJet
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=post-processing" target="">
									Post-Processing
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=saf" target="">
									SAF
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="/product-category/hardware/?product-technology=stereolithography" target="">
									Stereolithography
								</a>
														<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2 group" href="/hardware/technology" target="">
								Voir tout
								<svg className="ml-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 25">
									<path d="M2 12.5h20" stroke="#00B6FF" stroke-width="2" stroke-miterlimit="10"/>
									<path d="M15 5.5l7 7-7 7" stroke="#00B6FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
								</svg>
							</a>
						</nav>
					</div>
									</li>

		
	                     </ul>
</div>:null}
{menuAffiche==4?
 <div style={{background:"#030b16"}}>
 <div className=" flex h-20 bg-grey-5 sticky top-0 z-10" >

<div style={{color:'white',fontSize:'18px',margin:"30px",fontWeight:"bold",width:"500px"}}>
<button onClick={() =>setmenuAffiche(0)}> <svg class="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
								<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="square"></path>
							</svg> 
							<p style={{marginLeft:"50px",marginTop:"-38px"}}>Actualités

</p></button>	</div>

<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setmenuAffiche(0)} >
	<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
	<use href="#icon-close"/>
	</svg>
	</button>
</div>
<ul className="menu flex-col text-light">
		 <li className="menu-item">
				 <div className="inline-menu"  >
					 <button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
					 Blog
						
					 </button>
			 
				 </div>
								 </li>
		 <li className="menu-item">
		 <div className="inline-menu"  >
					 <button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
					 Études de cas
					
					 </button>
					 
				 </div>
							 

							 </li>
							 <li className="menu-item">
		 <div className="inline-menu"  >
					 <button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
					 Infographie &amp; Guides
						
					 </button>
					 
				 </div>
							 

							 </li>
							 <li className="menu-item">
		 <div className="inline-menu"  >
					 <button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
					 Webinaires à la demande
						
					 </button>
					 
				 </div>
							 

							 </li>
							 <li className="menu-item">
		 <div className="inline-menu"  >
					 <button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
					 Séances de démonstration en ligne en direct
						
					 </button>
					 
				 </div>
							 

							 </li>
							 <li className="menu-item">
		 <div className="inline-menu"  >
					 <button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
					 Conseils techniques vidéo
						
					 </button>
					 
				 </div>
							 

							 </li>
							 <li className="menu-item">
		 <div className="inline-menu"  >
					 <button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
					 Obtenir une certification
						 
					 </button>
					 
				 </div>
							 

							 </li>
							 <li className="menu-item">
		 <div className="inline-menu"  >
					 <button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
					 MySolidWorks
						
					 </button>
					 
				 </div>
							 

							 </li>
	 
					  </ul>
</div>:null}
{menuAffiche==5?
 <div style={{background:"#030b16"}}>
	<div className=" flex h-20 bg-grey-5 sticky top-0 z-10" >

<div style={{color:'white',fontSize:'18px',margin:"30px",fontWeight:"bold",width:"500px"}}>
<button onClick={() =>setmenuAffiche(0)}> <svg class="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
								<path class="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="square"></path>
							</svg> 
							<p style={{marginLeft:"50px",marginTop:"-38px"}}>À propos</p></button>	</div>

<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setmenuAffiche(0)} >
	<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
	<use href="#icon-close"/>
	</svg>
	</button>
</div>

<ul className="menu flex-col text-light">
			<li className="menu-item">
					<div className="inline-menu" x-data="{open: false}" >
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Notre compagnie
						
						</button>
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Devenir un partenaire commercial VICTIS
						
						</button>
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Carrières
						
						</button>
						<button className="menu-link inline-flex items-center px-6 h-15 w-full justify-between font-semibold hover:text-blue-2" >
						Emplacements
						
						</button>
					</div>
									</li>
	
		
	                     </ul>
</div>:null}


<div class="px-4 py-8 bg-grey-5 sticky bottom-0 z-10">
			<a class="button-primary text-button16 tracking-08 " style={{width:'80%',margin:"auto"}} href="/contactUs" target="_self">Contact Us</a>
			<br/><br/>
			<a class="button-outline  text-button16 tracking-08 "style={{width:'80%',margin:"auto"}}  href="/soutien" target="_self">Get Support</a>
		</div>

</nav>



</>


  )
}

export default CalendrieFormation;