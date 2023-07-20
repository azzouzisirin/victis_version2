import React, { useState,useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../helper"
import logo_VICTIS from '../logo_victis.png';


import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    const [openPopup, setOpenPopup] = useState(false)
	const [MenuOpen, setMenuOpen] = useState(false);
	const [nomCateg_1, setnomCateg_1] = useState('');
	const [nomCateg_2, setnomCateg_2] = useState('');
	const [nomCateg_3, setnomCateg_3] = useState('');
	const [nomCateg_4, setnomCateg_4] = useState('');
	const [nomCateg_5, setnomCateg_5] = useState('');
	const [nomFormation_1, setnomFormation_1] = useState('');
	const [nomFormation_2, setnomFormation_2] = useState('');
	const [nomFormation_3, setnomFormation_3] = useState('');
	const [nomFormation_4, setnomFormation_4] = useState('');
	const [nomFormation_5, setnomFormation_5] = useState(''); 
	const [idFormation_1, setidFormation_1] = useState('');
	const [idFormation_2, setidFormation_2] = useState('');
	const [idFormation_3, setidFormation_3] = useState('');
	const [idFormation_4, setidFormation_4] = useState('');
	const [idFormation_5, setidFormation_5] = useState('');
		const [ isShownMenu, setisShownMenu] = useState(0);
		const [ cherche, setcherche] = useState('');
		const [ SearchFormation, setSearchFormation] = useState([]);

	const [dataCtegorie, setDataCtegorie] = useState([]);
	const [dataFormation, setDataFormation] = useState([]);
	const [menuAffiche,setmenuAffiche]=useState(0)
	const [clickCateg,setclickCateg]=useState(false)
	const [clickFormation,setclickFormation]=useState(false)
	
	const handleClickCateg = () => setclickCateg(!clickCateg);
	const handleClickFormation = () => setclickFormation(!clickFormation);
	useEffect(() => {
   
		const fetchData = async () => {
		  const res = await axios.get(`${BASE_URL}/categorie/getAllCategorie`);
		  setDataCtegorie(res.data);
		};
		 fetchData();
	  }, []);
	  useEffect(() => {
   
		const fetchData = async () => {
		  const res = await axios.get(`${BASE_URL}/formation/getAllFormation`);
		  setDataFormation(res.data);
		};
		 fetchData();
	  }, []);
	  useEffect(() => {
		const fetchData = async () => {
		  const res = await axios.get(`${BASE_URL}/formation/searchFormation?search=${cherche}`);
		  setSearchFormation(res.data);
		};
		fetchData()
	  }, [cherche]);
	  useEffect(() => {
   
		if(dataCtegorie){
         if(dataCtegorie[0]){
			setnomCateg_1(dataCtegorie[0].nom)
		 }
		 if(dataCtegorie[1]){
			setnomCateg_2(dataCtegorie[1].nom)
		 }
		 if(dataCtegorie[2]){
			setnomCateg_3(dataCtegorie[2].nom)
		 }
		 if(dataCtegorie[3]){
			setnomCateg_4(dataCtegorie[3].nom)
		 }
		 if(dataCtegorie[4]){
			setnomCateg_5(dataCtegorie[4].nom)
		 }
		}
	  }, [dataCtegorie]);
	  useEffect(() => {
   
		if(dataFormation){
         if(dataFormation[0]){
			setnomFormation_1(dataFormation[0].nom)
			setidFormation_1(dataFormation[0].categorie)

		 }
		 if(dataFormation[1]){
			setnomFormation_2(dataFormation[1].nom)
			setidFormation_2(dataFormation[1].categorie)

		 }
		 if(dataFormation[2]){
			setnomFormation_3(dataFormation[2].nom)
			setidFormation_3(dataFormation[2].categorie)

		 }
		 if(dataFormation[3]){
			setnomFormation_4(dataFormation[3].nom)
			setidFormation_4(dataFormation[3].categorie)

		 }
		 if(dataFormation[4]){
			setnomFormation_5(dataFormation[4].nom)
			setidFormation_5(dataFormation[4].categorie)

		 }
		}
	  }, [dataFormation]);
return ( 
		
		
<div role="navigation" className="body header w-full sticky top-0 z-40 " >

	<div className="top-bar w-full h-15 lg:h-12 pl-4 -lg:pr-4 flex bg-dark justify-between">
	
		<div className="right flex flex-auto ml-auto justify-end">
			
		{
        openPopup==true?
		<div className="right flex flex-auto ml-auto justify-end">
		<div role="search" className="max-w-8 transition-max-w duration-400 ease-in-out flex-1 my-1 mr-10p o:max-w-564p bg-grey-5 overflow-hidden">
		  <div className="relative h-full"><button className="left-4 inset-y-0 m-auto text-light hover:text-blue fill-none absolute"><svg className="stroke-current h-5 w-5"><use href="#icon-search"></use></svg></button>
		<div className="p-0 m-0 w-full h-full bg-clear">
			<input  type="text" onChange={e => setcherche( e.target.value )} value={cherche}  id="search-input" className="custom-tw pl-12 pr-4 w-full h-full text-light bg-clear border-none ease-300"/>
		</div>
		</div> 
		<div className="-lg:hidden search-modal-panel absolute inset-0 w-screen h-screen overflow-hidden mt-12 pb-12 z-50"><div className="w-full h-full bg-dark opacity-75 absolute inset-0 mt-12"></div>
		<div className="max-w-1248p mx-auto bg-light relative">
			<button className="w-12 h-12 flex absolute top-4 right-4 hover:border-2 hover:border-blue rounded-md active:bg-grey-1" onClick={() =>setOpenPopup(false)}>
			<svg className="m-auto h-5 w-5 text-dark">
			<use href="#icon-close"></use></svg></button>
			<div className="flex"><div className="bg-grey-1 w-1/4 px-12 pt-10 pb-20">
				<h5 className="o:-mt-2p pt-15 border-b-1p border-grey-2 w-full uppercase text-grey-3 text-o18 tracking-09 pb-2"> PARCOURIR LES CATÉGORIES </h5>
			<div >
				<a href={"/ListFormation/"+nomCateg_1} target="_self" className="block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400">Formations {nomCateg_1}</a>
		<a href={"/ListFormation/"+nomCateg_2} target="_self" className="block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400">Formations {nomCateg_2}</a>
		<a href={"/ListFormation/"+nomCateg_3} target="_self" className="block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400">Formations {nomCateg_3}</a>
		<a href={"/ListFormation/"+nomCateg_4} target="_self" className="block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400">Formations {nomCateg_4}</a>
		<a href={"/ListFormation/"+nomCateg_5} target="_self" className="block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400">Formations {nomCateg_5}</a></div>
		</div>
		<div className="flex-1 px-16 py-8">
			<h3 className="text-h3Sm font-normal mt-2p h-8 ease-200 opacity-0"> Press ENTER to see all results for "<span className="font-semibold"></span>" </h3><div className="flex pt-8"><div className="w-3/5 pr-12 -mt-15">
		<div><h5 className="pt-15 border-b-1p border-grey-2 w-full uppercase text-grey-3 text-o18 tracking-09 pb-2"> RECHERCHES RÉCENTES </h5><div>
		{SearchFormation[0]?	<a href={"/DescriptFormation/"+SearchFormation[0].categorie+"/"+SearchFormation[0].nom} target="_self" className="font-semibold block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400">{SearchFormation[0].nom}</a>:null}
		{SearchFormation[1]?	<a href={"/DescriptFormation/"+SearchFormation[0].categorie+"/"+SearchFormation[0].nom} target="_self" className="font-semibold block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400">{SearchFormation[1].nom}</a>:null}
		{SearchFormation[2]?	<a href={"/DescriptFormation/"+SearchFormation[0].categorie+"/"+SearchFormation[0].nom} target="_self" className="font-semibold block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400">{SearchFormation[2].nom}</a>:null}
		{SearchFormation[3]?	<a href={"/DescriptFormation/"+SearchFormation[0].categorie+"/"+SearchFormation[0].nom} target="_self" className="font-semibold block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400">{SearchFormation[3].nom}</a>:null}

		
			</div>
			</div>
		<div><h5 className="pt-15 border-b-1p border-grey-2 w-full uppercase text-grey-3 text-o18 tracking-09 pb-2"> RECHERCHES POPULAIRES </h5>
		<div>
			<a href={"/DescriptFormation/"+idFormation_1+"/"+nomFormation_1} target="_self" className="font-semibold block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400"> Formation {nomFormation_1}</a>
		<a href={"/DescriptFormation/"+idFormation_2+"/"+nomFormation_2} target="_self" className="font-semibold block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400"> Formation {nomFormation_2}</a>
		<a href={"/DescriptFormation/"+idFormation_3+"/"+nomFormation_3} target="_self" className="font-semibold block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400"> Formation {nomFormation_3}</a>
		<a href={"/DescriptFormation/"+idFormation_3+"/"+nomFormation_4} target="_self" className="font-semibold block text-link18 py-10p first:mt-2 list-active-page hover:text-blue ease-400"> Formation {nomFormation_3}</a>
		</div>
	
		</div>
		</div></div>
		</div>
		</div>
		</div>
		</div>
	
	
	
	
	 
	
	  </div>
	  </div>
		:
		<div id="search" role="search" className="relative max-w-8 transition-max-w duration-400 ease-in-out flex-1 my-1 flex">
				<button className="h-5 w-5 m-auto fill-none stroke-current text-light" onClick={() =>setOpenPopup(true)}><FaSearch /></button>
			</div>

		}
 
			<div className='menu-icone'  >
          <i className= 'fas fa-bars' onClick={() =>setMenuOpen(true)} />
        </div>

		

			<div className="header__top-bar-buttons hidden lg:flex items-center">
				<div className="divider h-7 py-2 ml-7 my-auto w-px inline-block border-l-1p border-r-1p border-grey-4"></div>
				<a href="/soutien" className="inline-block my-auto px-7 uppercase text-light text-button16 font-semibold tracking-16 hover:text-grey-2" target="_self">
				SOUTIEN
				</a>
				<a href="/contactUs" className="button-primary text-button16 tracking-16" target="_self">
				Contactez-nous
				</a>
			</div>
		</div>
	</div>

	<div className="menu-bar hidden lg:flex items-center justify-between h-16 pl-8 pr-6 relative bg-dark"> 
		<a href="/" target="_self" className="block h-8 my-auto">
			<img className=" hidden lg:block" width="95px" height="30px" style={{marginTop:"-40px"}} src={logo_VICTIS} alt="logo"/>
			
		</a>
		<nav className="header-menu list-none h-full"  >
							
		<div className="menu-item menu-item-L0 pl-2 grid:pl-8 menu-item-has-items inline-block h-full">
				<button 	 onMouseEnter={() => setisShownMenu(1)} className="h-full cursor-pointer inline-flex items-center text-light font-semibold text-link16"
>
						Formations 
		<svg className="ml-2 h-full w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
			<path d="M10.666 6.667L8 9.333 5.333 6.667" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
		</svg>
	</button>
						
				
									</div>
									<div className="menu-item menu-item-L0 pl-2 grid:pl-8 menu-item-has-items inline-block h-full">
				<a 	href="/calendrier-formations" className="h-full cursor-pointer inline-flex items-center text-light font-semibold text-link16">
				Calendrier 
	
	</a>
						
				
									</div>
							<div className="menu-item menu-item-L0 pl-2 grid:pl-8 menu-item-has-items inline-block h-full">
							<button 	  onMouseEnter={() => setisShownMenu(2)}   className="h-full cursor-pointer inline-flex items-center text-light font-semibold text-link16">
						Prestations de service
		<svg className="ml-2 h-full w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
			<path d="M10.666 6.667L8 9.333 5.333 6.667" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
		</svg>
	</button>
						
									</div>
						
							<div className="menu-item menu-item-L0 pl-2 grid:pl-8 menu-item-has-items inline-block h-full">
							<button 	  onMouseEnter={() => setisShownMenu(3)}   className="h-full cursor-pointer inline-flex items-center text-light font-semibold text-link16">
						Recrutement
		<svg className="ml-2 h-full w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
			<path d="M10.666 6.667L8 9.333 5.333 6.667" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
		</svg>
	</button>
		
									</div>
							<div className="menu-item menu-item-L0 pl-2 grid:pl-8 menu-item-has-items inline-block h-full">
							<button 	  onMouseEnter={() => setisShownMenu(4)}   className="h-full cursor-pointer inline-flex items-center text-light font-semibold text-link16">
						Actualités
		<svg className="ml-2 h-full w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
			<path d="M10.666 6.667L8 9.333 5.333 6.667" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
		</svg>
	</button>
						
									</div>
							<div className="menu-item menu-item-L0 pl-2 grid:pl-8 menu-item-has-items inline-block h-full">
							<button 	  onMouseEnter={() => setisShownMenu(5)}   className="h-full cursor-pointer inline-flex items-center text-light font-semibold text-link16">
						À propos
		<svg className="ml-2 h-full w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
			<path d="M10.666 6.667L8 9.333 5.333 6.667" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
		</svg>
	</button>
									</div>

								
       
					</nav>
	
    </div>
	{isShownMenu==1?<section style={{background:'#030b16',width:"100%",height:'750px',position:"absolute"}}  onMouseLeave={() => setisShownMenu(0)} >
			<div style={{width:"100%",height:"40px"}}></div>
			<div className="h-full relative max-w-grid mx-auto  grid:px-0 flex text-light" >

						<nav className="mega-menu-subnav  " style={{width:"700px"}}>
	<p className="text-o18 text-grey-3 tracking-09 uppercase font-semibold">Les Catégories</p>
		<ul>
						<a href={"/ListFormation/"+nomCateg_1} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Formations {nomCateg_1}</a>
								<a href={"/ListFormation/"+nomCateg_2} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Formations {nomCateg_2}</a>
						<a href={"/ListFormation/"+nomCateg_3} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Formations {nomCateg_3}</a>
								<a href={"/ListFormation/"+nomCateg_4} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
										 Formations {nomCateg_4}</a>
						<a href={"/ListFormation/"+nomCateg_5} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Formations {nomCateg_5}</a>
						
					
					</ul>
							<a href="/categorie" className="menu-item inline-flex items-center text-link18 text-light tracking-09 mt-3">Voir tout
	<svg className="ml-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path d="M2 12.5h20" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10"></path>
		<path d="M15 5.5l7 7-7 7" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
	</svg>
</a> 
			</nav>


	<nav className="mega-menu-subnav "style={{width:"700px"}}>
		<p className="text-o18 text-grey-3 tracking-09 uppercase font-semibold">Les Formations</p>
		<ul>
							<a href={"/DescriptFormation/"+idFormation_1+"/"+nomFormation_1} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Formations {nomFormation_1}</a>
							<a href={"/DescriptFormation/"+idFormation_2+"/"+nomFormation_2} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Formations {nomFormation_2}</a>
							<a href={"/DescriptFormation/"+idFormation_3+"/"+nomFormation_3} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Formations {nomFormation_3}</a>
							<a href={"/DescriptFormation/"+idFormation_4+"/"+nomFormation_4} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Formations {nomFormation_4}</a>
							<a href={"/DescriptFormation/"+idFormation_5+"/"+nomFormation_5} className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Formations {nomFormation_5}</a>
							
					</ul>
							<a href="/categorie" className="menu-item inline-flex items-center text-link18 text-light tracking-09 mt-3">Voir Tout
	<svg className="ml-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path d="M2 12.5h20" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10"></path>
		<path d="M15 5.5l7 7-7 7" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
	</svg>
</a>
			</nav>


	<nav className="mega-menu-subnav pr-11 w-280p">
		<p className="text-o18 text-grey-3 tracking-09 uppercase font-semibold"></p>
		<ul>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 font-semibold">
										Nouveau</a>
						
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 font-semibold">
							Promotions</a>
						
					</ul>
					</nav>


	<section className="bg-grey-5 p-4 pr-0 ml-auto h-496p text-light relative">
	<div className="relative z-10 w-320p">

		<h4 className="text-h3">Connecte-toi avec nous</h4>
		<p className="mt-2 text-p21">Vous cherchez des informations sur les produits ou vous avez quelques questions pour notre équipe ? Contactez-nous aujourd'hui!</p>
		<div className="mt-8">
							<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 drift-open-chat" href="" target="">
				
					<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/Message.svg" width="50px"/>
					Connectez-vous avec le chat
				</a>
							<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 " href="/contactUs" target="">
							<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/chat.svg"width="50px"/>

					Contactez-nous
				</a>
							<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 " href="tel:+33 (0)9 63 22 47 40" target="">
							<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/tel.svg"width="50px"/>

					+33 (0)9 63 22 47 40
				</a>
					</div>
	</div>
		<div className="absolute h-full w-screen left-full inset-0 z-0 bg-grey-5"></div>
</section>
			</div>
                     </section>:null}
	
					 {isShownMenu==2?		 <section style={{background:"#030b16",width:"100%",height:'750px',position:"absolute"}}  onMouseLeave={() => setisShownMenu(0)} >
							<div className="h-full relative max-w-grid mx-auto lg:px-4 grid:px-0 flex text-light">

						<nav className="mega-menu-subnav pr-11 w-410p">
		<p className="text-o18 text-grey-3 tracking-09 uppercase font-semibold">Prestations de service</p>
		<ul>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 font-semibold">
											<svg className="h-10 w-6 mr-3 stroke-current fill-none">
							<use href="#icon-analysis"></use>
						</svg>
						Analyse</a>

										<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 font-semibold">
											<svg className="h-10 w-6 mr-3 stroke-current fill-none">
							<use href="#icon-data"></use>
						</svg>
						Automatisation des affaires</a>
										
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 font-semibold">
											<svg className="h-10 w-6 mr-3 stroke-current fill-none">
							<use href="#icon-data"></use>
						</svg>
						Gestion de données</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 font-semibold">
											<svg className="h-10 w-6 mr-3 stroke-current fill-none">
							<use href="#icon-design"></use>
						</svg>
						Conception</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 font-semibold">
							<svg class="h-10 w-6 mr-3 stroke-current fill-none">
							<use href="#icon-documentation"></use>
						</svg>
						Documentation</a>
					
						
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 font-semibold">
											<svg className="h-10 w-6 mr-3 stroke-current fill-none">
							<use href="#icon-prototyping"></use>
						</svg>
										3D Printing &amp; Manufacturing</a>
							<a href="/service" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 font-semibold">
											<svg className="h-10 w-6 mr-3 stroke-current fill-none">
							<use href="#icon-plus"></use>
						</svg>
										Voir tout</a>
					</ul>
					</nav>


<div className="ml-auto pr-5">
	<section className="preview relative w-312p h-416p md:w-368p md:h-496p flex flex-col overflow-hidden">
	<figure className="absolute inset-0 w-full h-full overflow-hidden">
		<a href="" target="">
			<img className="lozad w-full h-full object-cover" src="../../../img/excellerant-feature.jpg" alt="Excellerant DNC Solution" data-loaded="true"/>
		</a>
	</figure>
					<a className="preview__body preview__body-featured flex flex-col mt-auto pt-22p pb-5 px-5 w-full bg-body-overlay z-10" href="" target="">
							<p className="text-o16 tracking-08 font-semibold uppercase text-grey-2 lg:mt-1 mb-2">Dernier service</p>
						<p className="text-h4 text-light">Excellente surveillance des machines CNC &amp; Plateforme IIoT</p>
			<div className="button-appear-link overflow-hidden mt-auto">
				<span className="button-link inline-flex items-center font-semibold text-blue-4 pt-2 text-link18 hover:text-blue-2 ">En savoir plus
	<svg className="ml-2 h-6 w-6  stroke-current " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path className="stroke-current" d="M2 12.5h20" strokeWidth="2" strokeMiterlimit="10"></path>
		<path className="stroke-current" d="M15 5.5l7 7-7 7" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
	</svg>
</span>
			</div>
		</a>
	</section>
</div>

	<section className="bg-grey-5 p-10 pr-0 ml-auto h-496p text-light relative">
	<div className="relative z-10 w-360p">

<h4 className="text-h3">Connecte-toi avec nous</h4>
<p className="mt-2 text-p21">Vous cherchez des informations sur les produits ou vous avez quelques questions pour notre équipe ? Contactez-nous aujourd'hui!</p>
<div className="mt-8">
					<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 drift-open-chat" href="" target="">
		
			<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/Message.svg" width="50px"/>
			Connectez-vous avec le chat
		</a>
					<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 " href="" target="">
					<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/chat.svg"width="50px"/>

			Contactez-nous
		</a>
					<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 " href="tel:+33 (0)9 63 22 47 40" target="">
					<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/tel.svg"width="50px"/>

			+33 (0)9 63 22 47 40
		</a>
			</div>
</div>
		<div className="absolute h-full w-screen left-full inset-0 z-0 bg-grey-5"></div>
</section>
			</div>
</section>:null}

{isShownMenu==3?	  <section style={{background:"#030b16",width:"100%",height:'750px',position:"absolute"}}  onMouseLeave={() => setisShownMenu(0)} >
	<div className="h-full relative max-w-grid mx-auto lg:px-4 grid:px-0 flex text-light">

						<nav className="mega-menu-subnav pr-11 w-420p">
		<p className="text-o18 text-grey-3 tracking-09 uppercase font-semibold">Recrutement</p>
		<ul>
							<a href="" className="h-7 flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
										</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Solutions de dotation en personnel d'ingénierie</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Solutions de dotation en personnel d'ingénierie</a>
					</ul>
					</nav>


<div className="ml-auto pr-5">
	<section className="preview relative w-312p h-416p md:w-368p md:h-496p flex flex-col overflow-hidden">
	<figure className="absolute inset-0 w-full h-full overflow-hidden">
		<a href="" target="">
			<img className="lozad w-full h-full object-cover" src="../../../img/Staffing-feature-736x996-2.webp" alt="VICTIS Staffing Services" data-loaded="true"/>
		</a>
	</figure>
					<a className="preview__body preview__body-featured flex flex-col mt-auto pt-22p pb-5 px-5 w-full bg-body-overlay z-10" href="" target="">
							<p className="text-o16 tracking-08 font-semibold uppercase text-grey-2 lg:mt-1 mb-2">Recrutement</p>
						<p className="text-h4 text-light">Pourquoi VICTIS Dotation?</p>
			<div className="button-appear-link overflow-hidden mt-auto">
				<span className="button-link inline-flex items-center font-semibold text-blue-4 pt-2 text-link18 hover:text-blue-2 ">En savoir plus
	<svg className="ml-2 h-6 w-6  stroke-current " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path className="stroke-current" d="M2 12.5h20" strokeWidth="2" strokeMiterlimit="10"></path>
		<path className="stroke-current" d="M15 5.5l7 7-7 7" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
	</svg>
</span>
			</div>
		</a>
	</section>
</div>

	<section className="bg-grey-5 p-10 pr-0 ml-auto h-496p text-light relative">
	<div className="relative z-10 w-360p">

		<h4 className="text-h3">Connecte-toi avec nous</h4>
		<p className="mt-2 text-p21">Vous cherchez des informations sur les produits ou vous avez quelques questions pour notre équipe ? Contactez-nous aujourd'hui!</p>
		<div className="mt-8">
							<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 drift-open-chat" href="" target="">
				
					<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/Message.svg" width="50px"/>
					Connectez-vous avec le chat
				</a>
							<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 " href="/contactUs" target="">
							<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/chat.svg"width="50px"/>

					Contactez-nous
				</a>
							<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 " href="tel:+33 (0)9 63 22 47 40" target="">
							<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/tel.svg"width="50px"/>

					+33 (0)9 63 22 47 40
				</a>
					</div>
	</div>
		<div className="absolute h-full w-screen left-full inset-0 z-0 bg-grey-5"></div>
</section>
			</div>
</section> :null}
{isShownMenu==4?	 
 <section style={{background:"#030b16",width:"100%",height:'750px',position:"absolute"}}  onMouseLeave={() => setisShownMenu(0)} >
	<div className="h-full relative max-w-grid mx-auto lg:px-4 grid:px-0 flex text-light">

						<nav className="mega-menu-subnav pr-11 w-260p">
		<p className="text-o18 text-grey-3 tracking-09 uppercase font-semibold">Types d'actualités</p>
		<ul>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
										Blog</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Études de cas</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Infographie &amp; Guides</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Webinaires à la demande</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Séances de démonstration en ligne en direct</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Conseils techniques vidéo</a>
							<a href="" className="h-7 flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
										</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Obtenir une certification</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
										MySolidWorks</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Groupes d'utilisateurs SOLIDWORKS</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Visites d'assistance aux clients VICTIS</a>
					</ul>
					</nav>


	<nav className="mega-menu-subnav pr-11 w-260p">
		<p className="text-o18 text-grey-3 tracking-09 uppercase font-semibold">Événements</p>
		<ul>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Événements en direct</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Salons professionnels</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Webinaires</a>
					</ul>
					</nav>


	<nav className="mega-menu-subnav pr-11 w-260p">
		<p className="text-o18 text-grey-3 tracking-09 uppercase font-semibold">Articles populaires</p>
		<ul>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Qu'est-ce que la 3DEXPERIENCE ?</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							La 3DEXPERIENCE fonctionne pour les startupss</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Événement technique à la demande</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Démonstrations des nouveautés de SOLIDWORKS 2023</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Conseils de mise à niveau SOLIDWORKS</a>
												</ul>
					</nav>


<div className="ml-auto pl-5">
	<section className="preview relative w-312p h-416p md:w-368p md:h-496p flex flex-col overflow-hidden">
	<figure className="absolute inset-0 w-full h-full overflow-hidden">
		<a href="" target="_blank">
			<img className="lozad w-full h-full object-cover" src="../../../img/erp-mes-category.jpg" alt="ERP and MES Category" data-loaded="true"/>
		</a>
	</figure>
					<a className="preview__body preview__body-featured flex flex-col mt-auto pt-22p pb-5 px-5 w-full bg-body-overlay z-10" href="" target="_blank">
							<p className="text-o16 tracking-08 font-semibold uppercase text-grey-2 lg:mt-1 mb-2">Ressource en vedette</p>
						<p className="text-h4 text-light">Nouveau site Web des solutions d'entreprise VICTIS</p>
			<div className="button-appear-link overflow-hidden mt-auto">
				<span className="button-link inline-flex items-center font-semibold text-blue-4 pt-2 text-link18 hover:text-blue-2 ">En savoir plus
	<svg className="ml-2 h-6 w-6  stroke-current " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path className="stroke-current" d="M2 12.5h20" strokeWidth="2" strokeMiterlimit="10"></path>
		<path className="stroke-current" d="M15 5.5l7 7-7 7" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
	</svg>
</span>
			</div>
		</a>
	</section>
</div>
			</div>
</section>:null}
 

{isShownMenu==5?	 
 <section style={{background:"#030b16",width:"100%",height:'750px',position:"absolute"}}  onMouseLeave={() => setisShownMenu(0)} >
	<div className="h-full relative max-w-grid mx-auto lg:px-4 grid:px-0 flex text-light">

						<nav className="mega-menu-subnav pr-11" style={{width:"1000px"}}>
		<p className="text-o18 text-grey-3 tracking-09 uppercase font-semibold">À propos</p>
		<ul>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Notre compagnie</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Devenir un partenaire commercial VICTIS</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Carrières</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Emplacements</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Nouvelles &amp; Promotions</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Inscription à la Newsletter</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Services de fabrication avancés VICTIS</a>
							<a href="" className="menu-item flex items-center text-link18 text-light tracking-09 mt-3 ease-200 ">
							Solutions d'entreprise VICTIS</a>
					</ul>
					</nav>


<div className="ml-auto pr-5">
	<section className="preview relative w-312p h-416p md:w-368p md:h-496p flex flex-col overflow-hidden">
	<figure className="absolute inset-0 w-full h-full overflow-hidden">
		<a href="" target="_blank">
			<img className="lozad w-full h-full object-cover" src="../../../img/post3.b54cf19b.jpg" alt="" data-loaded="true"/>
		</a>
	</figure>
					<a className="preview__body preview__body-featured flex flex-col mt-auto pt-22p pb-5 px-5 w-full bg-body-overlay z-10" href="" target="_blank">
							<p className="text-o16 tracking-08 font-semibold uppercase text-grey-2 lg:mt-1 mb-2">Rejoins notre équipe</p>
						<p className="text-h4 text-light">Voir toutes les offres d'emploi actuelles disponibles chez VICTIS</p>
			<div className="button-appear-link overflow-hidden mt-auto">
				<span className="button-link inline-flex items-center font-semibold text-blue-4 pt-2 text-link18 hover:text-blue-2 ">En savoir plus
	<svg className="ml-2 h-6 w-6  stroke-current " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path className="stroke-current" d="M2 12.5h20" strokeWidth="2" strokeMiterlimit="10"></path>
		<path className="stroke-current" d="M15 5.5l7 7-7 7" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
	</svg>
</span>
			</div>
		</a>
	</section>
</div>

	<section className="bg-grey-5 p-10 pr-0 ml-auto h-496p text-light relative">
	<div className="relative z-10 w-360p">

		<h4 className="text-h3">Connecte-toi avec nous</h4>
		<p className="mt-2 text-p21">Vous cherchez des informations sur les produits ou vous avez quelques questions pour notre équipe ? Contactez-nous aujourd'hui!</p>
		<div className="mt-8">
							<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 drift-open-chat" href="" target="">
				
					<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/Message.svg" width="50px"/>
					Connectez-vous avec le chat
				</a>
							<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 " href="/contactUs" target="">
							<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/chat.svg"width="50px"/>

					Contactez-nous
				</a>
							<a className="mt-5 text-link21 font-semibold flex hover:text-blue-2 " href="tel:+33 (0)9 63 22 47 40" target="">
							<img  className="icon  fill-none stroke-current text-blue-2 items-center mr-3" src="../../../img/tel.svg"width="50px"/>

					+33 (0)9 63 22 47 40
				</a>
					</div>
	</div>
		<div className="absolute h-full w-screen left-full inset-0 z-0 bg-grey-5"></div>
</section>
			</div>
</section>:null}
 
 {MenuOpen==true?
	<nav className="navmenu" style={{width:"90%"}} >
	{menuAffiche==0?	<div >
		<div className=" flex h-20 bg-grey-5 sticky top-0 z-10 "  >
		<img  width="95px" height="40px" style={{marginTop:"5px"}} src={logo_VICTIS} alt="logo"/>

								<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setMenuOpen(false)}  >
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
								<svg className="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
						</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}} >
								<button style={{fontSize:"18px",color:"white",flex:"2",    lineHeight: "1.5",fontWeight:"bold"}} >
								<a href="/calendrier-formations">Calendrier   </a>
								</button>
								<button style={{flex:"1",paddingLeft:"195px",visibility:"hidden"}} >
								<svg className="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
						</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}} >
								<button style={{fontSize:"18px",color:"white",flex:"2", marginLeft:'48px',   lineHeight: "1.5",fontWeight:"bold"}} onClick={() =>setmenuAffiche(2)}>
								Prestations de service
								</button>
								<button style={{flex:"1",paddingLeft:"150px"}} onClick={() =>setmenuAffiche(2)} >
								<svg className="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
						</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}} >
								<button style={{fontSize:"18px",color:"white",flex:"2"  ,paddingLeft:"10px",  lineHeight: "1.5",fontWeight:"bold"}} onClick={() =>setmenuAffiche(3)}>
								Recrutement
								</button>
								<button style={{flex:"1",paddingLeft:"195px"}} onClick={() =>setmenuAffiche(3)} >
								<svg className="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
						</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}} onClick={() =>setmenuAffiche(4)}>
								<button style={{fontSize:"18px",color:"white",flex:"2" ,marginLeft:"-5px",    lineHeight: "1.5",fontWeight:"bold"}}>
								Actualités
								</button>
								<button style={{flex:"1",paddingLeft:"205px"}} onClick={() =>setmenuAffiche(4)}>
								<svg className="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
						</svg>
								</button>
							</div>
							<div className=" flex h-20 bg-grey-5 sticky top-0 " style={{background:"#030b16"}}>
								<button style={{fontSize:"18px",color:"white",flex:"2",marginLeft:"-10px",    lineHeight: "1.5",fontWeight:"bold"}} onClick={() =>setmenuAffiche(5)}>
								À propos
								</button>
								<button style={{flex:"1",paddingLeft:"212px"}} onClick={() =>setmenuAffiche(5)}>
								<svg className="pointer-events-none  h-full w-9 transform -rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
						</svg>
								</button>
							</div>
						
    
