import './Events.css';

export default function Events(props) {
    return (
        <div className="card">
            <div className="image">
                <img src={props.img} alt="" width="100%" height="143px" />
            </div>
            <div className="about">
                <p style={{fontSize: "20px", margin: "12px 0px 22px 0px", fontWeight: 800}}>{props.name}</p>
                <p style={{color: "red"}}>{props.date}</p>
                <p>{props.address}</p>
                <p style={{color: "#a5a5a5"}}>{props.about}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}