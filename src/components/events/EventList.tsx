import axiosClient from '@/config/axios';
import { BasicEventRequestType, EventResponseType } from '@/schema/event.schema';
import { useState, useEffect } from 'react';
import EventCard from './EventCard';

const EventList = () => {
    const [event,setEvents] = useState<BasicEventRequestType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchEvents = async () => {
        try {
            const { data } = await axiosClient.get<EventResponseType>("/api/Event/GetAllEvents");
            setEvents(data.data);
            setIsLoading(false);
        } catch (err: any) {
            setError(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading events</div>;
  return (
    <div>
      <h2>Event List</h2>
      <p>This is the event list page</p>
      {event !== undefined ? (
        event.map((event) => (
          <div key={event.id}>
            <EventCard 
                eventName = {event.eventName}
                description = {event.description}
                location = {event.location}
                startDate = {event.startDate.toString()}
                endDate = {event.endDate.toString()}
            />
          </div>
        ))
    ) : (
        <div>No events available</div>
      )}
    </div>
  )
}

export default EventList