</div>:null} 
{menuAffiche==1?
 <div style={{background:"#030b16"}}>
	<div className=" flex h-20 bg-grey-5 sticky top-0 z-10" >

		<div style={{color:'white',fontSize:'18px',margin:"30px",fontWeight:"bold",width:"500px"}}>
	<button onClick={() =>setmenuAffiche(0)}> <svg className="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
										<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="square"></path>
									</svg> 
									<p style={{marginLeft:"50px",marginTop:"-38px"}}>Formations</p></button>	</div>

		<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setMenuOpen(false)} >
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
				{clickCateg==true?	
				<nav className="border-b-2 mx-5 border-clear  overflow-hidden transition-max-h duration-500 ease-in-out" style={{marginLeft:"40px"}} >
						<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/ListFormation/"+nomCateg_1} target="">
						Formations {nomCateg_1}
								</a>
															<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/ListFormation/"+nomCateg_2} target="">
															Formations {nomCateg_2}
								</a> 
															<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/ListFormation/"+nomCateg_3} target="">
															Formations {nomCateg_3}
								</a>
															<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/ListFormation/"+nomCateg_4} target="">
															Formations {nomCateg_4}
								</a>
															<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/ListFormation/"+nomCateg_5} target="">
															Formations {nomCateg_5}
								</a>
								
														<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2 group" href="/categorie" target="">
								Voir tout
								<svg className="ml-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
									<path d="M2 12.5h20" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10"/>
									<path d="M15 5.5l7 7-7 7" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
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
						{clickFormation==true?			<nav className="border-b-2 mx-5 border-clear  overflow-hidden transition-max-h duration-500 ease-in-out" style={{marginLeft:"40px"}} >
						<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/DescriptFormation/"+idFormation_1+"/"+nomFormation_1} target="">
						Formations {nomFormation_1}
								</a>
															<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/DescriptFormation/"+idFormation_2+"/"+nomFormation_2} target="">
															Formations {nomFormation_2}
								</a>
															<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/DescriptFormation/"+idFormation_3+"/"+nomFormation_3} target="">
															Formations {nomFormation_3}
								</a>
															<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/DescriptFormation/"+idFormation_4+"/"+nomFormation_4} target="">
															Formations {nomFormation_4}
								</a>
															<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2" href={"/DescriptFormation/"+idFormation_5+"/"+nomFormation_5} target="">
															Formations {nomFormation_5}
								</a>
								
														<a className="menu-link  flex items-center px-6 h-10 hover:text-blue-2 group" href="/categorie" target="">
								Voir tout
								<svg className="ml-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
									<path d="M2 12.5h20" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10"/>
									<path d="M15 5.5l7 7-7 7" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
								</svg>
							</a>
						</nav>:null}
					</div>
									</li>
			<li className="menu-item" style={{marginLeft:'20px'}}>
																<a className="menu-link  flex items-center px-6 h-15 font-semibold hover:text-blue-2 ease-200" href="" target="">
						
																Nouveau
					</a>
									</li>
			<li className="menu-item" style={{marginLeft:'20px'}}>
																<a className="menu-link  flex items-center px-6 h-15 font-semibold hover:text-blue-2 ease-200" href="" target="">
						
																Promotions
					</a>
									</li>
		
	</ul>
</div>:null}

