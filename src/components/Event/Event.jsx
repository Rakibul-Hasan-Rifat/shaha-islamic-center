import { Link, useLocation } from 'react-router-dom'
import './Event.css'

const Event = ({ event }) => {
    
    const location = useLocation();
    console.log(event, location)

    const { id, date, event_title, time, event_place } = event
    return (
        <div className="border-t mb-8 pt-8 flex justify-between items-center mx-auto">
            <div className="flex gap-3 items-center self-start w-1/5">
                <div>
                    <h3 className="custom_gray custom_font text-6xl font-bold">{date.month_day}</h3>
                </div>
                <div className="flex flex-col">
                    <span className='font-extrabold'>{date.month_code}</span>
                    <span className='custom_gray'>{date.week_day}</span>
                </div>
            </div>
            <div className='w-3/5'>
                <h4 className="custom_font text-2xl font-bold mb-6">{event_title}</h4>
                <p className='custom_gray'>{date.month_day} {date.month_code} @ {time.starting_time} - {time.end_time}</p>
                <p>
                    <span className='text-yellow-400'>{event_place.hall}, </span>
                    <span className='custom_gray'>{event_place.road}, {event_place.address}</span>
                </p>
            </div>
            <div className='w-1/5 flex flex-col'>
                <Link
                    to={`/events/${id}`} 
                    // state={location.pathname}
                    className='self-end btn bg-yellow-500 hover:bg-green-500
                     text-white border-0'>
                        Event Details
                </Link>
            </div>
        </div>
    );
};

export default Event;