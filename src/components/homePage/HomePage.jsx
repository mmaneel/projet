import React, { Component } from 'react';
import {Footer, NavBar, Roadmaps} from './index'
import webDevImg from './images/webDevImg.svg'
import designImg from './images/designImg.svg'
import networkImg from './images/networkImg.svg'
import './HomePage.scss'


class HomePage extends Component {
    state = { 
        enrolled: [
            1, 4, 5
        ],

        allRoads: [
            {id: 1,title: "Web Dev", cat:'Web', rating: 3, image: webDevImg, Pop: false, enr:true, prog: 35},
            {id: 2,title: "Networking", cat:'Network', rating: 4, image: networkImg, Pop: true, enr:false, prog: null},
            {id: 3,title: "Design", cat:'Design', rating: 2, image: designImg, Pop: false, enr:false, prog: null},
            {id: 4,title: "Web Dev", cat:'Web', rating: 3, image: webDevImg, Pop: false, enr:true, prog: 80},
            {id: 5,title: "Networking", cat:'Network', rating: 4, image: networkImg, Pop: true, enr:false, prog: null},
            {id: 6,title: "Design", cat:'Design', rating: 2, image: designImg, Pop: false, enr:true, prog: 67},
        ],
        allCats: [
            'web',
            'nework',
            'design'
        ]
     } 
    render() { 
        return (
            <div className="homePage">
                <NavBar/>
                <hr style={{width: "95%", margin: "70px auto 0 auto"}}/>
                <Roadmaps cats={this.state.allCats} allRoads={this.state.allRoads} enrolled={this.state.enrolled} />
                <Footer/>
            </div>
        );
    }
}
 
export default HomePage;