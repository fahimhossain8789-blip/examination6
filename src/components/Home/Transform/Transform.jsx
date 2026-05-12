import React from 'react';

const Transform = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-[#E1E7FF] py-10 md:py-20 flex items-center justify-center mt-8 md:mt-12 lg:mt-16'>
        <div className='container lg:max-w-7xl mx-auto space-y-3 md:space-y-5 px-5 md:px-0'>
            <div className=' flex flex-col items-center justify-center  space-y-2'>
                <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-center'>Ready to Transform Your Workflow?</h2>
                <p className='text-center'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <div className='flex gap-2 md:gap-3'>
                <button className='btn bg-white rounded-full'>Explore Products</button>
                <button className='btn btn-outline rounded-full hover:bg-white'>View Pricing</button>
                </div>
                <p className='text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
        </div>
    );
};

export default Transform;