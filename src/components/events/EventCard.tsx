import React from 'react';
import { useNavigate } from 'react-router-dom';
import yoga from '../../assets/images/Yoga+Header.png';
import { Button } from '../ui/button';

type EventProps = {
    id: string;
    eventName: string;
    startDate: string;
    endDate: string;
};

const EventCard = ({ id, eventName, startDate, endDate }: EventProps) => {
    const navigate = useNavigate();

    const handleViewEvent = () => {
        navigate(`/events/${id}`);
    };

    return (
        <article className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto my-5">
            <div className="md:w-1/2 w-full">
                <img src={yoga} alt="Event" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between p-6 md:w-1/2 w-full">
                <div>
                    <h3 className="text-2xl font-bold text-slate-950 mb-2">{eventName}</h3>
                    <div className="text-gray-800 mb-2">
                        <strong>Start Date:</strong> {startDate}
                    </div>
                    <div className="text-gray-800 mb-4">
                        <strong>End Date:</strong> {endDate}
                    </div>
                </div>
                <Button onClick={handleViewEvent} className="bg-red-700 text-white mt-4 rounded-md hover:bg-red-500">
                    View Event
                </Button>
            </div>
        </article>
    );
};

export default EventCard;
