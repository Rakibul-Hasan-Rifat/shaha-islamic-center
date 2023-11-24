import { useLoaderData } from "react-router-dom";
import AuthorSpeech from "../../components/AuthorSpeech/AuthorSpeech";
import EventsContainer from "../../components/EventsContainer/EventsContainer";
import Statement from "../../components/Statement/Statement";

const Home = () => {
    const eventsData = useLoaderData()
    console.log(eventsData.slice(0, 4))
    return (
        <main>
            <AuthorSpeech />
            <EventsContainer eventsData={eventsData} />
            <Statement />
        </main>
    );
};

export default Home;