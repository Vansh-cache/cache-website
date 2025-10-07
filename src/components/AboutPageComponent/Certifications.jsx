import React from "react";

function Certifications() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      logo: "/iso9001.jpeg",
      description: "Quality Management System",
    },
    {
      name: "ISO 27001:2022",
      logo: "/iso27001.png",
      description: "Information Security Management",
    },
    {
      name: "CMMI Level 5",
      logo: "/cmmilevel.jpeg",
      description: "Capability Maturity Model Integration",
    },
    {
      name: "MSME Registered",
      logo: "/msme.jpeg",
      description: "Micro, Small & Medium Enterprises",
    },
    {
      name: "NSIC Registered",
      logo: "/nisc.png",
      description: "National Small Industries Corporation",
    },
    {
      name: "WEConnect International",
      logo: "/weconnect.jpeg",
      description: "Women-Owned Business Certification",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="relative w-full h-40 sm:h-48 md:h-56 bg-gradient-to-r from-red-600 to-red-700 text-white flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Certifications</h1>
      </section>

      {/* Certifications Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center justify-center bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Certifications;