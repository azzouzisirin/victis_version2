
import React, { useState,useEffect } from "react";
import NavBar from '../components/Navbar';
import ContuctUs from '../components/ContuctUs';
import Comp_Article from '../components/Comp_Article';
import axios from "axios";  
import {BASE_URL} from "../helper" 
import Footer from '../components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
export default function Home() {
    const [showPanel, setshowPanel] = useState(0);
	const [clickIdeal,setclickIdeal]=useState(false)
	const [clickSimulation,setclickSimulation]=useState(false)
	const [clickPrototypage,setclickPrototypage]=useState(false)
	const [clickDocumentation,setclickDocumentation]=useState(false)
	const [clickProduction,setclickProduction]=useState(false)
	const [clickGestion,setclickGestion]=useState(false)

	const handleClickIdeal = () => setclickIdeal(!clickIdeal);
	const handleClickSimulation = () => setclickSimulation(!clickSimulation);
	const handleClickPrototypage = () => setclickPrototypage(!clickPrototypage);
	const handleClickDocumentation = () => setclickDocumentation(!clickDocumentation);
	const handleClickProduction = () => setclickProduction(!clickProduction);
	const handleClickGestion = () => setclickGestion(!clickGestion);
	const [dataCategorie, setdataCategorie] = useState([]);
	const [getAllCategorie, setgetAllCategorie] = useState([]);
	const [categorie, setcategorie] = useState('');
	const [textCategorie, settextCategorie] = useState('');

	const [DataFormation, setDataFormation] = useState('');
   const [NumOrdre, setNumOrdre]= useState('');


	const  srcImg = [
		{
		  id: '1',
		  src: './img/confiance/confiance_1.png',
		},
		{
		  id: '2',
		  src: './img/confiance/confiance_22.png',
		}
	  ];
	  const GetModulFormation =()=>{
        return (
			<section  className="flex justify-between w-full relative"  id="process-tab-0" >
	   <p className="process-tabs__number-showcase">{NumOrdre}</p>
		<div className="w-234p pr-2 z-10 mr-auto" style={{marginLeft:"-20px",width:"300px"}} >
		<h4 className="text-h2Sm font-semibold">Formations {categorie}</h4>
	<p className="mt-2 text-p18">{textCategorie}</p> 
	<a href={"/ListFormation/"+categorie} className="button-link inline-flex items-center font-semibold text-blue-4 hover:text-blue-2 mt-4 text-link18" target="">Voir tout
	<svg className="ml-2 h-6 w-6 stroke-current " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path className="stroke-current" d="M2 12.5h20" strokeWidth="2" strokeMiterlimit="10"/>
		<path className="stroke-current" d="M15 5.5l7 7-7 7" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
	</svg>
</a>
													</div>
								
								
							
							
{DataFormation[0]?
	<>
	<div className="w-270p mx-auto last:mr-0" >  

<figure className="w-full h-270p relative group cursor-pointer bg-grey-1">
	<a className="block w-full h-full" href={"/DescriptFormation/"+categorie+"/"+DataFormation[0].nom} target="_self">
		<img decoding="async" className="lozad w-full h-full object-contain p-4" src={DataFormation[0].photo} alt={DataFormation[0].photo}/>
	</a>
	
</figure>
<a className="block" href={"/DescriptFormation/"+categorie+"/"+DataFormation[0].nom} target="_self">
	<p className="mt-5 text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
	<p className="mt-2 text-p18">{DataFormation[0].nom}</p>

</a>
</div>
<div className="w-270p mx-auto last:mr-0" >  

			<figure className="w-full h-270p relative group cursor-pointer bg-grey-1">
				<a className="block w-full h-full" href={"/DescriptFormation/"+categorie+"/"+DataFormation[1].nom} target="_self">
					<img decoding="async" className="lozad w-full h-full object-contain p-4" src={DataFormation[1].photo} alt={DataFormation[1].photo}/>
				</a>
				<div className="px-4 w-full absolute z-20 inset-x-0 bottom-4 ">
					<button className="quickview-toggle hidden group-hover:block w-full py-4 bg-dark link-button18 tracking-16 font-semibold uppercase text-center hover:shadow-hover active:shadow-wider" data-product="5772">Aperçu rapide</button>
				</div>
			</figure>
			<a className="block" href={"/DescriptFormation/"+categorie+"/"+DataFormation[1].nom} target="_self">
				<p className="mt-5 text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
				<p className="mt-2 text-p18">{DataFormation[1].nom}</p>
			
			</a>
			</div>
			<div className="w-270p mx-auto last:mr-0" >  

<figure className="w-full h-270p relative group cursor-pointer bg-grey-1">
	<a className="block w-full h-full" href={"/DescriptFormation/"+categorie+"/"+DataFormation[2].nom} target="_self">
		<img decoding="async" className="lozad w-full h-full object-contain p-4" src={DataFormation[2].photo} alt={DataFormation[2].photo}/>
	</a>
	<div className="px-4 w-full absolute z-20 inset-x-0 bottom-4 ">
		<button className="quickview-toggle hidden group-hover:block w-full py-4 bg-dark link-button18 tracking-16 font-semibold uppercase text-center hover:shadow-hover active:shadow-wider" data-product="5772">Aperçu rapide</button>
	</div>
</figure>
<a className="block" href={"/DescriptFormation/"+categorie+"/"+DataFormation[2].nom} target="_self">
	<p className="mt-5 text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
	<p className="mt-2 text-p18">{DataFormation[2].nom}</p>

</a>
</div>

	
	</>:null}

			</section>
		)
	  }

	  useEffect(() => {
   
		const fetchData = async () => {
		  const res = await axios.get(`${BASE_URL}/categorie/getAllCategorie`);
		  setgetAllCategorie(res.data);
		  setcategorie(res.data[0].nom)
		  setNumOrdre(res.data[0].numOrdre)
		  settextCategorie(res.data[0].textHome)
		};
		 fetchData();
	  }, []); 
	  useEffect(() => {
      if(categorie){
		
		const fetchData = async () => { 
			const res = await axios.get(`${BASE_URL}/formation/getByCategorie/`+categorie);
			setDataFormation(res.data.allclients);
			setNumOrdre(res.data.categ.numOrdre)
		setcategorie(res.data.categ.nom) 
		settextCategorie(res.data.categ.textHome)
		  };
		   fetchData();
	  }
	  }, [categorie]);

	const renderSlides = () =>(
		
		srcImg.map((num) => (
      <img src={num.src} alt={num.src} key={num}/>
    ))
	)

return ( 

<div>
	 
		<NavBar/>

		
		
		<main role="main">
				<div className="content-wrapper">
		<article className="post-type-page" id="post-83">
			<section className="article-content">
								<div className="article-body">
					
<section className="hero hero--gradient  bg-dark">
	<div className="hero__wrapper md:h-852p relative -md:pb-8 overflow-hidden">
		<div className="hero__asset absolute w-full h-481p md:h-full z-10 overflow-hidden inset-0">
	<div className="">
		<img decoding="async" className="lozad w-full h-full object-cover md:hidden" srcSet="./img/VICTIS-ServiceListing-Hero-1.jpeg 1825w, ./img/VICTIS-ServiceListing-Hero-1-300x178.jpeg 300w, ./img/VICTIS-ServiceListing-Hero-1-1024x606.jpeg 1024w, ./img/VICTIS-ServiceListing-Hero-1-768x454.jpeg 768w, ./img/VICTIS-ServiceListing-Hero-1-1536x909.jpeg 1536w, ./img/VICTIS-ServiceListing-Hero-1-2048x1212.jpeg 2048w, ./img/VICTIS-ServiceListing-Hero-1-600x355.jpeg 600w" src="./img/VICTIS-ServiceListing-Hero-1.jpeg" alt="VICTIS Services"/></div>

                <video className="hidden md:block object-cover h-full w-full" src="./img/VICTIS-Hero_video_compressed.mp4" autoPlay muted loop></video>		
					</div>
		<div className="hero__content -md:pt-56 relative max-w-grid mx-auto flex flex-col justify-end md:justify-center z-20 h-full ml-0 md:ml-auto text-light">
			<div className="hero__content-inner lg:w-2/3 px-2 pb-4 xl:pl-0 md:pr-30">
													<p className="mb-3 md:mb-5 text-o14 md:text-o18 uppercase font-semibold text-grey-2">BIENVENUE CHEZ VICTIS</p>
				
													<h1 className="md:-ml-1p hero__heading font-semibold text-h1Sm md:text-hero" >Des solutions conçues par des experts spécialement pour vous</h1>
					<p className="hero__description text-p18 md:text-sub text-left mt-5">Innovation leader de l'industrie dirigée par des ingénieurs experts. Nous sommes VICTIS.</p>
				

								
								<div className="flex">
											<a className="button-primary flex justify-center items-center px-2 md:px-5 text-button14 tracking-14 md:text-button18 md:tracking-18 mt-9" href="/calendrier-formations" target="">
											Notre calendrier des formations
						</a>
														</div>
			</div>
		</div>
	</div>
</section> 

	<div className="hero-mobile-sticky-buttons flex fixed z-20 bottom-0 ease-200 opacity-0 pointer-events-none w-full px-4 py-6 bg-dark md:hidden">
					<a className="button-primary text-button16 tracking-16 md:text-button18 md:tracking-18" href="/PromoVictis" target="_blank">
				Artec 3D Scanner Promo
			</a>
					</div>


<section className="logos  bg-dark py-7 lg:pb-2 lg:pt-14 ">
	<div className="max-w-grid mx-auto text-light">
	<Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true} 
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>	</div>
</section>





<section className="featurette featurette--left  bg-dark text-light group">
	<div className="lg:h-706p flex flex-col lg:flex-row">
					<figure className="w-full lg:w-56pct overflow-hidden">
				<img decoding="async" className="lozad w-full h-full object-cover max-h-500p lg:max-h-none transition-transform transform duration-750 group-hover:scale-105 ease-in-out" src="./img/artec-3d-scanners.jpg" alt="Artec 3D Scanners"/>
			</figure>
				<div className="featurette__body flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 grid:px-100p pt-10 pb-14">
				<br/><br/>
			<hr className="w-10 h-0 border-t-2 border-blue-2"/>
			
			<p className="mt-6 text-o14 tracking-07 md:text-o18 md:tracking-09 font-semibold uppercase text-grey-2">Notre Top Vente</p>
			<h3 className="mt-2 text-h3Sm md:text-h1Sm font-semibold">Formations pour l'ingénierie mecanique</h3>
							<p className="mt-3 md:mt-4 text-p16 md:text-p18 text-grey-2">Les organisations à vocation technique et d'ingénierie ont autant besoin d'excellents ingénieurs que d'excellents gestionnaires et opérateurs. Les techniques d'ingénierie continuent d'évoluer à un rythme important, il est donc impératif que les ingénieurs en exercice doivent être en mesure de mettre à jour continuellement leurs compétences pour maintenir leur organisation à la pointe des meilleures pratiques. </p>

										
	
									</div>
	</div>
</section>


<section className="process-tabs  bg-dark text-light visiblebloc" >
	<div className="max-w-grid mx-auto pt-14 pb-12 lg:pt-130p lg:pb-24" >

		<div className="px-4 lg:text-center">
			<h3 className="text-h2Sm lg:text-h2 font-semibold">Gestion complète de la conception</h3>
			<p className="mt-2 lg:mt-3 text-p18 lg:text-sub lg:px-40 text-grey-2">VICTIS fournit des solutions d'ingénierie et de conception à la demande grâce à notre équipe dédiée d'ingénieurs de pointe. </p>
		</div>

				<div className="lg:hidden mt-6">
							<div  className="">
					<button  className="flex px-4 py-5 w-full" aria-controls="process-tab-mobile-0"onClick={handleClickIdeal}>
						<span className="bg-light text-dark px-2 rounded-full mr-2">1</span>
						<p className="text-link16 font-semibold">Idéation</p>
						<figure className="ml-auto inline h-6 w-6 relative">
						{clickIdeal==true? 	<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-minus"/></svg>
							:<svg className="absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-plus"/></svg>}
						</figure>
					</button>
					{clickIdeal==true?	<section  className="process-tabs__tab-content px-4 pt-5 pb-8 bg-grey-5"  id="process-tab-mobile-0">
						<p className="text-p16 opacity-80"> Notre processus d'idéation commence par concrétiser vos idées. Nous fournissons des solutions numériques qui créent les pièces et les environnements nécessaires pour tester vos théories.</p>
																			<div className="mt-8">
																	<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="SOLIDWORKS Standard 3D CAD Formation" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">Norme SOLIDWORKS</p>
											<p className="mt-2 text-link16 text-blue-4">
											Demander un devis																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
																										<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="Geomagic Design X Formation" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Logiciel</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">Conception Géomagique X</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
									<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="SOLIDWORKS Visualize Professional" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">SOLIDWORKS Visualize Professional</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
												</div>
								<a href="" className="button-outline mt-10 -lg:w-full" target="">Voir tout</a>
											</section>:null}
				</div>
							<div  className="">
					<button  className="flex px-4 py-5 w-full" aria-controls="process-tab-mobile-1" onClick={handleClickSimulation}>
						<span className="bg-light text-dark px-2 rounded-full mr-2">2</span>
						<p className="text-link16 font-semibold">Simulation</p>
						<figure className="ml-auto inline h-6 w-6 relative">
							<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-plus"/></svg>
							<svg className="absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-minus"/></svg>
						</figure>
					</button>
					{clickSimulation==true?
						<section x-show="open" className="process-tabs__tab-content px-4 pt-5 pb-8 bg-grey-5"  id="process-tab-mobile-1">
						<p className="text-p16 opacity-80">Avec nos outils, VICTIS&#8217;L'équipe de s vous permet de tester virtuellement les capacités de vos conceptions grâce à des cas physiques simulés tels que l'accélération, les forces et le volume.</p>
																			<div className="mt-8">
																	<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="SOLIDWORKS Simulation Professional FEA Formation" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">SOLIDWORKS Simulation Professional</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
																										<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">Simulation de flux SOLIDWORKS</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
									<hr className="my-8 h-px border-grey-4"/>
									<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="SOLIDWORKS Plastics Standard" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">Norme SOLIDWORKS sur les plastiques</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
									</div>
									<a href="" className="button-outline mt-10 -lg:w-full" target="">Voir tout</a>
											</section>:null}
				</div>
							<div  className="">
					<button  className="flex px-4 py-5 w-full" aria-controls="process-tab-mobile-2" onClick={handleClickPrototypage}>
						<span className="bg-light text-dark px-2 rounded-full mr-2">3</span>
						<p className="text-link16 font-semibold">Prototypage</p>
						<figure className="ml-auto inline h-6 w-6 relative">
							<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-plus"/></svg>
							<svg className="absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-minus"/></svg>
						</figure>
					</button>
					{clickPrototypage==true?	<section x-show="open"  className="process-tabs__tab-content px-4 pt-5 pb-8 bg-grey-5" id="process-tab-mobile-2">
						<p className="text-p16 opacity-80">Avec la numérisation 3D, notre équipe de prototypage rapide prend en charge la production de produits via les matériaux, la forme, l'ajustement et la couleur, permettant aux concepteurs de tester et de valider leurs produits. </p>
																			<div className="mt-8">
																	<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="makerbot method x" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Matériel</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">MakerBot METHOD X</p>
											<p className="mt-2 text-link16 text-blue-4">
																									&#36;6499
																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
																										<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="Stratasys J55 3D Printer" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Matériel</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">Stratasys J55</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																								</div>
																			<a href="" className="button-outline mt-10 -lg:w-full" target="">Voir tout</a>
											</section>:null}
				</div>
							<div  className="">
					<button className="flex px-4 py-5 w-full" aria-controls="process-tab-mobile-3" onClick={handleClickDocumentation}>
						<span className="bg-light text-dark px-2 rounded-full mr-2">4</span>
						<p className="text-link16 font-semibold">Documentation</p>
						<figure className="ml-auto inline h-6 w-6 relative">
							<svg className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-plus"/></svg>
							<svg className="absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-minus"/></svg>
						</figure>
					</button>
					{clickDocumentation==true?			<section x-show="open"  className="process-tabs__tab-content px-4 pt-5 pb-8 bg-grey-5" id="process-tab-mobile-3">
						<p className="text-p16 opacity-80">Notre processus de Documentation capture les paramètres et les résultats d'analyse pour établir avec succès un rapport sur les conditions physiques avant de poursuivre les tests.</p>
																			<div className="mt-8">
																	<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="SOLIDWORKS Composer Image &#038; Animation Formation" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">SOLIDWORKS Composer</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
																										<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="SOLIDWORKS MBD Standard Formation" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">SOLIDWORKS MBD Standard</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
																										<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="eDrawings Professional Formation" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">SOLIDWORKS eDrawings Professional</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																								</div>
																			<a href="" className="button-outline mt-10 -lg:w-full" target="">Voir tout</a>
											</section>:null}
				</div>
							<div  className="">
					<button className="flex px-4 py-5 w-full" aria-controls="process-tab-mobile-4" onClick={handleClickProduction}>
						<span className="bg-light text-dark px-2 rounded-full mr-2">5</span>
						<p className="text-link16 font-semibold">Production</p>
						<figure className="ml-auto inline h-6 w-6 relative">
							<svg className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-plus"/></svg>
							<svg className="absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-minus"/></svg>
						</figure>
					</button>
					{clickProduction==true?			<section x-show="open"  className="process-tabs__tab-content px-4 pt-5 pb-8 bg-grey-5" id="process-tab-mobile-4">
						<p className="text-p16 opacity-80">Notre équipe de production diligente permet aux concepteurs de fabriquer de véritables produits d'utilisation finale, de qualité garantie, améliorés par nos calculs en amont.</p>
																			<div className="mt-8">
																	<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">SOLIDWORKS FAO Professionnel</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
																										<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="Solidworks Inspection" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">Norme d'inspection SOLIDWORKS</p>
											<p className="mt-2 text-link16 text-blue-4">
																									&#36;386 &#8211; &#36;2410
																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
																										<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="Mastercam Mill Formation" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Logiciel Mastercam CAD/CAM pour l'usinage CNC, Logiciel</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">Moulin Mastercam</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																								</div>
																			<a href="" className="button-outline mt-10 -lg:w-full" target="">Voir tout</a>
											</section>:null}
				</div>
							<div  className="">
					<button className="flex px-4 py-5 w-full" aria-controls="process-tab-mobile-5" onClick={handleClickGestion}>
						<span className="bg-light text-dark px-2 rounded-full mr-2">6</span>
						<p className="text-link16 font-semibold">Gestion des produits</p>
						<figure className="ml-auto inline h-6 w-6 relative">
							<svg className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-plus"/></svg>
							<svg className="absolute inset-0 w-full h-full stroke-current text-blue-2"><use href="#icon-minus"/></svg>
						</figure>
					</button>
					{clickGestion==true?			<section x-show="open" className="process-tabs__tab-content px-4 pt-5 pb-8 bg-grey-5"  id="process-tab-mobile-5">
						<p className="text-p16 opacity-80">L'équipe d'experts en gestion de produits de VICTIS aide à inspecter, gérer et valider votre produit fini, garantissant ainsi des flux de travail et des processus efficaces.</p>
																			<div className="mt-8">
																	<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="SOLIDWORKS PDM Professional" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">SOLIDWORKS PDM Professional</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
																										<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation, 3DEXPERIENCE</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">Pack Gestionnaire de produits 3DEXPERIENCE</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																			<hr className="my-8 h-px border-grey-4"/>
																										<div className="flex h-121p hover:bg-grey-4">
										<a href="" target="_self" className=" w-121p h-full block">
											<img decoding="async" src="" alt="3DEXPERIENCE Enovia" className="lozad object-cover h-full w-full bg-grey-1"/>
										</a>
										<a href="" target="_self" className="flex-1 flex flex-col justify-center px-4">
											<p className="text-o14 font-semibold tracking-07 text-grey-2 uppercase">Formation, 3DEXPERIENCE</p>
																						<p className="mt-2 text-p18 max-h-54p overflow-hidden">3DEXPERIENCE Enovia Package</p>
											<p className="mt-2 text-link16 text-blue-4">
																									Demander un devis
																							</p>
										</a>
									</div>
																								</div>
																			<a href="" className="button-outline mt-10 -lg:w-full" target="">Voir tout</a>
											</section>:null}
				</div>
					</div>

				<div  className="hidden lg:block mt-14  grid:px-0">
			<div className="process-tabs__desktop-tabs flex justify-between w-full border-b-2 border-grey-3 relative z-20">
									<button className="process-tabs__tab flex -mb-2p" >
						<span className="process-tabs__tab-label inline-flex justify-start items-center h-full py-5 border-b-2 border-grey-3"   aria-controls="process-tab-0">
							<span className="process-tabs__tab-index bg-grey-3 text-dark px-2 rounded-full mr-2 font-semibold" >1</span>
						{getAllCategorie[0]?	<p className="process-tabs__tab-title text-grey-3 text-link16 font-semibold" onClick={()=>setcategorie(getAllCategorie[0].nom)} >{getAllCategorie[0].nom} </p>:null}
						</span>
					</button>
									<button className="process-tabs__tab flex -mb-2p" >
						<span className="process-tabs__tab-label inline-flex justify-start items-center h-full py-5 border-b-2 border-grey-3"  aria-controls="process-tab-1">
							<span className="process-tabs__tab-index bg-grey-3 text-dark px-7p rounded-full mr-2 font-semibold">2</span>
							{getAllCategorie[1]?	<p className="process-tabs__tab-title text-grey-3 text-link16 font-semibold" onClick={()=>setcategorie(getAllCategorie[1].nom)} >{getAllCategorie[1].nom} </p>:null}
						</span>
					</button>
					<button className="process-tabs__tab flex -mb-2p" >
						<span className="process-tabs__tab-label inline-flex justify-start items-center h-full py-5 border-b-2 border-grey-3"   aria-controls="process-tab-0">
							<span className="process-tabs__tab-index bg-grey-3 text-dark px-2 rounded-full mr-2 font-semibold" >3</span>
						{getAllCategorie[2]?	<p className="process-tabs__tab-title text-grey-3 text-link16 font-semibold" onClick={()=>setcategorie(getAllCategorie[2].nom)} >{getAllCategorie[2].nom} </p>:null}
						</span>
					</button>
					<button className="process-tabs__tab flex -mb-2p" >
						<span className="process-tabs__tab-label inline-flex justify-start items-center h-full py-5 border-b-2 border-grey-3"   aria-controls="process-tab-0">
							<span className="process-tabs__tab-index bg-grey-3 text-dark px-2 rounded-full mr-2 font-semibold" >4</span>
						{getAllCategorie[3]?	<p className="process-tabs__tab-title text-grey-3 text-link16 font-semibold" onClick={()=>setcategorie(getAllCategorie[3].nom)} >{getAllCategorie[3].nom} </p>:null}
						</span>
					</button>
					<button className="process-tabs__tab flex -mb-2p" >
						<span className="process-tabs__tab-label inline-flex justify-start items-center h-full py-5 border-b-2 border-grey-3"   aria-controls="process-tab-0">
							<span className="process-tabs__tab-index bg-grey-3 text-dark px-2 rounded-full mr-2 font-semibold" >5</span>
						{getAllCategorie[4]?	<p className="process-tabs__tab-title text-grey-3 text-link16 font-semibold" onClick={()=>setcategorie(getAllCategorie[4].nom)} >{getAllCategorie[4].nom} </p>:null}
						</span>
					</button>
					<button className="process-tabs__tab flex -mb-2p" >
						<span className="process-tabs__tab-label inline-flex justify-start items-center h-full py-5 border-b-2 border-grey-3"   aria-controls="process-tab-0">
							<span className="process-tabs__tab-index bg-grey-3 text-dark px-2 rounded-full mr-2 font-semibold" >6</span>
						{getAllCategorie[5]?	<p className="process-tabs__tab-title text-grey-3 text-link16 font-semibold" onClick={()=>setcategorie(getAllCategorie[5].nom)} >{getAllCategorie[5].nom} </p>:null}
						</span>
					</button>
							</div>
		<GetModulFormation />
		</div>

	</div>
</section>


<section className="featurette featurette--right  bg-dark text-light group">
	<div className="lg:h-706p flex flex-col lg:flex-row-reverse">
					<figure className="w-full lg:w-56pct overflow-hidden">
				<img decoding="async" className="lozad w-full h-full object-cover max-h-500p lg:max-h-none transition-transform transform duration-750 group-hover:scale-105 ease-in-out" src="./img/VICTISHomepage-Featurette-2@2x.jpg" alt=""/>
			</figure>
				<div className="featurette__body flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 grid:px-100p pt-10 pb-14">
			<hr className="w-10 h-0 border-t-2 border-blue-2"/>
			<p className="mt-6 text-o14 tracking-07 md:text-o18 md:tracking-09 font-semibold uppercase text-grey-2">SERVICES D'INGÉNIERIE</p>
			<h3 className="mt-2 text-h3Sm md:text-h1Sm font-semibold">Services d'ingénierie et de conception à la demande</h3>
							<p className="mt-3 md:mt-4 text-p16 md:text-p18 text-grey-2">De la conception et de l'analyse aux services de conseil d'experts, VICTIS offre un support de leadership en ingénierie à la demande et sur site.</p>
																							<a href="/service" className="button-link inline-flex items-center font-semibold text-blue-4 hover:text-blue-2 mt-6 md:mt-8 text-link16 md:text-link21" target="">Apprendre encore plus
	<svg className="ml-2 h-6 w-6 stroke-current " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path className="stroke-current" d="M2 12.5h20" strokeWidth="2" strokeMiterlimit="10"/>
		<path className="stroke-current" d="M15 5.5l7 7-7 7" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
	</svg>
</a>
									</div>
	</div>
</section>


<section className="featurette featurette--left  bg-dark text-light group">
	<div className="lg:h-706p flex flex-col lg:flex-row">
					<figure className="w-full lg:w-56pct overflow-hidden">
				<img decoding="async" className="lozad w-full h-full object-cover max-h-500p lg:max-h-none transition-transform transform duration-750 group-hover:scale-105 ease-in-out" src="./img/VICTIS-OurCompany-Featurette-Tab2@2x-1.jpeg" alt=""/>
			</figure>
				<div className="featurette__body flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 grid:px-100p pt-10 pb-14">
			<hr className="w-10 h-0 border-t-2 border-blue-2"/>
			<p className="mt-6 text-o14 tracking-07 md:text-o18 md:tracking-09 font-semibold uppercase text-grey-2">Formation</p>
			<h3 className="mt-2 text-h3Sm md:text-h1Sm font-semibold">Apprenez des meilleurs professionnels de l'industrie en ligne ou en personne</h3>
							<p className="mt-3 md:mt-4 text-p16 md:text-p18 text-grey-2">VICTIS propose une formation numérique en ligne et en personne dirigée par notre équipe d'ingénieurs hautement qualifiés pour tous les niveaux d'utilisateurs.</p>
																							<a href="" className="button-link inline-flex items-center font-semibold text-blue-4 hover:text-blue-2 mt-6 md:mt-8 text-link16 md:text-link21" target="">Apprendre encore plus
	<svg className="ml-2 h-6 w-6 stroke-current " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
		<path className="stroke-current" d="M2 12.5h20" strokeWidth="2" strokeMiterlimit="10"/>
		<path className="stroke-current" d="M15 5.5l7 7-7 7" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
	</svg>
</a>
									</div>
	</div>
</section>

<Comp_Article/>

				</div>
			</section>
		</article>
	</div>
		</main>
<ContuctUs/>

		
<Footer/>
	</div>
)

}