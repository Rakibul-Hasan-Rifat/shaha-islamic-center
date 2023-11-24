import { useLoaderData } from "react-router-dom";
import Event from "../../components/Event/Event";

const EventsPage = () => {

    const allEventsData = useLoaderData();

    return (
        <section className="px-24 py-12 mx-auto text-[#441a05] bg-white">
            {
                allEventsData?.map((singleEvent) => <Event key={singleEvent.id} event={singleEvent} />)
            }
        </section>
    );
};

export default EventsPage;