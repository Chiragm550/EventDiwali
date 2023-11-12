import Events from "../Events.js";
import "./Create.css";
import "./Home.css";
import NavBar from "../NavBar.js";
import event1 from "../../images/events1.jpg";
import event2 from "../../images/events2.jpg";
import event3 from "../../images/events3.jpg";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    let [events, setEvents] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3010/get")
        .then((result) => {
            let resData = result.data.reverse();
            setEvents(resData);
            console.log(result.data);
        })
        .catch((err) => {
            console.log(err);
            console.log(events);
        });
    }, []);
    return (
        <div>
            <NavBar />
            <div className="image1">
                <h1 id="heading">Plan Your Perfect Event With Event++</h1>
                <p id="para">It's all in the details</p>
            </div>
            <h1 id="popular">Popular</h1>
            <div id="event">
                {events.map((event, i) => (
                    <Events
                        name = {event.task.eventName}
                        img={event.task.eventImgURL}
                        address={event.task.eventAddress}
                        date={event.task.eventDate}
                        about={event.task.eventAbout}
                        price={event.task.eventPrice}
                        key = {i}
                    />
                ))}
            </div>
            <hr />
        </div>
    );
}

export default Home;
