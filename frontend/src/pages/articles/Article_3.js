import React from 'react';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContuctUs from '../../components/ContuctUs';
import COMP_ARTICLE from '../../components/Comp_Article'

export default function Article_3() {

    return ( 
        <> 
        <NavBar/>
<div className="post-template-default single single-post postid-53567 single-format-standard wp-embed-responsive theme-pyxl-scry woocommerce-js" data-template="base.twig">
	
		

					<h1 className="screen-reader-text" href="#content">
				
			</h1>
		
		<main role="main">
			<div className="content-wrapper">
        <nav className="flex justify-between w-full px-5 py-4">
 
       
        </nav>

		<article className="post-single post-type-post max-w-5xl px-5 mx-auto" id="post-53567">
			<header className="pt-1 text-center">
                <div className="font-semibold uppercase text-grey-2 text-o18">
                                            <a href="" className="ease-200 hover:text-grey-3">Blogue VICTIS,</a>
                                            <a href="" className="ease-200 hover:text-grey-3">CHEVILLE,</a>
                                            <a href="" className="ease-200 hover:text-grey-3">Simulation</a>
                                    </div>				
                <h1 className="py-6 article-h1 accent-b">VICTIS teste les implants Alevio Spine via SOLIDWORKS Simulation</h1>
				<p className="font-semibold uppercase blog-author blog-date mt-7 tracking-07 text-grey-3 text-o18">
					<span>Par Riley Rudd sur</span>
					<time datetime="2023-05-11 00:00:00">11 mai 2023</time>
				</p>
            </header>
            <img className="mt-7" height="472" src="./img/Template--984x472-c-default.png"/>
			<section className="mt-12 article-content">

				<div className="article-body">
					<blockquote><p><strong>&nbsp;“Les services de VICTIS correspondaient parfaitement aux tests que nous devions effectuer pour obtenir l'autorisation de la FDA. Travailler avec leur équipe s'est déroulé sans heurts et nous sommes très satisfaits du processus et du professionnalisme.”&nbsp; – </strong><strong style={{fontiSze: "revert",color: "initial"}}>Trey Robbins – Alevio Spine, Inc – Qualité/Ingénierie</strong></p></blockquote>
                    <p>Client de VICTIS, <a href="https://aleviospine.com/" target="_blank" rel="noopener">Alevio Spine</a>, est une société de dispositifs médicaux spécialisée dans le développement d'implants en titane qui sont utilisés dans les chirurgies de fusion des articulations sacro-iliaques (SI). Alevio a contacté le groupe d'ingénierie de projet de VICTIS pour les aider à simuler différentes longueurs d'implants afin de s'assurer qu'ils respectent les normes de test ASTM requises par la FDA. La tâche à accomplir consistait à reproduire les conditions de test physiques dans SOLIDWORKS à l'aide de l'analyse FEA, avant d'effectuer des tests coûteux et réels tels que des tests destructifs..</p>
<h3><strong>Le défi</strong></h3>
<p>L'objectif du projet était de comprendre le comportement que les implants présenteraient sur la base de deux normes d'essai ASTM. Après avoir recherché des options et comparé les coûts, Alevio a décidé de sous-traiter le projet à VICTIS car cela coûtait moins cher que d'effectuer plusieurs tests physiques. En simulant virtuellement les conditions de test physiques dans lesquelles les implants seraient certifiés, toutes les zones de défaillance potentielle peuvent être identifiées et repensées avant les tests destructifs coûteux. Le défi de l'ingénieur projet Alain Bucio était de mettre en place les implants en <a href="" target="_blank" rel="noopener ">logiciel de simulation SOLIDWORKS</a> de la même manière qu'ils seraient installés dans l'appareil de test. Pour ce faire, Alain a recherché les normes de test ASTM requises pour l'implant avant de mettre en place les tests.</p>
<p><img decoding="async" loading="lazy" className="aligncenter size-full wp-image-53570" src="./img/VIRTUAL-SIMULATION-PHYSICAL-TEST.png" alt="physical testing screws using virtual simulation" width="489" height="275" srcset="./img/VIRTUAL-SIMULATION-PHYSICAL-TEST.png 489w, ./img/VIRTUAL-SIMULATION-PHYSICAL-TEST-300x169.png 300w" sizes="(max-width: 489px) 100vw, 489px"/></p>
<h3><strong>La solution</strong></h3>
<p> Les analyses préliminaires comprenaient deux tests pour placer les vis dans les pires scénarios afin de comprendre les points faibles. Après que les vis aient passé les normes ASTM dans chaque test, Alain est allé plus loin pour identifier une conception de produit optimale.</p>
<p><img decoding="async" loading="lazy" className="aligncenter size-full wp-image-53569" src="./img/OPTIMAL-PRODUCT-DESIGN-FOR-SCREWS.png" alt="Optimal product design for screws" width="372" height="404" srcset="./img/OPTIMAL-PRODUCT-DESIGN-FOR-SCREWS.png 372w, ./img/OPTIMAL-PRODUCT-DESIGN-FOR-SCREWS-276x300.png 276w" sizes="(max-width: 372px) 100vw, 372px"/></p>
<h3><strong>Les résultats</strong></h3>
<p>La topologie complexe de l'implant était difficile à maîtriser, mais Alain a pu compléter les simulations FEA pour tester les implants. Comme les résultats des tests dépassaient les normes ASTM, Alevio s'est retrouvé avec une confiance accrue dans leur conception et une partie d'ingénierie terminée pour le processus d'approbation de leurs implants rachidiens. En choisissant VICTIS, Alevio a pu effectuer les tests physiques plus rapidement et à moindre coût.</p>
<p>Intéressé à en savoir plus sur la façon dont <a href="" target="_blank" rel="noopener">Le groupe d'ingénierie de projet de VICTIS</a> peut aider votre entreprise avec des simulations et des tests virtuels ? Contactez-nous dès aujourd'hui pour discuter des besoins de votre projet et commencer à améliorer votre processus de conception et de développement de produits. Notre équipe d'experts possède les connaissances et l'expérience nécessaires pour fournir des résultats de haute qualité de manière efficace et rentable.</p>

				</div>
			</section>
		</article>

        	</div>

		</main>


	</div>
	<COMP_ARTICLE/>

    <ContuctUs/>			
<Footer/>
</>
    )
    }		