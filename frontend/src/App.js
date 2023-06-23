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
import DescriptFormation from './pages/DescriptFormation'
import DescriptModule from './pages/DescriptModule'
import Article_1 from './pages/articles/Article_1';
import Article_2 from './pages/articles/Article_2';
import Article_3 from './pages/articles/Article_3';
import Dashbord from './pages/Dashbord/Dashbord'
import ListFormation from './pages/ListFormation';
import PromoVictis from './pages/PromoVictis'
import Services from './pages/Services'
import TableCalendrie from './pages/Calendrie/TableCalendrie';
import DescriptDetailFormation from './pages/DescriptDetailFormation';
import Authentification from './pages/Authentification'
export default function App() {
  return (
    <Router>
  

        <Routes>
   
          <Route path="/" element={<Home />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="/soutien" element={<Soutien />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/DescriptFormation/:id" element={<DescriptFormation />} />
          <Route path="/article_1" element={<Article_1 />} />
          <Route path="/article_2" element={<Article_2 />} />
          <Route path="/article_3" element={<Article_3 />} />
          <Route path="/connect" element={<Authentification />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/tableCalendrie" element={<TableCalendrie />} />

          <Route path="/ListFormation/:nomCateg" element={<ListFormation />}  />
          <Route path="/descritionFormation/:nomForma/:pays" element={<DescriptDetailFormation />}  />

          <Route path="/PromoVictis" element={<PromoVictis />} />
          <Route path="/service" element={<Services />} />

          <Route path="/DescriptModule/:id" element={<DescriptModule />} />

        </Routes>
    </Router>
  );
}

