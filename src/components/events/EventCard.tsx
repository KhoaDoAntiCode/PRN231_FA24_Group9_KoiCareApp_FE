import React from 'react'
import yoga from "../../assets/images/Yoga+Header.png"
import { Button } from '../ui/button'



type EventProps = {
    eventName: string;
    description?: string; // Mark as optional if it can be undefined
    location: string;
    startDate: string;
    endDate: string;
};
const EventCard = ({ eventName, description, location, startDate, endDate }: EventProps) => {
  return (
    <article className='flex flex-row w-full relative px-5 py-5 mx-5 my-5'>
        <div className=' rounded-[-25px] block w-[-486px] h-[-274px]  '>
            <img src= {yoga} alt='yoga'  />
        </div>
        <div className='pl-9'>
            <div>Headline {eventName}</div>

            <div>{startDate}</div>
            <br/>
            <div>{endDate}</div>

            <Button className='bg-color-secondary rounded-s-md'>View event</Button>
        </div>
    </article>
  )
}

export default EventCard
