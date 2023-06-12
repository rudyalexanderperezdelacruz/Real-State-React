import React from 'react'
import "./Hero.css"
import CountUp from 'react-countup';
import { HiLocationMarker } from 'react-icons/hi';

function Hero() {
  return (
    <section className="hero-wrapper">
    <div className="innerWidth flexCenter hero-container ">
         {/*/left Side*/}
        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="orange-circle " />
                <h1>Discover <br />Most Suitable <br/>Property</h1>
            </div>

            <div className="hero-des flexColStart">
                <span className='secondaryText '>Find a variety of properties that suit you very easilty</span>
                <span  className='secondaryText '>Forget all difficulties in finding a residence for you</span>
            </div>

            <div className="search-bar flexCenter">
                <HiLocationMarker color="var(--blue)" size={35} />
                <input type="text" />
                <button className='button'>Search</button>
            </div>

            <div className="flexCenter stats">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp star={8800} end={9000} duration={4}/>
                        <span>+</span>                           
                    </span>
                    <span className='secondaryText'>Premiun Products</span>
                </div>

                <div className="flexColCenter stat">
                    <span>
                        <CountUp star={1950} end={2000} duration={4}/>
                        <span>+</span>                           
                    </span>
                    <span className='secondaryText'>Happy Customers</span>
                </div>

                <div className="flexColCenter stat">
                    <span>
                        <CountUp end={28} />
                        <span>+</span>                           
                    </span>
                    <span className='secondaryText'>Award Winning</span>
                </div>

            </div>
        </div>

         {/*Right Side*/}
        <div className="hero-right flexCenter">
            <div className="image-container">
                <img src="./hero-image.png" alt="" />
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero
