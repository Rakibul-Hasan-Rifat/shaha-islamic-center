import { useParams, useLoaderData } from 'react-router-dom'
import './DetailsPage.css'


const DetailsPage = () => {
    const { id } = useParams()
    const eventsData = useLoaderData()
    const filteredData = eventsData.filter(singleData => singleData.id === id)
    const {event_title, event_description, img_url, date, time, event_organizer, event_place} = filteredData[0]
    return (
        <section className='p-28 text-gray-400 bg-white'>
            <div>
                <img src={img_url} alt="" />
            </div>
            <div>
                <h1 className='title text-4xl text-center mt-16 mb-8'>{event_title}</h1>
                <p className='text-lg'>{event_description}</p>
            </div>
            <div className='flex justify-between mt-12'>
                <div>
                    <h4 className="title text-xl mb-4">DETAILS</h4>
                    <p>
                        <span className='text-[#441a05]'>Start:</span> {date.month} {date.month_day} @ {time.starting_time} <br />
                        <span className='text-[#441a05]'>End:</span> {date.month} {date.month_day} @ {time.end_time}
                    </p>
                </div>
                <div>
                    <h4 className="title text-xl mb-4">ORGANIZER</h4>
                    <p>
                        {event_organizer.name} <br />
                        <span className='text-[#441a05]'>Phone:</span> {event_organizer.phone} <br />
                        <span className='text-[#441a05]'>Email:</span> {event_organizer.email}
                    </p>
                </div>
                <div>
                    <h4 className="title text-xl mb-4">VANUE</h4>
                    <p>
                        {event_place.hall} <br />
                        {event_place.road} <br />
                        {event_place.address}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DetailsPage;