{menuAffiche==2?
 <div style={{background:"#030b16"}}>
	
	<div className=" flex h-20 bg-grey-5 sticky top-0 z-10" >

		<div style={{color:'white',fontSize:'18px',margin:"30px",fontWeight:"bold",width:"500px"}}>
	<button onClick={() =>setmenuAffiche(0)}> <svg className="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
										<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="square"></path>
									</svg> 
									<p style={{marginLeft:"50px",marginTop:"-38px"}}>Prestations de service</p></button>	</div>

		<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setMenuOpen(false)} >
			<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
			<use href="#icon-close"/>
			</svg>
			</button>
	</div>
<ul className="menu flex-col text-light" style={{marginLeft:"40px"}}>
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
<button onClick={() =>setmenuAffiche(0)}> <svg className="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
								<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="square"></path>
							</svg> 
							<p style={{marginLeft:"50px",marginTop:"-38px"}}>Recrutement</p></button>	</div>

<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setMenuOpen(false)} >
	<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
	<use href="#icon-close"/>
	</svg>
	</button>
</div>

<ul className="menu flex-col text-light" style={{marginLeft:"40px"}}>
			<li className="menu-item">
					<div className="inline-menu" x-data="{open: false}" >
				
					<nav className="border-b-2 mx-5 border-clear transition-max-h duration-500 ease-in-out" >
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="" target="">
									3D Printing
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="" target="">
									3D Scanners
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="" target="">
									FDM
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="" target="">
									P3
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="" target="">
									PCB
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="" target="">
									PolyJet
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="" target="">
									Post-Processing
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="" target="">
									SAF
								</a>
															<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2" href="" target="">
									Stereolithography
								</a>
														<a className="menu-link  flex items-center px-6 h-15 hover:text-blue-2 group" href="" target="">
								Voir tout
								<svg className="ml-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
									<path d="M2 12.5h20" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10"/>
									<path d="M15 5.5l7 7-7 7" stroke="#00B6FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
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
<button onClick={() =>setmenuAffiche(0)}> <svg className="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
								<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="square"></path>
							</svg> 
							<p style={{marginLeft:"50px",marginTop:"-38px"}}>Actualités

