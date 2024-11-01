import { useParams,useNavigate } from "react-router-dom";
import axiosClient from "@/config/axios";
import { EventDetailResponseType, EventDetailType } from "@/schema/event.schema";
import { useState, useEffect } from "react";
import EventDetailSection from "./event-details-section";
import { useAuthContext } from '@/context/AuthContext';

export default function EventDetailsPage() {
    const { id } = useParams<{ id: string }>(); // Get the event ID from the URL
    const [event, setEvent] = useState<EventDetailType | null>(null); // Initialize event state
    const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state
    const [error, setError] = useState<Error | null>(null); // Initialize error state
    const [enrollStatus, setEnrollStatus] = useState<string | null>(null); // Enrollment status feedback
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();
    const fetchEvent = async () => {
        try {
            const { data } = await axiosClient.get<EventDetailResponseType>(`/api/Event/GetEventById/${id}`);
            console.log(data);
            const eventData = data.data;
            // const imageSrc = eventData.eventImages ? eventData.eventImages.map((img) => img.image) : [];
            setEvent({
                ...eventData,
                // imageSrc,
            })
        } catch (err: any) {
            setError(err);
        }
    };

    // Handle enrollment function
    const handleEnroll = async () => {
        if (!isAuthenticated) {
            navigate('/login', { state: { redirectTo: `/event/${id}` } });
            return;
        }
    
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                setEnrollStatus("Authentication token is missing. Please log in again.");
                return;
            }
    
            const response = await axiosClient.post(
                `/api/Event/UserEnrollEvent/enroll/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            if (response.data === "Enroll successfully!") {
                setEnrollStatus("You have successfully enrolled in this event.");
            } else {
                setEnrollStatus("Enrollment response received but could not confirm success.");
            }
        } catch (err: any) {
            if (err.response) {
                console.error("Error enrolling - Response data:", err.response.data);
                console.error("Error enrolling - Status code:", err.response.status);
                setEnrollStatus("Failed to enroll. Please try again or contact support.");
            } else {
                console.error("Error enrolling:", err);
                setEnrollStatus("Failed to enroll. Please try again.");
            }
        }
    };
    
    
    
    

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await Promise.all([fetchEvent()]);
            setIsLoading(false);
        };

        fetchData();
    }, [id]);

    if (isLoading) return <div className="text-center text-lg py-10">Loading...</div>;
    if (error) return <div className="text-center text-lg text-red-500 py-10">Error loading event details</div>;

    return (
        <div className="container mx-auto px-4 py-8">                    
            {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">{event?.eventName}</h2>
                    <p className="text-gray-600 mb-4">{event?.description || 'No description available.'}</p>
                    <div className="text-gray-800 mb-2">
                        <strong>Location:</strong> {event?.location}
                    </div>
                    <div className="text-gray-800 mb-2">
                        <strong>Start Date:</strong> {new Date(event?.startDate).toString()}
                    </div>
                    <div className="text-gray-800 mb-4">
                        <strong>End Date:</strong> {new Date(event?.endDate).toString()}
                    </div>
                    <EventDetailSection
                        id={event?.id}
                        eventName={event?.eventName}
                        startDate={new Date(event.startDate).toLocaleDateString()}
                        endDate={new Date(event.endDate).toLocaleDateString()}
                        location={event.location}
                        description={event.description}
                        imageSrc={event.eventImages[0].image}
                    />
                </div>
            </div> */}
            <EventDetailSection
                id={event?.id || ''}
                eventName={event?.eventName || 'No Event Name'}
                startDate={event?.startDate ? new Date(event.startDate).toString() : 'No Start Date'}
                endDate={event?.endDate ? new Date(event.endDate).toString() : 'No End Date'}
                location={event?.location || 'No Location'}
                description={event?.description || 'No Description'}
                imageSrc={event?.images?.[0]|| ''} // Default to an empty string if no image
            />

            <div className="text-center mt-6">
                <button
                    onClick={handleEnroll}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Enroll
                </button>
                {enrollStatus && <p className="mt-4 text-lg text-green-500">{enrollStatus}</p>}
            </div>
        </div>
    );
};

