import persons from './images/persons.svg';

 const WhyUs = (props) => {
        return (
            <div className="WhyUs">
                <div className="text">
                    <h2>why choose HBIRD</h2>
                    <p>We made Hbird with the ideology of Guiding people through the hard path of learning </p>
                </div>
                <div className="cards">
                    {props.cards.map(c => <Cards key={c.id} id={c.id} text={c.text} style={c.style} />)}
                </div>
                <div className="image">
                    <img src={persons} alt="" />
                </div>
            </div>
        );
}

export default WhyUs;

const Cards = (props) => {
    const {text, id, style} = props;
    return ( 
        <div className="card">
            <div className={style}>
                {id}
            </div>    
            <div className="cardText">
                {text}
            </div>
        </div>
    );
}