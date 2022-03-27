export const Road = ({road}) => {
    return (
        <div className="road">
            <div style={{border: `solid 3px ${road.color}`}} className="dot"></div>
            <p>{road.name}</p>
        </div>

    );

}