</p></button>	</div>

<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setMenuOpen(false)} >
	<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
	<use href="#icon-close"/>
	</svg>
	</button>
</div>
<ul className="menu flex-col text-light" style={{marginLeft:"40px"}}>
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
<button onClick={() =>setmenuAffiche(0)}> <svg className="pointer-events-none h-12 w-auto transform rotate-90 text-blue-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
								<path className="stroke-current" d="M10.666 6.667L8 9.333 5.333 6.667" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="square"></path>
							</svg> 
							<p style={{marginLeft:"50px",marginTop:"-38px"}}>À propos</p></button>	</div>

<button className="mobile-menu-close h-full self-start flex ml-auto" onClick={() =>setMenuOpen(false)} >
	<svg className="h-full w-16 text-blue-2 hover:bg-grey-4 mb-auto justify-center items-center flex p-4">
	<use href="#icon-close"/>
	</svg>
	</button>
</div>

<ul className="menu flex-col text-light" style={{marginLeft:"40px"}}>
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


<div className="px-4 py-8 bg-grey-5 sticky bottom-0 z-10">
			<a className="button-primary text-button16 tracking-08 " style={{width:'80%',margin:"auto"}} href="/contactUs" target="_self"> Contactez-nous</a>
			<br/><br/>
			<a className="button-outline  text-button16 tracking-08 "style={{width:'80%',margin:"auto"}}  href="/soutien" target="_self">Soutien </a>
		</div>

</nav>


:null 

}


</div>




)
}