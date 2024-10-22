import React, { useState, useEffect } from 'react';
import axiosClient from '@/config/axios';
import { BasicEventRequestType, EventResponseType } from '@/schema/event.schema';
import EventCard from './EventCard';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


import CarouselEvent1 from "@/assets/images/CarouselEvent1.jpg";
import CarouselEvent2 from "@/assets/images/CarouselEvent2.jpg";
import CarouselEvent3 from "@/assets/images/CarouselEvent3.jpg";


const EventList = () => {
    const [events, setEvents] = useState<BasicEventRequestType[]>([]);
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

    if (isLoading) return <div className="text-center text-lg py-10">Loading...</div>;
    if (error) return <div className="text-center text-lg text-red-500 py-10">Error loading events</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Event</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <img src={CarouselEvent1} alt="Event" className="w-full h-64 object-cover" />
                </CarouselItem>
                <CarouselItem>
                  <img src={CarouselEvent2} alt="Event" className="w-full h-64 object-cover" />
                </CarouselItem>
                <CarouselItem>
                  <img src={CarouselEvent3} alt="Event" className="w-full h-64 object-cover" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <h2 className="text-4xl font-bold text-center mb-6 text-orange-400">Upcoming Events</h2>
            {events.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <EventCard
                            key={event.id}
                            id={event.id}
                            eventName={event.eventName}
                            startDate={new Date(event.startDate).toLocaleDateString()}
                            endDate={new Date(event.endDate).toLocaleDateString()}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center text-lg text-gray-500 py-10">No events available</div>
            )}
        </div>
    );
};

export default EventList;
