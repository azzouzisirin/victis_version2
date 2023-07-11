import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './css/App.css'
import './css/theme.css'
import './css/theme_2.css'
import './css/theme_3.css'
import './css/theme_4.css'
import './css/theme_5.css'
import './css/theme_6.css'
import './css/theme_7.css'
import './css/theme_8.css'
import './css/theme_9.css'
import './css/theme_10.css'
import './css/theme_11.css'
import Home from './pages/Home';
import Categorie from './pages/Categorie'
import Exp from './pages/Exp'
import Soutien from './pages/Soutien'
import Contact from './pages/Contact'
import MentionsLegales from './pages/mentionsLegale'

import DescriptFormation from './pages/DescriptFormation'
import DescriptModule from './pages/DescriptModule'
import Article_1 from './pages/articles/Article_1';
import Article_2 from './pages/articles/Article_2';
import Article_3 from './pages/articles/Article_3';
import Dashbord from './pages/Dashbord/Dashbord'
import Financer from './pages/financer'
import PolitiqueConfidentialite from './pages/politiqueConfidentialite'

import ListFormation from './pages/ListFormation';
import Formation from './pages/Formation';
import PromoVictis from './pages/PromoVictis'
import Services from './pages/Services'
import CookieConsent from './components/CookieConsent';
import TableCalendrie from './pages/Calendrie/TableCalendrie';
import DescriptDetailFormation from './pages/DescriptDetailFormation';
import Authentification from './pages/Authentification';

export default function App() {
  const accpt=localStorage.getItem("accpt");

  return (  
    <> 
    <Router>
  

        <Routes>
   
          <Route path="/" element={<Home />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="/soutien" element={<Soutien />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/DescriptFormation/:nomCateg/:nomFormation" element={<DescriptFormation />} />
          <Route path="/article_1" element={<Article_1 />} />
          <Route path="/article_2" element={<Article_2 />} />
          <Route path="/article_3" element={<Article_3 />} />
          <Route path="/mentionsLegales" element={<MentionsLegales />} />

          <Route path="/connect" element={<Authentification />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/tableCalendrie" element={<TableCalendrie />} />

          <Route path="/ListFormation/:nomCateg" element={<ListFormation />}  />
          <Route path="/descritionFormation/:nomForma/:pays" element={<DescriptDetailFormation />}  />

          <Route path="/PromoVictis" element={<PromoVictis />} />
          <Route path="/service" element={<Services />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/financer" element={<Financer />} />
          <Route path="/politiqueConfidentialite" element={<PolitiqueConfidentialite />} />

          <Route path="/DescriptModule/:nomCateg/:nomFormation/:nomModul" element={<DescriptModule />} />

        </Routes>
    </Router>
 {accpt?null:<CookieConsent />}
  </>

  );
}

