import React from "react";
import Navbar from "../components/Navbar";
import Question from "../components/Question";
import Title from "../components/Title";
import FaqImg from "../images/group-16.png";
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
export default function Faq() {
    return (
        <>
            <div className="faq">
                <Navbar newC="smallNavbar" />
                <img src={FaqImg} alt="image" className="mainimg" />
                <Title name='FAQs' />
                <div className="qOnlyT">
                    Whether you are Customer or Service provider,
                    We have tried our best to solve all your queries and questions.
                </div>
                <div className="nav_tabs">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#customer" data-bs-toggle="tab">For Customer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sp" data-bs-toggle="tab">For Service Provider</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane accordion fade show active" id="customer">
                            <div>
                                <Question number='1' show='show' collapsed='' parentele='customer' que="What's included in a cleaning?" ans='Bedroom, Living Room & Common Areas, Bathrooms, Kitchen, Extras' />
                                <Question number='2' parentele='customer' show='' collapsed='collapsed' que="Which Helperland professional will come to my place?" ans="Helperland has a vast network of experienced, top-rated cleaners. Based on the time and date of your request, we work to assign the best professional available. Like working with a specific pro? Add them to your Pro Team from the mobile app and they'll be requested first for all future bookings. You will receive an email with details about your professional prior to your appointment." />
                                <Question number='3' parentele='customer' show='' collapsed='collapsed' que="Can I skip or reschedule bookings?" ans="You can reschedule any booking for free at least 24 hours in advance of the scheduled start time. If you need to skip a booking within the minimum commitment, we’ll credit the value of the booking to your account. You can use this credit on future cleanings and other Helperland services." />
                                <Question number='4' parentele='customer' show='' collapsed='collapsed' que="Do I need to be home for the booking?" ans="We strongly recommend that you are home for the first clean of your booking to show your cleaner around. Some customers choose to give a spare key to their cleaner, but this decision is based on individual preferences." />
                            </div>
                        </div>
                        <div className="tab-pane fade accordion" id="sp">
                            <div>
                                <Question number='1' parentele='sp' show='show' collapsed='' que="How much do service providers earn?" ans="The self-employed service providers working with Helperland set their own payouts, this means that they decide how much they earn per hour." />
                                <Question number='2' parentele='sp' show='' collapsed='collapsed' que="What support do you provide to the service providers?" ans="Our call-centre is available to assist the service providers with all queries or issues in regards to their bookings during office hours. Before a service provider starts receiving jobs, every individual partner receives an orientation session to familiarise with the online platform and their profile." />
                            </div>
                        </div>
                    </div>
                </div>
                <NewsLetter />
                <Footer />
            </div>
            </>
            );
}
