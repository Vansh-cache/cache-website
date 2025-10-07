import { Trophy } from 'lucide-react';

const AwardsSection = () => {
  // Sample data with placeholder images and names
  const slides = [
    {
      id: 1,
      name: "Best Women Entrepreneur Award",
      image: "/awards/Best Women Enterpreneur Award 1.avif",
    },
    {
      id: 2,
      name: "Brightstar Award",
      image: "/awards/Brightstar Award 1.avif",
    },
    {
      id: 3,
      name: "Business Leader Award",
      image: "/awards/Business Leader Award 1.avif",
    },
    {
      id: 4,
      name: "CIOs INDIA Award",
      image: "/awards/CIOs INDIA Award 1.avif",
    },
    {
      id: 5,
      name: "CIOs INDIA Award",
      image: "/awards/CIOs INDIA Award 2.avif",
    },
    {
      id: 6,
      name: "Dell Technologies Award",
      image: "/awards/Dell Technologies Award 1.avif",
    },
    {
      id: 7,
      name: "IBM Akshay Shonik Award",
      image: "/awards/IBM Akshay Shonik Award.avif",
    },
    {
      id: 8,
      name: "Jubilant Award",
      image: "/awards/Jubliant Award 1.avif",
    },
    {
      id: 9,
      name: "Savex Award",
      image: "/awards/Savex Award 1.avif",
    },
    {
      id: 10,
      name: "Schneider Electric Award",
      image: "/awards/Schneider Electric Award 1.avif",
    },
    {
      id: 11,
      name: "Schneider Electric Award",
      image: "/awards/Schneider Electric Award 1.avif",
    },
    {
      id: 12,
      name: "Excellence 2011 CRN Award",
      image: "/awards/Xcellence 2011 CRN Award 1.avif",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-red-600/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-red-600/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-red-600 p-3 rounded-full mr-4">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-6 font-bold text-black">
            Awards & <span className="text-red-600">Accolades</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Recognizing excellence and innovation in our journey of technological advancement and client satisfaction across three decades of industry leadership.
          </p>
        </div>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative w-full">
        <div className="flex animate-slide-infinite">
          {/* First set of slides */}
          {slides.map((slide) => (
            <div
              key={`first-${slide.id}`}
              className="flex-shrink-0 mx-6 text-center group"
              style={{ minWidth: "280px" }}
            >
              <div className="relative w-full h-80 overflow-hidden transition-all duration-500 transform group-hover:scale-105 bg-white  ">
                <div className="absolute inset-0 "></div>
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                
                {/* Award shine effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div> */}
              </div>
              
              <div className="mt-6 px-2">
                <h3 className="text-lg text-black group-hover:text-red-600 transition-colors duration-300 leading-tight">
                  {slide.name}
                </h3>
                <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Second set of slides (duplicate for seamless loop) */}
          {slides.map((slide) => (
            <div
              key={`second-${slide.id}`}
              className="flex-shrink-0 mx-6 text-center group"
              style={{ minWidth: "280px" }}
            >
              <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 bg-white border-2 border-gray-100 group-hover:border-red-600/20">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Award shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="mt-6 px-2">
                <h3 className="text-lg text-black group-hover:text-red-600 transition-colors duration-300 leading-tight">
                  {slide.name}
                </h3>
                <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="relative mt-16">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-red-600"></div>
      </div>

      <style>{`
        @keyframes slide-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide-infinite {
          animation: slide-infinite 40s linear infinite;
          width: calc(280px * 24 + 3rem * 24); /* Adjust based on slide count and spacing */
        }

        .animate-slide-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AwardsSection;