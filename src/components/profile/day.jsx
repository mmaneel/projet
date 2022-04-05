export const Day= ({ day }) => {
    return (
    <>
                <div className="day">
                <p>{day.day}</p>
                <div className="blackBack">
                    <div style={{backgroundColor:`${day.road.color}`, height: `${day.prog}%`}} className="frontColor"></div>
                </div>
                </div>
    </>
    
    );
}