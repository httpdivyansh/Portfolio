import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { testimonials } from '@/data';

const Clients = () => {
    return (
        
        <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from my {" "}
        <span className="text-purple">colleagues</span>
      </h1>
      <div className="flex flex-col items-center pt-10">
        
        <InfiniteMovingCards 
        items={testimonials}
        direction='right'
        speed='slow' ></InfiniteMovingCards>
        </div>
      </div>
      
        
    );
}

export default Clients;
