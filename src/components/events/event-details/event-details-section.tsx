// EventDetailsPage.tsx
import React from 'react';
import { EventType} from '@/schema/event.schema';
import { Button } from '../../ui/button';

type EventDetailsSectionProps = {
  id?: string;
  eventName?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
  imageSrc?: string;
};

const EventDetailsSection: React.FC<EventDetailsSectionProps> = ({
  id = '',
  eventName = 'No Event Name',
  startDate = 'No Start Date',
  endDate = 'No End Date',
  location = 'No Location',
  description = 'No Description',
  imageSrc = '',
}) => {  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">{eventName}</h2>
          <div>
            <img key={imageSrc[0]} src={imageSrc[0]} alt={eventName} className="w-2/3 h-2/3 object-cover m-2 rounded-lg" />
          </div>
          <div className="text-gray-800 mb-2">
            <strong>ID</strong> {id}
          </div>
          <p className="text-gray-600 mb-4">{description || 'No description available.'}</p>
          <div className="text-gray-800 mb-2">
            <strong>Location:</strong> {location}
          </div>
          <div className="text-gray-800 mb-2">
            <strong>Start Date:</strong> {new Date(startDate).toLocaleString()}
          </div>
          <div className="text-gray-800 mb-4">
            <strong>End Date:</strong> {new Date( endDate).toLocaleString()}
          </div>
          <Button onClick={() => window.history.back()} className="bg-blue-500 text-white rounded-md mt-4">
            Back to Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSection;
