import React, { useEffect, useState } from "react";

function CookieConsent(){ 

    return(
       <div style={{ transition: "left 0.5s ease 0s"}}>
       <div class="info-banner-blocker" style={{position:"fixed",padding:"0",margin:"0",zIndex:"900",top:"0",left:"0",width: "100%",height: "100%",background:"rgba(0,0,0,0.8)"}}>

       </div>
       <section class="info-banner" style={{display: "visible"}}>
        <div class="cb__blocker">

       </div>
       <section class="cb cb__TO">
         <input class="cb--hidden" type="checkbox" id="showInfoCheckboxes"/> 
         <div class="cb__main"> 
       <div class="cb__content"> <h4 class="cb__title">Nous utilisons des cookies</h4> 
       <div class="cb--desktop"> <p class="cb__intro">sur VICTIS.fr nous utilisons des cookies pour vous garantir la meilleur navigation possible, vous proposer les offres et services et réaliser des statistiques de visite pour améliorer votre expérience sur le site.<a href="https://www.transavia.com/fr-FR/juridique/politique-sur-les-cookies/">En savoir plus</a> </p>
       </div>
       <label for="showInfoCheckboxes" class="cb__mobile"> 
       <div class="cb-mobile-text"> <p class="cb__intro cb--mobile">sur VICTIS.fr nous utilisons des cookies pour vous garantir la meilleur navigation possible, vous proposer les offres et services et réaliser des statistiques de visite pour améliorer votre expérience sur le site.<a href="https://www.transavia.com/fr-FR/juridique/politique-sur-les-cookies/">En savoir plus</a> </p>
       </div>
       </label>
        <ul class="cb__preference-sections"> <li class="cb__preference-section">
             <input type="checkbox" class="cb__checkbox" id="cb-check-a" checked="checked" disabled=""/> 
             <label for="cb-check-a" class="cb__checkbox-title">Cookies basiques</label>
              <input id="showBulletPoints-basics" class="cb__toggle-checkbox" type="checkbox"/> 
       <label for="showBulletPoints-basics" class="cb__toggle cb--mobile cb__arrow"></label> <label for="cb-check-a" class="cb__preference-content"> <ul class="cb__preference-list"> <li class="cb__preference-item">Sont nécessaires pour le bon fonctionnement de notre site web;</li><li class="cb__preference-item">Enregistrent vos préférences, notamment votre langue et l’état de la connexion;</li><li class="cb__preference-item">Collectent des informations anonymes et agrégées lorsque vous visitez notre site web;</li>
       <li class="cb__preference-item">Vous incluent à des tests A/B lorsque vous utilisez notre site web pour améliorer nos services et produits;</li></ul>
        </label> 
       </li><li class="cb__preference-section"> <input type="checkbox" id="cb-check-c" class="cb__checkbox"/> <label for="cb-check-c" class="cb__checkbox-title">Cookies analytiques</label> <input id="showBulletPoints-analytics" class="cb__toggle-checkbox" type="checkbox"/>
        <label for="showBulletPoints-analytics" class="cb__toggle cb--mobile cb__arrow"></label> <label for="cb-check-c" class="cb__preference-content"> <ul class="cb__preference-list"> <li class="cb__preference-item">Nous offrent une compréhension plus approfondie de votre comportement en ligne en analysant vos actions sur notre site web;</li><li class="cb__preference-item">Créent et recueillent un identifiant spécifique Transavia que nous pouvons utiliser dans nos outils d’analyse web;</li><li class="cb__preference-item">Activent les outils qui permettent aux utilisateurs de nous donner leur avis.</li></ul> </label> 
        </li><li class="cb__preference-section"> <input type="checkbox" id="cb-check-d" class="cb__checkbox"/> <label for="cb-check-d" class="cb__checkbox-title">Cookies marketing</label> <input id="showBulletPoints-marketing" class="cb__toggle-checkbox" type="checkbox"/> <label for="showBulletPoints-marketing" class="cb__toggle cb--mobile cb__arrow"></label>
         <label class="cb__preference-content" for="cb-check-d"> <ul class="cb__preference-list"> <li class="cb__preference-item">Recueillent des informations lorsque vous visitez notre site web et les partagent avec nos vendeurs tiers;</li><li class="cb__preference-item">Affichent des publicités ou des offres pertinentes et personnalisées à la fois en ligne et hors ligne;</li><li class="cb__preference-item">Mesurent l’efficacité de nos campagnes publicitaires en suivant le nombre de clics;</li><li class="cb__preference-item">Ils s’assurent que vous ne voyez pas les mêmes publicités trop souvent;</li><li class="cb__preference-item">Vous permettent de partager du contenu sur des plateformes de réseaux sociaux telles que Facebook et Twitter. Bon à savoir : ces plateformes sont susceptibles d’utiliser ces cookies à leurs propres fins, y compris à des fins publicitaires;</li></ul> </label> 
         </li>
         </ul> 
         </div>
         <div class="cb__actions"> <div class="cb__buttons"> <button onclick="_stCookiePopup.send_popup_accept()" class="cb__button cb__button--save"> <span class="cb__button-background"></span> <span class="cb__button-text">Je valide</span> </button> <button data-testid="button-accept-all-cookies" onClick={()=> {localStorage.setItem('accpt',"true");window.location.reload(false)}} class="cb__button cb__button--accept-all"> <span class="cb__button-background"></span> <span class="cb__button-text">Tout accepter</span> </button>  <button data-testid="button-accept-no-cookies" onClick={()=> {localStorage.setItem('accpt',"false");window.location.reload(false)}} class="cb__button cb__button--accept-none"> <span class="cb__button-background"></span> <span class="cb__button-text">Continuer sans accepter</span> </button> 
         </div></div>
         </div>
         </section>

         </section>
</div> 
    )
}
export default CookieConsent;