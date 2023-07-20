import React, { useState,useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../helper"

export default function Footer() {
	const [nomCateg_1, setnomCateg_1] = useState('');
	const [nomCateg_2, setnomCateg_2] = useState('');
	const [nomCateg_3, setnomCateg_3] = useState('');
	const [nomCateg_4, setnomCateg_4] = useState('');
	const [dataCtegorie, setDataCtegorie] = useState([]);

	useEffect(() => {
   
		const fetchData = async () => {
		  const res = await axios.get(`${BASE_URL}/categorie/getAllCategorie`);
		  setDataCtegorie(res.data);
		};
		 fetchData();
	  }, []);
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
	
		}
	  }, [dataCtegorie]);
    
return (  
		

	<div className="footer bg-grey-5 text-light py-6">
	<div className="max-w-grid mx-auto">

				<div className="pl-6 lg:pl-0 max-w-128 mx-auto">
			
			<img  style={{width:"150px",height:"100px",marginLeft:"27%"}} src='../../../img/logo_victis.png'/>

									<div className="flex lg:hidden"style={{marginLeft:"22%",marginTop:"20px"}}>
									<a href="" target="" className="">
						<svg className="h-6 w-6 fill-none text-blue-2">
							<use href="#icon-twitter"></use>
						</svg>
					</a>
													<a href="" target="" className="ml-7">
						<svg className="h-6 w-6 fill-none text-blue-2">
							<use href="#icon-linkedin"></use>
						</svg>
					</a>
													<a href="" target="" className="ml-7">
						<svg className="h-6 w-6 fill-none text-blue-2">
							<use href="#icon-facebook"></use>
						</svg>
					</a>
													<a href="" target="" className="ml-7">
						<svg className="h-6 w-6 fill-none text-blue-2">
							<use href="#icon-youtube"></use>
						</svg> 
					</a>
							</div>
		</div>

				<div className="lg:flex lg:mt-12 lg:max-w-grid lg:mx-auto lg:pl-4 xl:pl-0">
			<nav className="mt-6 lg:hidden mx-auto flex flex-wrap max-w-128">
							<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="/categorie">
							<p className="text-o14 tracking-07 leading-22p text-grey-3 font-semibold uppercase"> Les Catégories </p></a>
													<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href={"/ListFormation/"+nomCateg_1}>
													 {nomCateg_1}
							</a>
													<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href={"/ListFormation/"+nomCateg_2}>
													 {nomCateg_2}
							</a>
													<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href={"/ListFormation/"+nomCateg_3}>
													 {nomCateg_3}
							</a>
													<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href={"/ListFormation/"+nomCateg_4}>
													 {nomCateg_4}
							</a>
							
																															
					
																									
						
												</nav>

									<div className="hidden lg:flex">
																				<nav className="flex flex-col pr-12 lg:w-196p">
																						
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="/categorie">
															<p className="text-o14 tracking-07 leading-22p text-grey-3 font-semibold uppercase"> Les Catégories </p>
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href={"/ListFormation/"+nomCateg_1}>
                                                             {nomCateg_1}
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href={"/ListFormation/"+nomCateg_2}>
                                                             {nomCateg_2}
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href={"/ListFormation/"+nomCateg_3}>
															 {nomCateg_3}
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href={"/ListFormation/"+nomCateg_4}>
															 {nomCateg_4}
								</a>
													</nav>
																									<nav className="flex flex-col pr-12 lg:w-196p">
															<p className="text-o14 tracking-07 leading-22p text-grey-3 font-semibold uppercase">
															A propos de nos formations :
								</p>
																						<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="./Reglement interieur.pdf" target="_blank">
                                                                                        Règlement intérieur
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="/financer">
                                                            Financer une formation
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="/mentionsLegales">
                                                            Mentions légales
								</a>
								<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="/politiqueConfidentialite">
								Politique de confidentialité
								</a>
													</nav>
																									<nav className="flex flex-col pr-12 lg:w-196p">
															<p className="text-o14 tracking-07 leading-22p text-grey-3 font-semibold uppercase">
                                                            BESOIN D'AIDE
								</p>
																						<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                                                        Contactez-nous
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                            Soutien
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="tel:+33 (0)9 63 22 47 40">
                                                            Téléphone
								</a>
													</nav>
												</div><div className="hidden lg:flex flex-col lg:w-196p">
									<a href="" target="" className="first:mt-0 mt-4 flex text-p16 text-light hover:text-grey-3 ease-400">
						<svg className="stroke-current fill-none w-6 h-6 mr-2">
							<use href="#icon-twitter"></use>
						</svg>
						Twitter
					</a>
													<a href="" target="" className="first:mt-0 mt-4 flex text-p16 text-light hover:text-grey-3 ease-400">
						<svg className="stroke-current fill-none w-6 h-6 mr-2">
							<use href="#icon-linkedin"></use>
						</svg>
						LinkedIn
					</a>
													<a href="" target="" className="first:mt-0 mt-4 flex text-p16 text-light hover:text-grey-3 ease-400">
						<svg className="stroke-current fill-none w-6 h-6 mr-2">
							<use href="#icon-facebook"></use>
						</svg>
						Facebook
					</a>
													<a href="" target="" className="first:mt-0 mt-4 flex text-p16 text-light hover:text-grey-3 ease-400">
						<svg className="stroke-current fill-none w-6 h-6 mr-2">
							<use href="#icon-youtube"></use>
						</svg>
						YouTube
					</a>
							</div>
						<div className="px-4 mt-8 lg:mt-0 max-w-128 mx-auto lg:w-368p grid:mx-0 grid:pr-0 ">
				<p className="mb-4 text-o14 tracking-07 text-grey-3 uppercase">
                S'abonner
				</p>

									<script type="text/javascript"></script>
                <div className="gf_browser_chrome gform_wrapper gform_legacy_markup_wrapper gform-theme--no-framework" data-form-theme="legacy" data-form-index="0" id="gform_wrapper_1">
                    <div >
                        <div className="gform-body gform_body"><ul id="gform_fields_1" className="gform_fields top_label form_sublabel_below description_below"><li id="field_1_1" className="gfield gfield--type-email gfield_contains_required field_sublabel_below gfield--no-description field_description_below hidden_label gfield_visibility_visible" data-js-reload="field_1_1"><label className="gfield_label gform-field-label">Email<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label><div className="ginput_container ginput_container_email relative">
                        <button type="submit" className="w-12 absolute inset-y-0 right-0 m-auto group"><svg className="mx-auto h-6 w-6 fill-none stroke-current text-grey-3 group-hover:text-grey-2"> <use href="#icon-send"></use> </svg></button></div></li></ul></div>
   
                        </div>
                        </div>

								<p className="mt-4 text-p14">
                                Entrez votre e-mail pour vous inscrire à notre newsletter et rester à jour sur les fonctionnalités et les versions.
				</p>
				<p className="mb-4 text-o14 tracking-07 text-grey-3 uppercase">
				Règlementaire
				</p>
				<img  style={{width:"150px",height:"100px",marginLeft:"27%"}} src='../../../img/logo/qualiopi-logo.png'/>

			</div>
		</div>
	
	</div>
</div>
)
}