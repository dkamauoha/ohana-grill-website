import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import { Carousel } from 'react-responsive-carousel';

//images
import beach from '../../images/sean-o-406693-unsplash.jpg';
// import palmTree from '../../images/matthew-brodeur-428829-unsplash.jpg';
import shrimp from '../../images/garlic-shrimp.jpg';
import food from '../../images/header-food.jpg';
import restaurant from '../../images/ohana-grill_outside.jpg';


//CSS
import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const insideStyles = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Pacifico',
    fontSize: '40px'
  };

class Home extends Component {


  render() {
    return (
      <div>
        <Parallax bgImage={beach} strength={500}>
            <div style={{ height: 450 }}>
                <div style={insideStyles}>801 Ohana Grill</div>
            </div>
        </Parallax>
        <div className='home__carousel-container'>
            <div className='home__carousel'>
                <Carousel
                    autoPlay
                    showThumbs={false}
                    showArrows={true}
                    infiniteLoop={true}
                    >
                    <div>
                        <img className='home__carousel-image' src={shrimp} alt=''/>
                        <p>Shrimp</p>
                    </div>
                    <div>
                        <img className='home__carousel-image' src={food} alt=''/>
                        <p></p>
                    </div>
                    <div>
                        <img className='home__carousel-image' src={restaurant} alt=''/>
                        <p></p>
                    </div>
                </Carousel>
            </div> 
        </div>
        
      </div>
    )
  }
}

export default Home;