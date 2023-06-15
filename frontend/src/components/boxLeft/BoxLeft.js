import './boxLeft.css';
import React from 'react';
import Slider from "react-slick";



  function BoxLeft  ({titre,description,images,text}  )  {


	const renderSlides = () =>
    images.map(num => (
      <img src={num} alt={num}   className="confiance"/>
    ));
return(
    <div className="Boxleft"> 
 <h2 >  {titre}</h2>
<h3>{description} </h3>
<br/> 
<div className="confianceshow">
  <div className="confiantehowSlider">
  	<Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true} 
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>	
  </div>

</div>
  

   <h3>{text}</h3>
    </div>
)
  };
  export default BoxLeft;
