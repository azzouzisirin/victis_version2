import React from 'react';


export default function Footer() {
 

    
return (  
		

	<div className="footer bg-grey-5 text-light py-6">
	<div className="max-w-grid mx-auto">

				<div className="pl-6 lg:pl-0 max-w-128 mx-auto">
			
			<img className="lg:mx-auto" style={{width:"150px",height:"100px"}} src='../../img/logo_victis.png'/>

									<div className="mt-8 flex lg:hidden">
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
							Les Catégories
							</a>
													<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Software
							</a>
													<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Services
							</a>
													<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Training
							</a>
													<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Staffing
							</a>
													<a className="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Resources
							</a>
																															
						<div x-data="{ open: false}"  className="w-full xs-lg:w-1/2 lg:hidden" >
							<button  className="footer__menu-head px-6 py-5 lg:p-0 lg:pt-4 text-link16 font-semibold w-full ease-200 hover:text-grey-3 text-left flex justify-between" aria-controls="footer-dropdown-1">
								About
								<figure className="ml-auto inline h-6 w-6 relative">
									<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
										<use href="#icon-plus"></use>
									</svg>
									<svg className="absolute inset-0 w-full h-full stroke-current text-blue-2">
										<use href="#icon-minus"></use>
									</svg>
								</figure>
							</button>
							<nav  className="footer__menu-subnav mx-5 border-b-2 border-clear transition-max-h duration-500 ease-in-out max-h-0 overflow-hidden" id="footer-dropdown-1"  aria-hidden="true">
																	<a className="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Our Company
									</a>
																	<a className="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Careers
									</a>
																	<a className="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Locations
									</a>
															</nav>
						</div>
																									
						<div x-data="{ open: false}"  className="w-full xs-lg:w-1/2 lg:hidden" >
							<button  className="footer__menu-head px-6 py-5 lg:p-0 lg:pt-4 text-link16 font-semibold w-full ease-200 hover:text-grey-3 text-left flex justify-between" aria-controls="footer-dropdown-2">
								Need Help?
								<figure className="ml-auto inline h-6 w-6 relative">
									<svg  className="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
										<use href="#icon-plus"></use>
									</svg>
									<svg className="absolute inset-0 w-full h-full stroke-current text-blue-2">
										<use href="#icon-minus"></use>
									</svg>
								</figure>
							</button>
							<nav  className="footer__menu-subnav mx-5 border-b-2 border-clear transition-max-h duration-500 ease-in-out max-h-0 overflow-hidden" id="footer-dropdown-2"  aria-hidden="true">
																	<a className="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Contact Us
									</a>
																	<a className="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Support 
									</a>
																	<a className="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="tel:+33 (0)9 63 22 47 40">
										Phone
									</a>
															</nav>
						</div>
												</nav>

									<div className="hidden lg:flex">
																				<nav className="flex flex-col pr-12 lg:w-196p">
																						
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="/categorie">
															Les Catégories 
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="">
                                                            Prestations de service
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="">
                                                            Entraînement
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="">
                                                            Recrutement
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="">
									Actualités
								</a>
													</nav>
																									<nav className="flex flex-col pr-12 lg:w-196p">
															<p className="text-o14 tracking-07 leading-22p text-grey-3 font-semibold uppercase">
                                                            À propos
								</p>
																						<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                                                        Notre compagnie
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                            Carrières
								</a>
															<a className="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                            Emplacements
								</a>
													</nav>
																									<nav className="flex flex-col pr-12 lg:w-196p">
															<p className="text-o14 tracking-07 leading-22p text-grey-3 font-semibold uppercase">
                                                            Besoin d'aide?
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
			</div>
		</div>
	
	</div>
</div>
)
}