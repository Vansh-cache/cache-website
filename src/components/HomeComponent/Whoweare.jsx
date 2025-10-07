import React from "react";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();

  return (
    <section style={{ backgroundColor: '#fdf0f1' }} className="bg-[] py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Section Header with Animation */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold bg-black bg-clip-text text-transparent mb-6 ">
            Who We Are
          </h2>
          <div className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed animate-fade-in-up">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Innovate. Secure. Scale. With Trust.</h3>
            <p className="mb-4">
              <span className="font-bold text-red-600">Cache Digitech Pvt. Ltd.</span> is a story of trust, transformation, and technology with purpose.
              Founded by <span className="font-semibold text-gray-800">Prarthana Gupta</span>, a visionary entrepreneur and change-maker, Cache has grown from a humble beginning into a global system integration and IT services company, empowering leading enterprises across Telecom, BFSI, Manufacturing, Consulting, and Government sectors.
            </p>
            <p className="mb-4">
              For over <span className="font-semibold text-red-600">three decades</span>, we've helped organizations innovate, secure, and scale through world-class solutions in <span className="font-semibold">Cybersecurity, Artificial Intelligence, Cloud, and IT Infrastructure</span>.
            </p>
            <p className="mb-4">
              Our journey has been driven by one belief — <span className="font-bold text-red-600">put the customer first, always</span>.
              That mindset has earned us the trust of global partners, industry leaders, and thousands of professionals who see Cache not just as a company, but as a commitment to excellence.
            </p>
            <p>
              At our core, we stand for <span className="font-semibold text-red-600">technology built on trust and human values</span> — where innovation is guided by empathy, sustainability, and purpose.
            </p>
          </div>
        </div>

        {/* Services with staggered animations */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div onClick={() => navigate('/manageservices')} className="group bg-white p-6 rounded-2xl border-2 border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-left">
            <div className="w-14 h-14 bg-gradient-to-br from-red-300 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3  transition-colors duration-300">
              <span className="inline-block ">Managed Services</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Complete IT infrastructure management and support solutions.
            </p>
          </div>

          <div onClick={() => navigate('/aianddataservice')} className="group bg-white p-6 rounded-2xl border-2 border-transparent  shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-up">
            <div className="w-14 h-14 bg-gradient-to-br from-red-300 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3  transition-colors duration-300">
              <span className="inline-block " style={{animationDelay: '0.1s'}}>Data Analytics & AI</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Advanced analytics and artificial intelligence solutions.
            </p>
          </div>

          <div onClick={() => navigate('/cybersecurity')} className="group bg-white p-6 rounded-2xl border-2 border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-right">
            <div className="w-14 h-14 bg-gradient-to-br from-red-300 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3  transition-colors duration-300">
              <span className="inline-block " style={{animationDelay: '0.2s'}}>Cybersecurity</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Comprehensive cybersecurity and threat protection services.
            </p>
          </div>

          <div onClick={() => navigate('/cloudservices')} className="group bg-white p-6 rounded-2xl border-2 border-transparent  shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-left">
            <div className="w-14 h-14 bg-gradient-to-br from-red-300 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3  transition-colors duration-300">
              <span className="inline-block " style={{animationDelay: '0.3s'}}>Cloud </span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Scalable cloud infrastructure and migration services.
            </p>
          </div>

          <div onClick={() => navigate('/infrastructureservice')} className="group bg-white p-6 rounded-2xl border-2 border-transparent  shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-up">
            <div className="w-14 h-14 bg-gradient-to-br from-red-300 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3  transition-colors duration-300">
              <span className="inline-block " style={{animationDelay: '0.4s'}}>Infra & Networking</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed  transition-colors duration-300">
              Infrastructure assessment and comprehensive audit services.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out 0.2s both;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;