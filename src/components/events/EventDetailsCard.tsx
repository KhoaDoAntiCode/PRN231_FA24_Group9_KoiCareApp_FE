// EventDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '@/config/axios';
import { BasicEventRequestType, EventResponseType } from '@/schema/event.schema';
import { Button } from '../ui/button';

const EventDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<BasicEventRequestType[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchEventDetails = async () => {
        try {
            const { data } = await axiosClient.get<EventResponseType>(`/api/Event/GetEventById/${id}`);
            setEvent(data.data);
            setIsLoading(false);
        } catch (err: any) {
            setError(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchEventDetails();
        }
    }, [id]);

    if (isLoading) return <div className="text-center text-lg py-10">Loading...</div>;
    if (error || !event) return <div className="text-center text-lg text-red-500 py-10">Error loading event details</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">{event.eventName}</h2>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="text-gray-800 mb-2">
                        <strong>Location:</strong> {event.location}
                    </div>
                    <div className="text-gray-800 mb-2">
                        <strong>Start Date:</strong> {new Date(event.startDate).toString()}
                    </div>
                    <div className="text-gray-800 mb-4">
                        <strong>End Date:</strong> {new Date(event.endDate).toString()}
                    </div>
                    <Button onClick={() => window.history.back()} className="bg-blue-500 text-white rounded-md mt-4">
                        Back to Events
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;
