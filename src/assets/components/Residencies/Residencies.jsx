import React from 'react';
import './Residencies.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper.css';
import data from './slider.json';
import { sliderSettings } from './common';


function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
                <SliderButtons/>
          {data.map((card, i) => {
            return (

              <SwiperSlide key={i}>

                <div className="flexColStart r-card">
                  <img src={card.image} alt="Home" />

                  <span className='secondaryText r-price'>
                    <span className='dolar' style={{color:"orange"}}>$</span>
                    <span className='c-price'>{card.price}</span>
                  </span>

                  <span className='primaryText c-name'>{card.name}</span>
                  <span className='secondaryText c-detail'>{card.detail}</span>
                </div>
                
              </SwiperSlide>
            );
          })}

        </Swiper>
        
      </div>
    </section>
  );
}

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}> &gt;</button>
        </div>
    )
}

