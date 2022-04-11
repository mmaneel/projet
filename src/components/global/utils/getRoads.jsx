import webDevImg from '../images/roadmap-1.png'
import designImg from '../images/roadmap-6.png'
import networkImg from '../images/roadmap-4.png'


//this file should handle fetching roadmaps from DB


const AllRoads = [
            {id: 1,title: "Web Dev", cat:'Web', rating: 3, image: webDevImg, Pop: false, enr:true, prog: 35},
            {id: 2,title: "Networking", cat:'Network', rating: 4, image: networkImg, Pop: true, enr:false, prog: null},
            {id: 3,title: "Design", cat:'Design', rating: 2, image: designImg, Pop: false, enr:false, prog: null},
            {id: 4,title: "Web Dev", cat:'Web', rating: 3, image: webDevImg, Pop: false, enr:true, prog: 80},
            {id: 5,title: "Networking", cat:'Network', rating: 4, image: networkImg, Pop: true, enr:false, prog: null},
            {id: 6,title: "Design", cat:'Design', rating: 2, image: designImg, Pop: false, enr:true, prog: 67},
            {id: 7,title: "Networking", cat:'Network', rating: 4, image: networkImg, Pop: true, enr:false, prog: null},
            {id: 8,title: "Design", cat:'Design', rating: 2, image: designImg, Pop: false, enr:false, prog: null},
            {id: 9,title: "Web Dev", cat:'Web', rating: 3, image: webDevImg, Pop: false, enr:false, prog: 80},
            {id: 10,title: "Networking", cat:'Network', rating: 4, image: networkImg, Pop: true, enr:false, prog: null},
            {id: 11,title: "Design", cat:'Design', rating: 2, image: designImg, Pop: false, enr:false, prog: 67},
        ];







export const allRoads = () => {
    return (AllRoads);
}

export const RoadsByCat = (category) => {
    return AllRoads.filter(r => r.cat == category);
}

export const RoadsEnrolled = () => {
    return AllRoads.filter(r => r.enr == true);
}