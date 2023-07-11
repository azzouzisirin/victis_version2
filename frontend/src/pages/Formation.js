import React, { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../helper"
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ContuctUs from '../components/ContuctUs';
import ModelInscrit from '../components/ModelInscrit'
export default function Formation() {
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
    
		

    <h1 class="screen-reader-text" href="#content">
				
                </h1>
            
            <main role="main">
                    <div class="content-wrapper">
            <article class="post-type-page" id="post-551">
                <section class="article-content">
                                    <div class="article-body">
                        
    <section class="hero hero--gradient  bg-dark">
        <div class="hero__wrapper md:h-852p relative -md:pb-8 overflow-hidden">
            <div class="hero__asset absolute w-full h-481p md:h-full z-10 overflow-hidden inset-0">
                                <img decoding="async" class="lozad w-full h-full object-cover" srcset="./img/Training-BG-image-8.png 1825w, ./img/Training-BG-image-8-300x178.png 300w, ./img/Training-BG-image-8-1024x606.png 1024w, ./img/Training-BG-image-8-768x455.png 768w, ./img/Training-BG-image-8-1536x909.png 1536w, ./img/Training-BG-image-8-2048x1212.png 2048w, ./img/Training-BG-image-8-600x355.png 600w" src="./ssssssssssssssssss_files/Training-BG-image-8.png" alt="VICTIS Training" data-loaded="true"/>
                        </div>
            <div class="hero__content -md:pt-56 relative max-w-grid mx-auto flex flex-col justify-end md:justify-center z-20 h-full ml-0 md:ml-auto text-light">
                <div class="hero__content-inner lg:w-2/3 px-4 pb-4 xl:pl-0 md:pr-20">
                                    
                                                        <h1 class="md:-ml-2p hero__heading font-semibold text-h1Sm md:text-hero">Formation spécialisée à tous les niveaux</h1>
                        <p class="hero__description text-p18 md:text-sub text-left mt-5"></p>
                    
    
                                    
                                    <div class="flex">
                                                            </div>
                </div>
            </div>
        </div> 
    </section>
    
    
    
    <section class="blurbs bg-grey-5 pt-1 pb-10 lg:pt-11 lg:pb-22 text-light">
            <div class="max-w-grid mx-auto px-4 xl:px-0 flex flex-col lg:flex-row">
                        <div class="flex-1 flex flex-col min-h-full lg:pr-12 lg:last:pr-6">
                    <h4 class="pt-10 text-h4Sm md:text-h4 font-semibold">55+ Cours</h4>
                    <p class="mt-2 md:mt-4 text-p16 md:text-p18 text-grey-2">Vous souhaitez optimiser les avantages de votre logiciel de CAO 3D SOLIDWORKS ou de votre imprimante 3D Stratasys ? Nous avons les cours pour vous permettre de maîtriser les fondamentaux ou d'obtenir une formation avancée, à tous les niveaux.</p>
                                </div>
                        <div class="flex-1 flex flex-col min-h-full lg:pr-12 lg:last:pr-6">
                    <h4 class="pt-10 text-h4Sm md:text-h4 font-semibold">Instructeurs certifiés</h4>
                    <p class="mt-2 md:mt-4 text-p16 md:text-p18 text-grey-2">Personne ne bat notre équipe de formateurs ! Apprenez des experts les plus qualifiés de l'industrie et améliorez vos compétences dans l'un de nos cours disponibles. </p>
                                </div>
                        <div class="flex-1 flex flex-col min-h-full lg:pr-12 lg:last:pr-6">
                    <h4 class="pt-10 text-h4Sm md:text-h4 font-semibold">Train de n'importe où</h4>
                    <p class="mt-2 md:mt-4 text-p16 md:text-p18 text-grey-2">Suivez un cours de formation en direct en ligne ou dans l'un des centres de formation agréés SOLIDWORKS de TriMech situés dans l'est des États-Unis et à travers le Canada. Nous offrons des cours de formation en ligne et en personne pour tous les niveaux d'utilisateurs.</p>
                                </div>
                </div>
    </section>
    
    
    <section class="training-list">
        <div class="max-w-grid mx-auto"> 
            <section class="mt-4 lg:mt-14 w-full flex">
                <div class="px-5 w-full grid:-ml-5 grid:pr-10 lg:w-270p lg:sticky lg:top-36 lg:max-h-80vh overflow-y-auto -lg:pb-16">
                    <p class="pb-3 mb-2 text-o18 tracking-09 uppercase font-semibold text-grey-3 border-b-1p border-grey-2">
                    Catégories de formation  
                    </p>


                    {data.map((item) => ( 
                  <a class="flex px-1 h-15 lg:h-auto lg:py-3 w-full items-center justify-between border-b-1p border-grey-2 lg:border-b-0 lg:text-p18 font-semibold lg:font-normal hover:text-blue-4 list-active-page ease-200" href={'/ListFormation/'+item.nom} target="_self">
                     {item.nom}
                       <svg class="lg:hidden pointer-events-none ml-auto transform -rotate-90 fill-none h-full w-6 text-blue-4">
                      <use href="#icon-chevron"></use>
                       </svg>
                        </a>
                    ))}
                  
                
                                </div>
                <div class="hidden flex-1 lg:flex pl-6 flex-wrap"> 
                {data.map((item) => ( 
    <div class="w-417p h-647p bg-light mb-12 lg-grid:mx-auto grid:odd:mr-auto grid:even:ml-auto hover-shadow flex flex-col group">
    <a class="overflow-hidden w-full  block" href={"/ListFormation/"+item.nom} target="_blank">
        <img decoding="async" class="lozad w-full h-full bg-grey-1 transition-transform transform duration-600 group-hover:scale-105 ease-in-out" style={{height:'280px'}} src={item.photo} alt=""/>
    </a>
    <a class="flex flex-col flex-1 px-6 py-5" href={"/ListFormation/"+item.nom} target="_blank">
        <p class="text-h4 font-semibold">
            {item.nom}
        </p>
        <p class="mt-2 text-p18 text-grey-4">
       {item.textHome}
         </p>
        <span class="button-link inline-flex items-center font-semibold text-blue-4 mt-auto text-p18 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 ">Voir tous les formations
<svg class="ml-2 h-6 w-6  stroke-current " fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
<path class="stroke-current" d="M2 12.5h20" stroke-width="2" stroke-miterlimit="10"></path>
<path class="stroke-current" d="M15 5.5l7 7-7 7" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
</svg>
</span>
    </a>
</div>
                ))}
                                    
                         
                                </div>
            </section>
        </div>
    </section>
    
                    </div>
                </section>
            </article>
        </div>
            </main>
    
    
        
    
    </>
)


}