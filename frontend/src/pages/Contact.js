import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ContuctUs from '../components/ContuctUs';
export default function Contact() {
    const [service, setservice] = useState('Formation');

    const handleChangeservice = event => {
        setservice(event.target.value);
    
     
      };
    return ( 
        <>
        <NavBar/>
            <div >

            

		
		<main role="main">
				<div className="content-wrapper">
		<article className="post-type-page" id="post-244">
			<section className="article-content">
								<div className="article-body">
					<section className="form-block text-light">
	<div className="flex flex-col lg:flex-row lg:min-h-690p">
		<div className="class-registration__body px-4   lg:w-1/2 lg:flex  justify-center " style={{backgroundImage: "linear-gradient( 90deg, rgba(3, 11, 23, 0.4) 0%, rgba(3, 11, 23, 0.25) 43.73%, rgba(3, 11, 23, 0.125) 55.79%, rgba(3, 11, 23, 0) 100%),url(&#39;./img/VICTIS-Contact-HeroWithForm@2x-1.JPEG;), linear-gradient(0deg, #1c2129, #1c2129)"}}>
        <iframe   src="https://maps.google.com/maps?q=8%20Rue%20de%20Balzac,%2037000%20Tours,%20France&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" width="100%" marginheight="0" marginwidth="0" title='contact'></iframe>


		</div>
		<div className="lg:w-1/2 px-4 md:px-12 lg:px-16 xl:pl-24 xl:pr-grid lg:mx-auto lg:flex flex-col justify-center bg-light text-dark pyxl-form pt-8 pb-12 lg:py-4">
			<div className="scry-form verify-form">
									<script type="text/javascript"></script>
                <div className="gf_browser_gecko gform_wrapper gform_legacy_markup_wrapper gform-theme--no-framework" data-form-theme="legacy" data-form-index="0" id="gform_wrapper_3" >
                    <div >
                        <div className="gform-body gform_body">
                            <ul id="gform_fields_3" className="gform_fields top_label form_sublabel_below description_below"><li id="field_3_15" className="gfield gfield--type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_15"><h5>Pour nous contacter, remplissez le formulaire ci-après :</h5>
                            </li><li id="field_3_17" className="gfield gfield--type-select gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_17">
                                <label className="gfield_label gform-field-label" >Produit / Service<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
<div className="ginput_container ginput_container_select">
    <select name="input_17" id="input_3_17" className="large gfield_select" aria-required="true" aria-invalid="false"  onChange={handleChangeservice}>
        <option value="Formation" selected="selected" className="gf_placeholder">Formation</option>
        <option value="Produit ou service d'intérêt" className="gf_placeholder">Produit ou service d'intérêt</option><option value="Conception 3D">Conception 3D</option><option value="impression en 3D">impression en 3D</option><option value="Numérisation 3D">Numérisation 3D</option><option value="Analyse/FEA/CFD">Analyse/FEA/CFD</option><option value="Automatisation &amp; ERP">Automatisation &amp; ERP</option><option value="Communication/Visualisation">Communication/Visualisation</option>
<option value="Électrique">Électrique</option><option value="PDM/PLM">PDM/PLM</option><option value="Recrutement">Recrutement</option><option value="Fabrication">Fabrication</option><option value="Autre">Autre</option></select></div></li>
{service=='Formation'?<li id="field_3_2" className="gfield gfield--type-email gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_2"><label className="gfield_label gform-field-label" >Type<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
    <div className="ginput_container ginput_container_email">
                             <input name="input_2" id="input_3_2" type="text" value="" className="large" placeholder="Tyoe" aria-required="true" aria-invalid="false"/>
                        </div></li>:null}

<li id="field_3_8" className="gfield gfield--type-text input-half-left gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_8"><label className="gfield_label gform-field-label" >Prénom<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label><div className="ginput_container ginput_container_text"><input name="input_8" id="input_3_8" type="text" value="" className="medium" placeholder="Prénom" aria-required="true" aria-invalid="false"/> </div></li><li id="field_3_10" className="gfield gfield--type-text input-half-right gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_10"><label className="gfield_label gform-field-label" >Nom <span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
<div className="ginput_container ginput_container_text">
    <input name="input_10" id="input_3_10" type="text" value="" className="medium" placeholder="Nom" aria-required="true" aria-invalid="false"/> </div></li><li id="field_3_2" className="gfield gfield--type-email gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_2"><label className="gfield_label gform-field-label" >Email<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label><div className="ginput_container ginput_container_email">
                             <input name="input_2" id="input_3_2" type="text" value="" className="large" placeholder="Email" aria-required="true" aria-invalid="false"/>
                        </div></li><li id="field_3_3" className="gfield gfield--type-text input-half-left gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_3"><label className="gfield_label gform-field-label" >Nom de l'entreprise<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
                        <div className="ginput_container ginput_container_text"><input name="input_3" id="input_3_3" type="text" value="" className="medium" placeholder="Nom de l'entreprise" aria-required="true" aria-invalid="false"/> </div>
                        </li><li id="field_3_5" className="gfield gfield--type-phone gfield--width-full input-half-right gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_5"><label className="gfield_label gform-field-label" >Téléphone<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
                        <div className="ginput_container ginput_container_phone">
                            <input name="input_5" id="input_3_5" type="text" value="" className="medium" placeholder="Téléphone" aria-required="true" aria-invalid="false"/></div></li>
                      
                      
<li id="field_3_18" className="gfield gfield--type-text gfield--width-full input-half-right gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_18" data-conditional-logic="visible" style={{marginLeft:"-10px"}}>
    <label className="gfield_label gform-field-label" >Code postal<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
<div className="ginput_container ginput_container_text">
    <input name="input_18" id="input_3_18" type="text" value="" className="medium" placeholder="Code postal" aria-required="true" aria-invalid="false" data-conditional-logic="visible"/> 
    </div></li>
    <li id="field_3_7" className="gfield gfield--type-textarea field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_3_7"><label className="gfield_label gform-field-label" >commentaires</label>
<div className="ginput_container ginput_container_textarea"><textarea name="input_7" id="input_3_7" className="textarea large" placeholder="Comment pouvons nous aider?" aria-invalid="false" rows="10" cols="50"></textarea>
</div>
</li>

</ul>
</div>
        <div className="gform_footer top_label"> <input type="submit" id="gform_submit_button_3" className="gform_button button" value="Submit" onclick="if(window[&quot;gf_submitting_3&quot;]){return false;}  window[&quot;gf_submitting_3&quot;]=true;  " onkeypress="if( event.keyCode == 13 ){ if(window[&quot;gf_submitting_3&quot;]){return false;} window[&quot;gf_submitting_3&quot;]=true;  jQuery(&quot;#gform_3&quot;).trigger(&quot;submit&quot;,[true]); }" disabled="true"/> 
            <input type="hidden" className="gform_hidden" name="is_submit_3" value="1"/>
            <input type="hidden" className="gform_hidden" name="gform_submit" value="3"/>
            
            <input type="hidden" className="gform_hidden" name="gform_unique_id" value=""/>
            <input type="hidden" className="gform_hidden" name="state_3" value="WyJbXSIsIjE5ZDk5MzlkZmVhZTFlMjk5ZjgyYzhiMjJmYzYzZjU4Il0="/>
            <input type="hidden" className="gform_hidden" name="gform_target_page_number_3" id="gform_target_page_number_3" value="0"/>
            <input type="hidden" className="gform_hidden" name="gform_source_page_number_3" id="gform_source_page_number_3" value="1"/>
            <input type="hidden" name="gform_field_values" value=""/>
            
        </div>
                        </div>
                        </div>
				
									<div className="text-center mt-8 px-8">
						<p><strong>Note:</strong>&nbsp;En soumettant ce formulaire, vous autorisez à recevoir des e-mails d'actualités, de produits et de promotions de notre part, vous pouvez vous désabonner à tout moment. Voir notre&nbsp;<a href="" target="_blank" rel="noopener">politique de confidentialité</a>&nbsp;pour apprendre plus.</p>

					</div>
							</div>

		</div>
	</div>
    </section>

				</div>
			</section>
		</article>
	</div>
		</main>


<ContuctUs/>

	
		
	
</div>

<Footer/>
                                            </>

                                            ) 
}