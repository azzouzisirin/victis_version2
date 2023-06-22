
import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import './slides.css';


function Slides  ({images}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return(
        <>
  <div className="petitslideshow">
  <Carousel  activeIndex={index} onSelect={handleSelect}>

    {images.map((backgroundColor, index_2) => {
      return (
        <Carousel.Item>        
     <img
        className="petitslide"
        key={index_2}
        alt={ backgroundColor }
        src={ backgroundColor }
      />
   </Carousel.Item>
        )
      })}
      
    </Carousel>

</div>
  </>  
  )
    }

    export default Slides;
