import { Shield, Cloud, Database, Cog, BarChart3, HeadphonesIcon, Globe, Users, Heart, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const coreOfferings = [
    {
      icon: <Cog className="h-8 w-8 text-red-600" />,
      title: "System Integration & IT Infrastructure Solutions",
      description: "Designing and implementing secure, scalable, and high-performing IT ecosystems by integrating cutting-edge technologies across compute, storage, and network layers. Building the digital backbone of enterprises through advanced data centers, private and hybrid cloud environments, and resilient IT frameworks built for performance and growth."
    },
    {
      icon: <Shield className="h-8 w-8 text-black" />,
      title: "Cybersecurity",
      description: "Delivering robust, end-to-end security architectures and compliance frameworks that safeguard businesses and ensure continuity in an evolving threat landscape. Protecting enterprises with end-to-end security architectures, compliance solutions, and managed detection & response services."
    },
    {
      icon: <Cloud className="h-8 w-8 text-red-600" />,
      title: "Cloud & Digital Transformation",
      description: "Helping enterprises modernize through hybrid and multi-cloud strategies that enhance scalability, agility, and operational efficiency. Enabling organizations to move to the cloud confidently through hybrid, private, and public cloud solutions, ensuring business continuity and scalability."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-black" />,
      title: "Consulting & Audit",
      description: "Our Consulting & Audit division specializes in designing and implementing end-to-end infrastructure solutions that are scalable, secure, and compliant. We conduct audits, gap analyses, and risk assessments, and our consulting experts ensure your systems remain robust, optimized, and aligned with compliance and business objectives."
    },
    {
      icon: <Database className="h-8 w-8 text-red-600" />,
      title: "Data Analytics & Artificial Intelligence (AI)",
      description: "Our Data Analytics team transforms complex data into meaningful business insights, empowering leaders to make informed, strategic, and data-driven decisions. Our energetic AI team works across industries to solve complex challenges, delivering predictive dashboards, intelligent insights, and enhanced user experiences that drive innovation and efficiency."
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-black" />,
      title: "Managed Services",
      description: "At the heart of our delivery excellence lies our world-class service infrastructure, comprising a 24x7 Global Network Operations Center (NOC) and a dedicated Security Operations Center (SOC). These centers ensure continuous monitoring, rapid response, and compliance — keeping our customers' operations secure, connected, and protected worldwide. Offering round-the-clock operational support, proactive monitoring, and optimization services to help clients focus on their core business goals."
    }
  ];

  const industries = [
    "Telecom",
    "Retail",
    "Banking & Financial Services", 
    "Automobile & Manufacturing",
    "IT/ITES",
    "Healthcare & Hospitality",
    "Government & Public Sector"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white h-screen flex items-center">
        {/* Background video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            src="/videos/aboutpage.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        {/* Background geometric elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/3 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-600/2 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-red-600 font-bold">
              Cache Digitech Pvt. Ltd.
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-6">
              A leading System Integration, Consulting and IT Infrastructure company empowering organizations to innovate, secure, and scale for over three decades in a digital first world.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm">
                <Globe className="h-4 w-4 mr-2" />
                Global Presence
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm">
                <Users className="h-4 w-4 mr-2" />
                34+ Years Experience
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm">
                <Shield className="h-4 w-4 mr-2" />
                24x7 Support
              </span>
            </div>
          </div>
        </div>
        
        {/* Decorative boundary */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-red-600"></div>
          
          {/* Geometric pattern */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="flex space-x-2 transform translate-y-1/2">
              <div className="w-3 h-3 bg-red-600 rotate-45"></div>
              <div className="w-2 h-2 bg-red-600/60 rotate-45"></div>
              <div className="w-4 h-4 bg-red-600 rotate-45"></div>
              <div className="w-2 h-2 bg-red-600/60 rotate-45"></div>
              <div className="w-3 h-3 bg-red-600 rotate-45"></div>
            </div>
          </div>
          
          {/* Corner decorative elements */}
          <div className="absolute bottom-0 left-8 transform translate-y-1/2">
            <div className="w-16 h-px bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 right-8 transform translate-y-1/2">
            <div className="w-16 h-px bg-gradient-to-l from-red-600 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black font-bold">About Cache Digitech</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Cache Digitech Pvt. Ltd. is a leading System Integration, Consulting and IT Infrastructure company that has been empowering organizations to innovate, secure, and scale for over three decades in a digital first world. Headquartered in New Delhi, with offices in Mumbai and Dubai Cache Digitech operates with a truly global footprint. Our business and services extend across continents, supporting enterprises around the world through our 24x7 service infrastructure, global operations, and partner ecosystem.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                At Cache Digitech, we believe technology is not just an enabler, it's a catalyst for transformation. Our solutions are designed to help organizations modernize their IT landscape, accelerate digital transformation, and stay resilient in a connected, data-driven world. Cache Digitech has built a reputation for engineering excellence, customer-centricity, and technological foresight and is serving enterprises across telecom, BFSI, manufacturing, public sector, and global enterprises delivering solutions that combine intelligence, agility, and trust.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-4 font-bold">Our Commitment</h3>
              <p className="text-lg leading-relaxed">
                We offer a comprehensive portfolio spanning System Integration, IT Infrastructure, Cybersecurity, Cloud, Consulting & Audit, Data Analytics, Artificial Intelligence (AI), and Managed Services : making us a trusted, end-to-end technology partner.
              </p>
              <div className="mt-6 p-4 bg-white/20 rounded-lg">
                <p className="text-center">
                  "To become the most trusted company for our customers, OEMs, and employees"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black font-bold">Our Core Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform and elevate your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreOfferings.map((offering, index) => (
              <div key={index} className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {offering.icon}
                </div>
                <h3 className="text-xl mb-4 text-black font-bold">{offering.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cache Digitech Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-8 text-black font-bold">Why Cache Digitech</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                What makes Cache Digitech different is our agility, flexibility, and customer-first mindset.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                We combine deep technical expertise with human understanding, offering accessible global support, world-class infrastructure, and a fantastic team of skilled professionals who deliver excellence with speed and empathy.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Every engagement reflects our commitment to quality, innovation, and enduring partnerships.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl text-black font-bold">Our Philosophy</h3>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-black text-white p-6 rounded-xl mb-6">
                <h4 className="text-xl mb-3 font-bold">Delivering Excellence with Agility, Service with Heart</h4>
                <p className="leading-relaxed">
                  We blend engineering precision with genuine human care — ensuring that technology not only performs but also empowers.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At the heart of Cache Digitech lies a simple yet powerful belief - technology should serve people. Every project we deliver reflects our commitment to excellence, our agility in execution, and our empathy for the customer journey. This human-centered approach has made us a trusted partner for some of India's and the world's most respected enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black font-bold">Our Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With a strong presence across multiple sectors, Cache Digitech partners with global technology leaders to deliver end-to-end solutions that drive efficiency, innovation, and customer satisfaction.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={`/insights?industry=${encodeURIComponent(industry)}#success-stories`}
                className="px-6 py-3 text-lg bg-white text-black  border border-gray-300 rounded-lg  hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label={`View ${industry} case studies`}
              >
                {industry}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-100">
                To become the most trusted technology partner and the best company for our customers, OEMs, and employees powered by a global presence, best-in-class service infrastructure, 24x7 NOC, and secure, compliant SOC.
              </p>
              <p className="text-lg leading-relaxed text-gray-100 mt-4">
                We aim to continuously earn trust and confidence through operational excellence, accessibility, and unwavering commitment to quality.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-100">
                To design and deliver agile, intelligent, and secure digital ecosystems that elevate business performance, strengthen digital trust, and drive sustainable global growth , while making every customer, partner, and employee proud to be part of the Cache Digitech journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl mb-4">Cache Digitech Pvt. Ltd.</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering organizations to innovate, secure, and scale in a digital first world.
          </p>
          <div className="mt-6 flex justify-center space-x-8">
            <span className="text-gray-400">New Delhi</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Mumbai</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Dubai</span>
          </div>
        </div>
      </footer> */}
    </div>
  );
}