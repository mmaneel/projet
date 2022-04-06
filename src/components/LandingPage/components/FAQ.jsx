import rightArrow from '../images/rightArrow.svg'
//import './faq.scss'
export const FAQ = ({questions}) => {

    return ( 
        <div className="faq">
            <h2 className="title">Frequently Asked Questions</h2>
            <div className="questions-container">
            {questions.map(qst => <Question key={qst.id} question={qst.qst} answer={qst.answer} />)}
            </div>
        </div>
     );
}
 





const Question = ({question, answer}) => {
    return (
        <div className="qst-container">
            <div>
                <button className='btn btn-icon'><img src={rightArrow} alt="" /></button>
                </div>

            <div className="text">
                <p className="qst">{question}</p>
                <p className="answer">{answer}</p>
            </div>
        </div>
    );

}