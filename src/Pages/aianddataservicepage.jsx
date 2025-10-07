import { useState, useEffect } from "react";
import { Database, BarChart3, Bot, Users, Shield, HelpCircle, Brain, TrendingUp, Sparkles, Cloud, Cpu, Globe, Plus, Minus } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const navItems = [
  { id: "hero", label: "Overview", icon: Database },
  { id: "services", label: "Services", icon: BarChart3 },
  { id: "partners", label: "Partners", icon: Users },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

const services = [
  {
    icon: Database,
    title: "Data Modernization",
    description: "We architect and implement scalable, cloud-based data platforms using Snowflake, Databricks, and modern ETL frameworks. Our approach ensures data unification, integrity, and accessibility — enabling enterprises to extract maximum value from every data point.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "With cutting-edge analytical models and visualization tools, we uncover hidden insights, predict business outcomes, and enhance decision-making. Our data experts help you transition from descriptive reporting to predictive and prescriptive intelligence.",
    gradient: "from-red-600 to-red-700"
  },
  {
    icon: Bot,
    title: "AI & Agentic Automation",
    description: "We design and deploy intelligent AI agents that automate workflows, interpret business context, and act autonomously. From customer engagement to enterprise operations, our solutions bring agility, precision, and scalability through AI-powered automation.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: Users,
    title: "Intelligent CRM & Customer Insights",
    description: "We enhance CRM systems with AI-driven intelligence to deliver personalized recommendations, lead prioritization, and customer retention strategies that boost lifetime value.",
    gradient: "from-red-600 to-red-700"
  },
  {
    icon: Shield,
    title: "Cybersecurity and Governance",
    description: "At Cache Digitech, security is intrinsic to every solution. We implement robust frameworks for data protection, access control, and regulatory compliance, ensuring trust and transparency in all digital ecosystems.",
    gradient: "from-red-500 to-red-600"
  }
];

const partners = [
  {
    name: "Snowflake",
    description: "Unified data platform for analytics, AI, and secure data sharing",
    icon: Database,
    color: "bg-blue-500"
  },
  {
    name: "Databricks",
    description: "Collaborative data engineering and machine learning platform",
    icon: Cpu,
    color: "bg-orange-500"
  },
  {
    name: "Senpiper",
    description: "Low-code AI platform enabling intelligent process automation",
    icon: Bot,
    color: "bg-purple-500"
  },
  {
    name: "Bridge AI",
    description: "Framework for agentic and conversational AI applications",
    icon: Bot,
    color: "bg-green-500"
  },
  {
    name: "GCP / AWS / Azure",
    description: "Scalable, cloud-native environments with enterprise-grade security",
    icon: Cloud,
    color: "bg-indigo-500"
  }
];

const industries = [
  "BFSI", "Telecom", "Retail", "Manufacturing", "Healthcare"
];

const faqs = [
  {
    question: "What does it mean to be a data-driven enterprise?",
    answer: "A data-driven enterprise uses analytics and intelligence at every decision point. It replaces intuition with evidence-based insights derived from real-time, accurate data."
  },
  {
    question: "How does AI transform business operations?",
    answer: "AI automates complex workflows, enhances decision accuracy, and enables real-time personalization. It improves efficiency across operations — from demand forecasting to customer service."
  },
  {
    question: "Is my data secure when implementing AI solutions?",
    answer: "Absolutely. We adhere to global security standards and integrate multi-layered cybersecurity and compliance frameworks to safeguard your data throughout its lifecycle."
  },
  {
    question: "How long does a typical data and AI implementation take?",
    answer: "Implementation timelines depend on scope and complexity, but most solutions are deployed within 8 to 16 weeks using our agile and iterative methodology."
  },
  {
    question: "Which industries benefit most from your AI and data analytics solutions?",
    answer: "We serve multiple sectors, with proven results in Finance, Telecom, Retail, Manufacturing, and Healthcare, where data-driven intelligence creates measurable business impact."
  },
  {
    question: "Can you help organizations without existing data infrastructure?",
    answer: "Yes. Whether starting from the ground up or modernizing legacy systems, we design modular, scalable, and future-ready architectures suited to your business maturity level."
  }
];

export default function DataAIPage() {
  const [activeSection, setActiveSection] = useState("");

  // Tabs should only activate on user click; no auto-activation on scroll
  useEffect(() => {
    // Intentionally left blank to disable scroll-based activation
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section id="hero" className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/aimlimg.webp')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-6 pt-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Data Analytics & AI
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl">
            We design and deploy intelligent AI agents that automate workflows, interpret business context, and act autonomously.
          </p>
        </div>
      </section>

      {/* Tabs Navigation (below hero, sticky on scroll) */}
      <nav className="bg-white border-b border-red-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center py-4">

            {/* Navigation Items - Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Items - Mobile */}
            <div className="md:hidden">
              <div className="flex items-center justify-center space-x-1 overflow-x-auto">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 min-w-max ${
                        isActive
                          ? "bg-red-600 text-white"
                          : "text-gray-600 hover:text-red-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview-content" className="relative min-h-screen bg-gradient-to-br from-white via-red-50/30 to-white overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Data & AI Solutions
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Harnessing{" "}
                  <span className="text-red-600 relative">
                    Data
                    <div className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-0.5 lg:h-1 bg-red-600/30 rounded-full"></div>
                  </span>{" "}
                  and{" "}
                  <span className="text-red-600 relative">
                    AI
                    <div className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-0.5 lg:h-1 bg-red-600/30 rounded-full"></div>
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light">
                  for Strategic Business Growth
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                At Cache Digitech, we believe that data and artificial intelligence are the cornerstones of modern business transformation. We empower organizations to evolve into intelligent, insight-driven enterprises — where every decision is informed by analytics and every process is optimized through AI.
              </p>
              
              {/* Mission Statement */}
              <div className="relative p-6 lg:p-8 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl text-white shadow-2xl">
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 lg:w-6 lg:h-6" />
                    <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>
                <div className="pt-6 lg:pt-8">
                  <p className="font-medium mb-2">Our Mission</p>
                  <p className="text-lg lg:text-xl leading-relaxed">
                    Transform your data into a powerful enabler of innovation, efficiency, and sustainable growth.
                  </p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-3xl"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695902173528-0b15104c4554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzU5NzI5NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI and Machine Learning Visualization"
                  className="w-full h-64 sm:h-80 lg:h-[500px] xl:h-[600px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              How We Transform Your Business
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data and AI solutions designed to accelerate your digital transformation journey
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Icon Container */}
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${service.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 lg:space-y-4">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl lg:rounded-3xl transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section id="partners" className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6 lg:space-y-8">
              {/* Header */}
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Our Strategic Technology Partners
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  Our Strategic Technology
                  <span className="text-red-600 block">Partners</span>
                </h2>
                
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  To deliver world-class data and AI capabilities, we collaborate with global technology leaders:
                </p>
              </div>
              
              {/* Partners Grid */}
              <div className="space-y-3 lg:space-y-4">
                {partners.map((partner, index) => {
                  const Icon = partner.icon;
                  return (
                    <div 
                      key={index} 
                      className="group flex items-start gap-3 lg:gap-4 p-4 lg:p-6 bg-gray-50 hover:bg-white rounded-xl lg:rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 ${partner.color} rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-1">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Impact Statement */}
              <div className="relative p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl lg:rounded-2xl text-white overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3 lg:mb-4">
                    <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-red-400" />
                    <span className="text-red-400 font-medium">Global Impact</span>
                  </div>
                  <p className="text-base lg:text-lg leading-relaxed">
                    Through these partnerships, Cache Digitech provides end-to-end solutions spanning data engineering, analytics, AI deployment, automation, and governance across multiple industries — including{" "}
                    <span className="text-red-400 font-medium">
                      {industries.join(", ")}
                    </span>.
                  </p>
                </div>
                
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-red-600/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 lg:w-24 lg:h-24 bg-red-600/10 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative order-first lg:order-last">
              {/* Main Image */}
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcGFydG5lcnNoaXAlMjBuZXR3b3JrfGVufDF8fHx8MTc1OTczNzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Technology Partnership Network"
                  className="w-full h-64 sm:h-80 lg:h-[400px] xl:h-[500px] object-cover rounded-2xl lg:rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent rounded-2xl lg:rounded-3xl"></div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -z-10 top-4 right-4 lg:top-8 lg:right-8 w-48 h-48 lg:w-72 lg:h-72 bg-red-600/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 px-6 bg-gradient-to-br from-red-50/50 via-white to-red-50/30">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="text-red-600 block">Questions</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Get quick answers to common questions about our data and AI solutions
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="group bg-white border border-gray-200 hover:border-red-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group-hover:bg-red-50/50 transition-colors duration-300">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-8 h-8 bg-red-100 group-hover:bg-red-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-colors duration-300">
                        <span className="text-red-600 font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 text-left">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="ml-12">
                      <p className="text-gray-600 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Bottom CTA */}
          {/* <div className="text-center mt-12 lg:mt-16 p-6 lg:p-8 bg-white rounded-xl lg:rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Our team of experts is here to help you with any additional questions about our solutions.</p>
          </div> */}
        </div>
      </section>
    </div>
  );
}