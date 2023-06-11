import react from 'react';
import './Value.css';


function Value()  {
    return (
        <section className="v-wrapper">
            <div className=" innerWidth flexCenter v-container">
                {/* left side*/}
                <div className="v-left flexCenter">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                {/*right side*/}
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you.<br />
                        We believe a good place to live can make your life better.</span>
                    <p className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,<br /> voluptatem. Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Explicabo, laboriosam?Lorem ipsum<br /> dolor sit amet consectetur adipisicing elit. Facere,<br /> voluptatem. Lorem ipsum dolor sit amet consectetur <br /></p>
                    <button className='button btnvalue'>Contact</button>
                </div>

            </div>
        </section>
    )
}

export default Value;
