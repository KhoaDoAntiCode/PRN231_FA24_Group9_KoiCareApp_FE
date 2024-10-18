import React from 'react'
import yoga from "../../assets/images/Yoga+Header.png"
import { Button } from '../ui/button'
const EventCard = () => {
  return (
    <article className='flex flex-row w-full relative px-5 py-5 mx-5 my-5'>
        <div className=' rounded-[-25px] block w-[-486px] h-[-274px]  '>
            <img src= {yoga} alt='yoga'  />
        </div>
        <div className='pl-9'>
            <div>Headline</div>

            <div>Wednesday, October 16, 2024</div>
            <br/>
            <div> 6:30 PM  8:30 PM</div>

            <Button className='bg-color-secondary rounded-s-md'>View event</Button>
        </div>
    </article>
  )
}

export default EventCard
