import bannerImg from '/banner.png';
import { RiFocus2Fill } from "react-icons/ri";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-6 lg:py-10 grid md:grid-cols-2 items-center gap-6">
      
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 max-w-lg mx-auto">
        
        {/* Highlight Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#4F39F6]/20 to-[#9514FA]/20 text-sm">
          <RiFocus2Fill className="text-[#4F39F6] animate-ping text-xs" />
          <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">
            New: AI-Powered Tools Available
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
          Supercharge Your Digital Workflow
        </h1>

        {/* Description */}
        <p className="text-[#627382] text-center md:text-left">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
          <button className="rounded-full px-5 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium">
            Explore Products
          </button>
          <button className="rounded-full px-5 py-2 border border-[#4F39F6] text-[#4F39F6] font-medium hover:bg-gradient-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white transition">
            Explore Products
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex justify-center md:justify-end mt-5 md:mt-0">
        <img
          src={bannerImg}
          alt="Banner"
          className="rounded-lg shadow-2xl max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default Banner;