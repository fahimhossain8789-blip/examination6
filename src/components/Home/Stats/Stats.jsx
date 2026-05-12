import React from 'react';

const Stats = () => {
    return (
        <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-5 md:py-8 lg:py-12 '>
        <div className='flex items-center justify-between text-center container lg:max-w-7xl mx-auto py-4 md:py-5 lg:py-7 px-4 md:px-6 lg:px-8 text-white'>
            <div >
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>50k+</h2>
                <p className='lg:text-lg'>Active Users</p>
            </div>
            <div>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>200+</h2>
                 <p className='lg:text-lg'>Premium Tools</p>
            </div> 
            <div>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>4.9</h2>
                <p className='lg:text-lg'>Rating</p>
            </div>
        </div>
        </div>
    );
};

export default Stats;