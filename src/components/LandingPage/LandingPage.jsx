import React, { Component } from 'react';
import {NavBar, FAQ, AboutUs, Intro, PopularPaths, WhyUs, Reviews, Footer} from './index'

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
            {id: 1,title: "Web Dev", rating: 3, image: webDevImg, Pop: false},
            {id: 2,title: "Networking", rating: 4, image: networkImg, Pop: true},
            {id: 3,title: "Design", rating: 2, image: designImg, Pop: false},
        ],

        faq: [
            {id: 1, qst:'why are we still Here?', answer: 'Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER '},
            {id: 2, qst:'Why did you choose ESI?', answer: 'I wanted to know how it feels to be a cat'},
            {id: 3, qst:'why are we still Here?', answer: 'Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER Just to SUFFER '},
            {id: 4, qst:'Why did you choose ESI?', answer: 'I wanted to know how it feels to be a cat'}
        ]


     } 
     
    render() { 
        return (
            <div className="LandingPage">
                <NavBar/>
                <Intro/>
                <WhyUs cards={this.state.whyUsCards} />
                <PopularPaths roadmaps={this.state.roadmaps}/>
                <AboutUs/>
                <FAQ questions={this.state.faq} />
                <Reviews/>
                <Footer/>
            </div>
        );
    }
}
 
