import React, { useState, useEffect } from "react";
import { Menu, ChevronLeft, ChevronRight, Bell } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "./navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      // Flag menu open state for other components (e.g., SearchBar)
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  // Main menu data
  const menuData = {
    "About Us": {
      items: ["Profile of Cache", "Leadership Team", "Our Alliances", "Awards and Accolades", "Certifications"]
    },
    "Product & Services": {
      items: ["Products", "Services"],   // <-- First level under Product & Services
      submenus: {
        Products: ["Cybersecurity", "Data Analytics & AI", "Cloud", "Infra & Networking"],
        Services: ["Consulting & Auditing", "Managed Services", "GRC"]
					}
			},
    "Insights": {
      items: ["Leadership Vision", "Blogs", "Case Studies"]
    },
    "Contact": {
      items: ["Contact Us"]
    }
  };

  // Submenu routing map sourced from shared navLinks
  const submenuNavigation = Object.fromEntries(
    navLinks.map((l) => [l.label, { route: l.route, sectionId: l.sectionId ?? null }])
  );

  // Handle submenu item click
  const handleItemClick = (section, item) => {
    // If the clicked item has a nested submenu, open it instead of navigating
    const hasNested = menuData[section]?.submenus && menuData[section].submenus[item];
    if (hasNested) {
      setActiveNestedSubmenu(item);
      return;
    }

    const navItem = submenuNavigation[item];
    if (!navItem) return;

    setMenuOpen(false);
    setActiveSubmenu(null);
    setActiveNestedSubmenu(null);

    if (navItem.sectionId) {
      navigate(`${navItem.route}#${navItem.sectionId}`);
    } else {
      navigate(navItem.route);
    }
  };

  // Handle hover to open submenu
  const handleSectionHover = (section) => {
    setHoveredSection(section);
    setActiveSubmenu(section);
  };

  const handleSectionLeave = () => {
    // Keep submenu open briefly
    setTimeout(() => {
      if (!document.querySelector('.submenu-panel:hover')) {
        setHoveredSection(null);
      }
    }, 100);
  };

  const isMobileDevice = () => {
    return typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;
  };

  return (
    <>
      <style>
        {`
          @keyframes slideInFromRight {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .submenu-panel:hover {
            display: block !important;
          }
        `}
      </style>

      {/* Navbar */}
      <nav
        className={
          `fixed z-[1000] flex items-center gap-4
          ${isHome
            ? 'left-1/2 top-9 w-[80%] md:w-auto -translate-x-1/2 justify-between rounded-3xl border border-red-200 bg-white px-3 py-2 shadow-lg backdrop-blur-md'
            : 'left-4 top-5 w-fit translate-x-0 justify-start bg-transparent px-0 py-0 shadow-none border-none backdrop-blur-0'}
          md:left-2/24 md:top-8 md:-translate-x-1/2 md:justify-between md:rounded-3xl md:border md:border-red-200 md:bg-white md:px-3 md:py-2 md:shadow-lg md:backdrop-blur-md`
        }
      >
        {/* Hamburger/Menu Icon (mobile: '>' on non-home) */}
        <button
          className={`group flex items-center justify-center rounded-xl bg-red-600 p-2 transition-all duration-300 ease-in-out hover:scale-105 ${isMobileDevice() && !isHome ? 'mt-5 -ml-3' : ''}`}
          onClick={() => setMenuOpen(true)}
        >
          {isMobileDevice() && !isHome ? (
            <ChevronRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <Menu className="h-4 w-4 text-white transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>

        {/* Logo (mobile: home only; desktop: always) */}
        <div
          onClick={() => navigate('/')}
          className={`absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:translate-x-0 ${isHome ? 'block' : 'hidden md:block'}`}
        >
          <img src="/logo1.jpg" alt="CacheDigiTech Logo" className="h-8 w-auto" />
        </div>

        {/* Mobile bell (home only) */}
        {isHome && !menuOpen && (
          <button
            className="sm:hidden relative flex items-center justify-center rounded-full bg-red-600 p-2 shadow-md"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4 text-white" />
            {/* subtle outer ring */}
            <span className="absolute -inset-2 rounded-full bg-red-600/10" aria-hidden="true"></span>
          </button>
        )}
      </nav>


      {/* Backdrop Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1999]"
          onClick={() => {
            setMenuOpen(false);
            setActiveSubmenu(null);
            setActiveNestedSubmenu(null);
          }}
        />
      )}

      {/* Main Sidebar */}
      <div className={`
        fixed top-0 left-0 w-screen md:w-56 h-full bg-white z-[2000] flex flex-col transition-transform duration-500 ease-out shadow-2xl
        ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}
      `}>
        {/* Sidebar Header */}
        {/* Sidebar Header */}
        <div className="flex items-center justify-between py-6 px-6 border-b border-gray-200 bg-white">
          {/* Back Button (before logo) */}
          <button
            className="p-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors"
            onClick={() => {
              setMenuOpen(false);
              setActiveSubmenu(null);
            }}
            aria-label="Back"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          {/* Clickable Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              navigate("/");     // ✅ Navigate to home page
              setMenuOpen(false); // ✅ Close the sidebar
              setActiveSubmenu(null);
            }}
          >
            <img src="/logo1.jpg" alt="CacheDigiTech Logo" className=" ml-2 h-15" />
          </div>
        </div>


        {/* Sidebar Menu */}
        {/* Sidebar Menu */}
        <div className="flex-1 overflow-y-auto p-4">
          {Object.entries(menuData).map(([section, data], index) => (
            <div
              key={index}
              className="mb-2"
              onMouseEnter={() => {
                if (!isMobileDevice()) handleSectionHover(section);
              }}
              onMouseLeave={() => {
                if (!isMobileDevice()) handleSectionLeave();
              }}
              onClick={() => {
                // On mobile, tapping a section should open its submenu
                if (isMobileDevice()) {
                  setActiveSubmenu(section);
                  setHoveredSection(section);
                }
              }}
            >
              <div className={`
        flex items-center font-bold justify-between px-4 py-3 rounded-lg cursor-pointer
        transition-all duration-300 group border-b border-gray-200 md:border-b
        ${hoveredSection === section
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-red-50'
                }
      `}>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-base">{section}</span>
                </div>
                {/* Mobile: red '>' on right; Desktop: chevron icon */}
                <span className="md:hidden text-red-600 font-bold">&gt;</span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-300 hidden md:block ${hoveredSection === section ? 'transform translate-x-1' : ''}`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Submenu Panel */}
      {activeSubmenu && menuOpen && (
        <div
          className="submenu-panel fixed top-0 left-0 md:left-56 right-0 md:right-auto w-screen md:w-64 h-full bg-white z-[2001] shadow-2xl border-l border-gray-200 overflow-y-auto overflow-x-hidden"
          style={{ animation: 'slideInFromRight 0.3s ease-out' }}
          onMouseEnter={() => { if (!isMobileDevice()) setActiveSubmenu(activeSubmenu); }}
          onMouseLeave={() => {
            if (!isMobileDevice()) {
              setActiveSubmenu(null);
              setHoveredSection(null);
              setActiveNestedSubmenu(null);
            }
          }}
        >
          {/* Submenu Header */}
          <div className="py-7 px-6 border-b border-gray-200 bg-red-600 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {activeNestedSubmenu ? (
                <button
                  className="p-2 rounded-md bg-red-900 hover:bg-red-800 transition-colors"
                  onClick={() => setActiveNestedSubmenu(null)}
                  aria-label="Back"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
              ) : (
                <button
                  className="md:hidden p-2 rounded-md bg-red-900 hover:bg-red-800 transition-colors"
                  onClick={() => {
                    setActiveNestedSubmenu(null);
                    setActiveSubmenu(null);
                    setHoveredSection(null);
                  }}
                  aria-label="Back to main menu"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
              )}
              <h3 className="font-bold text-2xl text-white">{activeNestedSubmenu || activeSubmenu}</h3>
            </div>
          </div>

          {/* Submenu Items */}
          <div className="p-4">
            {(activeNestedSubmenu
              ? menuData[activeSubmenu].submenus[activeNestedSubmenu]
              : menuData[activeSubmenu].items
            ).map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 mb-2 flex items-center justify-between gap-2 border-b border-gray-200 md:border-b
                  text-gray-700 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 
                  hover:text-white hover:shadow-md hover:transform hover:translate-x-1"
                onClick={() => handleItemClick(activeSubmenu, item)}
              >
                <span className="text-base font-medium">
                  {item}
                </span>
                <span className="md:hidden text-red-600 font-bold">&gt;</span>
                {((!activeNestedSubmenu && activeSubmenu === "Product & Services") ||
                  (activeNestedSubmenu === "Products" || activeNestedSubmenu === "Services")) && (
                  <ChevronRight className="hidden md:block h-4 w-4 text-gray-400 group-hover:text-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
