import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title';
import mainImg from '../images/prices-img.png';
import TrueBox from '../images/true-box.png';
import Extra1 from '../images/3.png';
import Extra2 from '../images/5.png';
import Extra3 from '../images/4.png';
import Extra4 from '../images/2.png';
import Extra5 from '../images/1.png';
import PricesExtraService from '../components/PricesExtraService';
import Cleaning1 from '../images/cleaning-1.png';
import Cleaning2 from '../images/cleaning-2.png';
import Cleaning3 from '../images/cleaning-3.png';
import Card_arrow from '../images/right-arrow.png';
import WH_reason from '../components/WH_reason';
import WH_image from '../images/the-best.png';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
export default function Prices() {
    return (
        <>
            <div className="prices">
                <Navbar newC="smallNavbar" />
                <img src={mainImg} alt="image" className="mainimg" />
                <Title name='Prices' />
                <div className="one_time">
                    <p className="title">One Time</p>
                    <p className="uro">€ 20<span>/hr</span></p>
                    <p className="i_text"><img src={TrueBox} alt="image" />Lower prices</p>
                    <p className="i_text"><img src={TrueBox} alt="image" />Easy online & secure payment </p>
                    <p className="i_text"><img src={TrueBox} alt="image" />Easy amendment</p>
                </div>
                <hr className="container mx-auto" />
                <div className="extra_service">
                    <Title name="Extra services" />
                    <div className="extra_s">
                        <PricesExtraService url={Extra1} text='Inside cabinets' />
                        <PricesExtraService url={Extra2} text='Inside fridge' />
                        <PricesExtraService url={Extra3} text='Inside oven' />
                        <PricesExtraService url={Extra4} text='Laundry wash & dry' />
                        <PricesExtraService url={Extra5} text='Interior windows' />
                    </div>
                </div>
                <div className="what_include">
                    <Title name="What we include in cleaning" />
                    <div className="contact_cards">
                        <div className="card">
                            <img src={Cleaning1} alt="image" className="card_img" />
                            <p className='heading'>Bedroom and Living Room</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Dust all accessible surfaces   
                            </p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Wipe down all mirrors and glass fixtures</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Clean all floor surfaces</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Take out garbage and recycling</p>
                        </div>
                        <div className="card">
                            <img src={Cleaning2} alt="image" className="card_img" />
                            <p className='heading'>Bathrooms</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Wash and sanitize the toilet, shower, tub, sink</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Dust all accessible surfaces</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Wipe down all mirrors and glass fixtures</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Clean all floor surfaces</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Take out garbage and recycling</p>
                        </div>
                        <div className="card">
                            <img src={Cleaning3} alt="image" className="card_img" />
                            <p className='heading'>Kitchen</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Dust all accessible surfaces   
                            </p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Empty sink and load up dishwasher</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Wipe down exterior of stove, oven and fridge</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Clean all floor surfaces</p>
                            <p className="Only_text"><img src={Card_arrow} alt="image" />Take out garbage and recycling</p>
                        </div>
                    </div>
                </div>
                <div className="why_helperland">
                    <Title name="Why Helperland" />
                    <div className="image_reson">
                        <div>
                        <WH_reason title="Experienced and vetted professionals" text="dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results."/>
                        <WH_reason title="Dedicated customer service" text="to our customers and are guided in all we do by their needs. The team is always happy to support you and offer all the information. you need."/>
                        </div>
                        <img src={WH_image} alt="image"/>
                        <div>
                        <WH_reason title="Every cleaning is insured" text="and seek to provide exceptional service and engage in proactive behavior. We‘d be happy to clean your homes."/>
                        <WH_reason title="Secure online payment" text="Payment is processed securely online. Customers pay safely online and manage the booking."/>
                        </div>
                    </div>
                </div>
                <NewsLetter/>
                <Footer/>
            </div>
        </>
    )
}
