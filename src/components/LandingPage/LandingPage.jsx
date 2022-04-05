import React, { Component } from 'react';
import NavBar from './NavBar'
import Intro from './Intro'
import WhyUs from './WhyUs'
import PopularPaths from './PopularPaths';
import AboutUs from './AboutUs';

import Footer from './Footer';
import webDevImg from './images/webDevImg.svg'
import designImg from './images/designImg.svg'
import networkImg from './images/networkImg.svg'

import './LandingPage.scss'

export class LandingPage extends Component {
    state = { 
        whyUsCards: [
            {id: 1, text: "Hbird is and will always be free and available to all", style: "label label-tl label-pink"},
            {id: 2, text: "Clears orderd steps for every learning path ", style: "label label-tr label-orange"},
            {id: 3, text: "A community to help you in every step you make",  style: "label label-tl label-green"},
        ],

        roadmaps: [
            {id: 1,title: "Web Development", rating: 3, image: webDevImg, Pop: false},
            {id: 2,title: "Networking", rating: 4, image: networkImg, Pop: true},
            {id: 3,title: "Design", rating: 2, image: designImg, Pop: false},
        ]
     } 
    render() { 
        return (
            <div className="LandingPage">
                <NavBar/>
                <div className="IntroPage">
                    <Intro/>
                </div> 
                <WhyUs cards={this.state.whyUsCards} />
                <PopularPaths roadmaps={this.state.roadmaps}/>
                <AboutUs/>
                <Footer/>
            </div>
        );
    }
}
 
