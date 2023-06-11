import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs' 
import {HiChatBubbleBottomCenter} from 'react-icons/hi2' 

function Contact() {
  return (
    <section className="c-wrapper">
        <div className=" paddings innerWidth c-container">
            {/*left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact Us</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>We always ready to help by providijng the best services for you. <br />We beleive a good blace to live can make your life better</span>


                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={30}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>829 000 4444</span>
                                </div>  
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        {/*second mode*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={30}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>829 000 4444</span>
                                </div>  
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                    </div>

                    {/*Second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={30}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>829 000 4444</span>
                                </div>  
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                        {/*fourth mode*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={30}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Mesagge</span>
                                    <span className='secondaryText'>829 000 4444</span>
                                </div>  
                            </div>
                            <div className="flexCenter button">Mesagge Now</div>
                        </div>

                    </div>
                    
                </div>
            </div>

             {/*right side */}
             <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
             </div>
             
        </div>
    </section>
  )
}

export default Contact