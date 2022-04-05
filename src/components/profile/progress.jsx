export const Progress = (props) =>{
    console.log(props);
    return (
        <div className="progress">
            

            
                
            <h4 className="prgoressTitle">Unit-{props.p.id}-</h4>
            <p className="unitTitle">{props.p.title}</p>
                    
            <div className="prog">
                <p>progress bar</p>
            </div>
        </div>
    );
}

<>

                 </>