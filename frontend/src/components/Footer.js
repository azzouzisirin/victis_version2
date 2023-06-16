import React from 'react';


export default function Footer() {
 

    
return (  
		

	<div class="footer bg-grey-5 text-light py-6">
	<div class="max-w-grid mx-auto">

				<div class="pl-6 lg:pl-0 max-w-128 mx-auto">
			
			<img className="lg:mx-auto" style={{width:"150px",height:"100px"}} src='../../img/logo_victis.png'/>

									<div class="mt-8 flex lg:hidden">
									<a href="" target="" class="">
						<svg class="h-6 w-6 fill-none text-blue-2">
							<use href="#icon-twitter"></use>
						</svg>
					</a>
													<a href="" target="" class="ml-7">
						<svg class="h-6 w-6 fill-none text-blue-2">
							<use href="#icon-linkedin"></use>
						</svg>
					</a>
													<a href="" target="" class="ml-7">
						<svg class="h-6 w-6 fill-none text-blue-2">
							<use href="#icon-facebook"></use>
						</svg>
					</a>
													<a href="" target="" class="ml-7">
						<svg class="h-6 w-6 fill-none text-blue-2">
							<use href="#icon-youtube"></use>
						</svg> 
					</a>
							</div>
		</div>

				<div class="lg:flex lg:mt-12 lg:max-w-grid lg:mx-auto lg:pl-4 xl:pl-0">
			<nav class="mt-6 lg:hidden mx-auto flex flex-wrap max-w-128">
							<a class="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="/categorie">
							Les Catégories
							</a>
													<a class="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Software
							</a>
													<a class="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Services
							</a>
													<a class="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Training
							</a>
													<a class="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Staffing
							</a>
													<a class="px-6 py-5 lg:p-0 lg:pt-4 block w-full xs-lg:w-1/2 text-link16 font-semibold hover:text-grey-3 ease-200" href="">
								Resources
							</a>
																															
						<div x-data="{ open: false}"  class="w-full xs-lg:w-1/2 lg:hidden" >
							<button  class="footer__menu-head px-6 py-5 lg:p-0 lg:pt-4 text-link16 font-semibold w-full ease-200 hover:text-grey-3 text-left flex justify-between" aria-controls="footer-dropdown-1">
								About
								<figure class="ml-auto inline h-6 w-6 relative">
									<svg  class="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
										<use href="#icon-plus"></use>
									</svg>
									<svg class="absolute inset-0 w-full h-full stroke-current text-blue-2">
										<use href="#icon-minus"></use>
									</svg>
								</figure>
							</button>
							<nav  class="footer__menu-subnav mx-5 border-b-2 border-clear transition-max-h duration-500 ease-in-out max-h-0 overflow-hidden" id="footer-dropdown-1"  aria-hidden="true">
																	<a class="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Our Company
									</a>
																	<a class="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Careers
									</a>
																	<a class="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Locations
									</a>
															</nav>
						</div>
																									
						<div x-data="{ open: false}"  class="w-full xs-lg:w-1/2 lg:hidden" >
							<button  class="footer__menu-head px-6 py-5 lg:p-0 lg:pt-4 text-link16 font-semibold w-full ease-200 hover:text-grey-3 text-left flex justify-between" aria-controls="footer-dropdown-2">
								Need Help?
								<figure class="ml-auto inline h-6 w-6 relative">
									<svg  class="transition transform ease-in-out duration-300 absolute inset-0 w-full h-full stroke-current text-blue-2">
										<use href="#icon-plus"></use>
									</svg>
									<svg class="absolute inset-0 w-full h-full stroke-current text-blue-2">
										<use href="#icon-minus"></use>
									</svg>
								</figure>
							</button>
							<nav  class="footer__menu-subnav mx-5 border-b-2 border-clear transition-max-h duration-500 ease-in-out max-h-0 overflow-hidden" id="footer-dropdown-2"  aria-hidden="true">
																	<a class="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Contact Us
									</a>
																	<a class="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="">
										Support 
									</a>
																	<a class="pl-3 pr-6 pb-6 lg:p-0 lg:pt-4 block text-p16 w-full hover:text-grey-3 ease-200" href="tel:+33 (0)9 63 22 47 40">
										Phone
									</a>
															</nav>
						</div>
												</nav>

									<div class="hidden lg:flex">
																				<nav class="flex flex-col pr-12 lg:w-196p">
																						
															<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="/categorie">
															Les Catégories 
								</a>
															<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="">
                                                            Prestations de service
								</a>
															<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="">
                                                            Entraînement
								</a>
															<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="">
                                                            Recrutement
								</a>
															<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 font-semibold" href="">
									Actualités
								</a>
													</nav>
																									<nav class="flex flex-col pr-12 lg:w-196p">
															<p class="text-o14 tracking-07 leading-22p text-grey-3 font-semibold uppercase">
                                                            À propos
								</p>
																						<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                                                        Notre compagnie
								</a>
															<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                            Carrières
								</a>
															<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                            Emplacements
								</a>
													</nav>
																									<nav class="flex flex-col pr-12 lg:w-196p">
															<p class="text-o14 tracking-07 leading-22p text-grey-3 font-semibold uppercase">
                                                            Besoin d'aide?
								</p>
																						<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                                                        Contactez-nous
								</a>
															<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="">
                                                            Soutien
								</a>
															<a class="text-p16 pt-4 hover:text-grey-3 ease-200 first:pt-0 " href="tel:+33 (0)9 63 22 47 40">
                                                            Téléphone
								</a>
													</nav>
												</div><div class="hidden lg:flex flex-col lg:w-196p">
									<a href="" target="" class="first:mt-0 mt-4 flex text-p16 text-light hover:text-grey-3 ease-400">
						<svg class="stroke-current fill-none w-6 h-6 mr-2">
							<use href="#icon-twitter"></use>
						</svg>
						Twitter
					</a>
													<a href="" target="" class="first:mt-0 mt-4 flex text-p16 text-light hover:text-grey-3 ease-400">
						<svg class="stroke-current fill-none w-6 h-6 mr-2">
							<use href="#icon-linkedin"></use>
						</svg>
						LinkedIn
					</a>
													<a href="" target="" class="first:mt-0 mt-4 flex text-p16 text-light hover:text-grey-3 ease-400">
						<svg class="stroke-current fill-none w-6 h-6 mr-2">
							<use href="#icon-facebook"></use>
						</svg>
						Facebook
					</a>
													<a href="" target="" class="first:mt-0 mt-4 flex text-p16 text-light hover:text-grey-3 ease-400">
						<svg class="stroke-current fill-none w-6 h-6 mr-2">
							<use href="#icon-youtube"></use>
						</svg>
						YouTube
					</a>
							</div>
						<div class="px-4 mt-8 lg:mt-0 max-w-128 mx-auto lg:w-368p grid:mx-0 grid:pr-0 ">
				<p class="mb-4 text-o14 tracking-07 text-grey-3 uppercase">
                S'abonner
				</p>

									<script type="text/javascript"></script>
                <div class="gf_browser_chrome gform_wrapper gform_legacy_markup_wrapper gform-theme--no-framework" data-form-theme="legacy" data-form-index="0" id="gform_wrapper_1">
                    <div >
                        <div class="gform-body gform_body"><ul id="gform_fields_1" class="gform_fields top_label form_sublabel_below description_below"><li id="field_1_1" class="gfield gfield--type-email gfield_contains_required field_sublabel_below gfield--no-description field_description_below hidden_label gfield_visibility_visible" data-js-reload="field_1_1"><label class="gfield_label gform-field-label" for="input_1_1">Email<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class="ginput_container ginput_container_email relative">
                            <input name="input_1" id="input_1_1" type="text" value="" class="large" placeholder="Enter your email" aria-required="true" aria-invalid="false"/>
                        <button type="submit" class="w-12 absolute inset-y-0 right-0 m-auto group"><svg class="mx-auto h-6 w-6 fill-none stroke-current text-grey-3 group-hover:text-grey-2"> <use href="#icon-send"></use> </svg></button></div></li></ul></div>
        <div class="gform_footer top_label"> <input type="submit" id="gform_submit_button_1" class="gform_button button" value="Submit" onclick="if(window[&quot;gf_submitting_1&quot;]){return false;}  window[&quot;gf_submitting_1&quot;]=true;  " onkeypress="if( event.keyCode == 13 ){ if(window[&quot;gf_submitting_1&quot;]){return false;} window[&quot;gf_submitting_1&quot;]=true;  jQuery(&quot;#gform_1&quot;).trigger(&quot;submit&quot;,[true]); }"/> 
            <input type="hidden" class="gform_hidden" name="is_submit_1" value="1"/>
            <input type="hidden" class="gform_hidden" name="gform_submit" value="1"/>
            
            <input type="hidden" class="gform_hidden" name="gform_unique_id" value=""/>
            <input type="hidden" class="gform_hidden" name="state_1" value="WyJbXSIsIjE5ZDk5MzlkZmVhZTFlMjk5ZjgyYzhiMjJmYzYzZjU4Il0="/>
            <input type="hidden" class="gform_hidden" name="gform_target_page_number_1" id="gform_target_page_number_1" value="0"/>
            <input type="hidden" class="gform_hidden" name="gform_source_page_number_1" id="gform_source_page_number_1" value="1"/>
            <input type="hidden" name="gform_field_values" value=""/>
            
        </div>
                        </div>
                        </div>

								<p class="mt-4 text-p14">
                                Entrez votre e-mail pour vous inscrire à notre newsletter et rester à jour sur les fonctionnalités et les versions.
				</p>
			</div>
		</div>
	
	</div>
</div>
)
}