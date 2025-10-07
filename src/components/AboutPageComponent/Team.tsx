import React from "react";
import { Link } from "react-router-dom";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  link?: string;
  imageScale?: number; // New field to control image zoom
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Prarthana Gupta", designation: "Chairperson & Managing Director", image: "/team/prarthna.jpg", link: "https://www.linkedin.com/in/prarthana-gupta-112510a5/", imageScale: 1.1 },
    { id: 2, name: "Shraddha Gupta", designation: "Chief Executive Officer", image: "/team/shraddha.jpg", link: "https://www.linkedin.com/in/shraddha--gupta/", imageScale: 1 },
    { id: 3, name: "Amit Chaudhary", designation: "Director", image: "/team/amit.jpg", link: "https://www.linkedin.com/in/amit-chaudhary-9643b38/", imageScale: 1.05 },
    { id: 4, name: "Vinod Pulyani", designation: "Chief Finance Officer", image: "/team/Vinod.jpg", link: "https://www.linkedin.com/in/vinod-pulyani-6701426/", imageScale: 1.20 },
    { id: 5, name: "Sourabh Srivastava", designation: "Vice President - Cyber Security", image: "/team/saurabh.jpg", link: "https://www.linkedin.com/in/sourabh-kumar-srivastava-6b078b148/", imageScale: 1.20 },
    { id: 8, name: "Naresh Kumar", designation: "Vice President - Infra", image: "/team/naresh.jpg", link: "/", imageScale: 1 },
    { id: 12, name: "Manzir Paul", designation: "Vice President - Relations", image: "/team/manzir.png", link: "https://www.linkedin.com/in/manzir-paul-0b966621?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", imageScale: 1.15 },
    { id: 9, name: "Anurag Singh", designation: "Vice President - Operation", image: "/team/anurag.jpg", link: "/", imageScale: 1 },
    { id: 14, name: "Varun Vohra", designation: "Pre-Sales Manager", image:"/team/varun.png", link: "https://www.linkedin.com/in/varun-vohra-926bb4365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", imageScale: 1 },
    { id: 6, name: "Manohar Singh", designation: "Senior Sales Manager", image: "/team/manohar.jpg", link: "https://www.linkedin.com/in/manohar-singh-51b05b131?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", imageScale: 1 },
    { id: 7, name: "Geetanjali Kumar", designation: "Vice President - Legal & Compliance", image: "/team/geetanjli.png", link: "https://www.linkedin.com/in/geetanjali-s-kumar-entity-compliance-manager-apac/", imageScale: 1 },
    { id: 10, name: "Shweta Gaba", designation: "General Manager - HR", image: "/team/sweta.jpg", link: "https://www.linkedin.com/in/shweta-gaba-29ab80139/", imageScale: 1 },
    { id: 11, name: "Mehak Verma", designation: "Manager - Employee Relation", image: "/team/mehak.png", link: "https://www.linkedin.com/in/mehak-926174190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", imageScale: 1.10 },
    { id: 13, name: "Aanya Singh", designation: "Manager - Project Coordination", image: "/team/aanya.png", link: "https://www.linkedin.com/in/aanya-singh-b58a30251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", imageScale: 1 },
    { id: 15, name: "Gajendra Dixit", designation: "Manager - Supply Chain ", image: "/team/gajendra.jpg", link: "/", imageScale: 1.20 },
    { id: 16, name: "Kapil Chaudhary", designation: "Manager -Supply Chain ", image: "/team/kapil.jpg", link: "/", imageScale: 1.20    },
  ];

  // Determine how many columns in each breakpoint
  const getColumns = (screen: "mobile" | "desktop") => (screen === "mobile" ? 3 : 4);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Leadership Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals driving our company's success
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, idx) => {
            // For centering last row
            const desktopCols = getColumns("desktop");
            const mobileCols = getColumns("mobile");
            const desktopItemsInLastRow = teamMembers.length % desktopCols || desktopCols;
            const mobileItemsInLastRow = teamMembers.length % mobileCols || mobileCols;

            const isInDesktopLastRow =
              idx >= teamMembers.length - desktopItemsInLastRow;
            const isInMobileLastRow =
              idx >= teamMembers.length - mobileItemsInLastRow;

            return (
              <div
                key={member.id}
                className={`
                  flex flex-col items-center text-center bg-white rounded-lg transition duration-300
                  w-full max-w-[200px] p-4 sm:p-5 justify-self-center
                  ${isInDesktopLastRow ? "lg:justify-self-center" : ""}
                  ${isInMobileLastRow ? "justify-self-center" : ""}
                `}
              >
                {/* Square Image with scale */}
                <Link
                  to={member.link || "#"}
                  target={member.link?.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="overflow-hidden w-28 h-28 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-lg bg-gray-100 flex items-center justify-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{ transform: `scale(${member.imageScale || 1})` }}
                  />
                </Link>

                {/* Info */}
                <div className="mt-3 sm:mt-4 w-full flex flex-col flex-1">
                  <div className="w-full h-[72px] sm:h-[80px] md:h-[96px] flex flex-col justify-center">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                      {member.designation}
                    </p>
                  </div>
                  {member.link && member.link !== "/" && (
                    <div className="mt-2 flex justify-center">
                      <a 
                        href={member.link}
                        target={member.link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md overflow-hidden transition-transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label={`${member.name} LinkedIn profile`}
                      >
                        <img
                          src="/linkedin-transparent.png"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/linkedin.png';
                          }}
                          alt="LinkedIn"
                          className="w-6 h-6"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;