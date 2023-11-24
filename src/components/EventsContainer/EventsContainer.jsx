import { Link } from "react-router-dom";
import Event from "../Event/Event";

const EventsContainer = ({ eventsData }) => {
    const newEventsData = eventsData.slice(0, 6)
    return (
        <section className="px-24 py-12 mx-auto text-[#441a05] bg-white">
            <h1 className="text-5xl mb-16">Our Events</h1>
            {
                newEventsData?.map(event => <Event key={event.id} event={event} />)
            }
            <div className="flex justify-center mt-12">
                <Link to='/events'>
                    <button className="btn btn-lg mx-auto bg-yellow-400 text-white border-0 hover:bg-yellow-500">
                        See more
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default EventsContainer;