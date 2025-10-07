import React from 'react';
import { useEffect } from 'react';
import { Shield, FileCheck, AlertTriangle, Lock, CheckCircle, Building2, Globe, Server } from 'lucide-react';
import { useScroll } from 'framer-motion';

export default function GRCDashboard() {

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when page loads
  });
  
  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'audit', label: 'Audit' },
    { id: 'risk', label: 'IT Risk' },
    { id: 'privacy', label: 'Privacy' }
  ];

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const sections = [
    {
      title: "Compliance Management",
      icon: Shield,
      items: [
        {
          column: [
            "ISO 27001 ISMS",
            "ISO 22301 BCMS",
            "ISO 27701 PIMS",
            "PCI DSS",
            "Cyber Essentials"
          ]
        },
        {
          column: [
            "National Institute of Standards and Technology (NIST)",
            "Health Information Trust Alliance (HITRUST)",
            "Digital Operational Resilience Act (DORA)"
          ]
        },
        {
          column: [
            "Control Objectives for Information and Related Technologies (COBIT)",
            "Center for Internet Security (CIS)",
            "SOX (Applications & ITGC)"
          ]
        }
      ]
    },
    {
      title: "Information System Audit & Assurance",
      icon: FileCheck,
      items: [
        {
          column: [
            "RBI",
            "Payment & Settlement Systems (PSS)",
            "Co-Operative Banks",
            "Prepaid Payment Instruments PPI",
            "Central Electricity Authority"
          ]
        },
        {
          column: [
            "IRDA ISNP",
            "SEBI",
            "NPCI",
            "Aadhaar",
            "P2P Lending",
            "NBFC"
          ]
        },
        {
          column: [
            "GST Suvidha Provider",
            "Security Standards (ISO, NIST, CIS & Others)",
            "UIDAI Aadhaar",
            "eSign ASP",
            "Others"
          ]
        }
      ]
    },
    {
      title: "IT Risk Management",
      icon: AlertTriangle,
      items: [
        {
          column: [
            "SSAE 18-SOC1/2/3",
            "ISAE 3402",
            "Third Party Security Risk Management",
            "IT Risk Management"
          ]
        },
        // {
        //   column: [
        //     "SSAE 18-SOC1/2/3",
        //     "ISAE 3402",
        //     "Third Party Security Risk Management",
        //     "IT Risk Management"
        //   ]
        // },
        {
          column: [
            "IT in Merger & Acquisition",
            "Governance Framework",
            "Strategy and Implementation"
          ]
        }
      ]
    },
    {
      title: "Data Protection & Privacy",
      icon: Lock,
      items: [
        {
          column: [
            "General Data Protection Regulation (GDPR)",
            "California Consumer Privacy Act (CCPA)",
            "Digital Personal Data PDPD, F23,SG Protection ACT (DPDPA)"
          ]
        },
        {
          column: [
            "Brazilian General Data Protection Law (LGPD)",
            "Personal Information Protection and Electronic Documents Act (PIPEDA, Canada)"
          ]
        },
        {
          column: [
            "Singapore Personal Data Protection Act (PDPA)",
            "Health Insurance Portability and Accountability Act (HIPAA)"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section */}
      <section id="hero" 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(/servicesimages/GRC.jpg)`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <div className="mb-6">
              <Server className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Governance, Risk & Compliance</h1>
            <p className="text-xl md:text-2xl">Unified compliance, audit, risk and privacy management</p>
          </div>
        </div>
      </section>

      {/* Tabs (below hero, sticky on scroll) */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-full border text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 border-transparent hover:border-red-100"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-8">


        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            const sectionIds = ['compliance','audit','risk','privacy'];
            return (
              <div id={sectionIds[index]} key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-red-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-4 flex items-center gap-3">
                  <IconComponent className="w-7 h-7" />
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-3">
                        {item.column.map((text, textIndex) => (
                          <div key={textIndex} className="flex items-start gap-3 group">
                            <div className="mt-1 flex-shrink-0">
                              <CheckCircle className="w-5 h-5 text-red-600 group-hover:text-red-700 transition-colors" />
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Footer */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-red-200">
            <Globe className="w-5 h-5 text-red-600" />
            <p className="text-gray-600 font-medium">Comprehensive GRC Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}