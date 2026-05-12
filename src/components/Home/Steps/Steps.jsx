import user_png from '../../../assets/user.png'
import package_png from '../../../assets/package.png'
import rocket_png from '../../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='flex flex-col items-center  container lg:max-w-7xl px-4 mx-auto space-y-4 md:space-y-6 lg:space-y-8 my-20 md:my-30'>
            <div className='text-center'>
            <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold'>Get Started in 3 Steps</h2>
            <p className='text-zinc-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                <div className='border border-zinc-200 rounded-xl p-10 lg:p-20 flex flex-col items-center justify-center text-center relative transition-all duration-300 hover:shadow-2xl'>
                    <img src={user_png} alt={user_png} />
                    <h2 className='text-xl font-bold'>Create Account</h2>
                    <p className='text-zinc-500'>Sign up for free in seconds. No credit card required to get started.</p>
                    <p className='absolute top-4 right-4   rounded-full w-8 h-8 '> <span className='p-2  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>01</span> </p>
                </div>
                <div className='border border-zinc-300 rounded-xl p-10 flex flex-col items-center justify-center text-center relative transition-all duration-300 hover:shadow-2xl'>
                    <img src={package_png} alt={package_png} />
                    <h2 className='text-xl font-bold'>Choose Products</h2>
                    <p className='text-zinc-500'>Browse our catalog and select the tools that fit your needs.</p>
                    <p className='absolute top-4 right-4   rounded-full w-8 h-8 '> <span className='p-2  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>02</span> </p>
                </div>
                <div className='border border-zinc-300 rounded-xl p-10 flex flex-col items-center justify-center text-center relative transition-all duration-300 hover:shadow-2xl'>
                    <img src={rocket_png} alt={rocket_png} />
                    <h2 className='text-xl font-bold'>Start Creating</h2>
                    <p className='text-zinc-500'>Download and start using your premium tools immediately.</p>
                    <p className='absolute top-4 right-4   rounded-full '> <span className='p-2  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full '>03</span> </p>
                </div>
                
                
            </div>
        </div>
    );
};

export default Steps;