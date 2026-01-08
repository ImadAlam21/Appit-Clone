import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (sectionId) => {
        if (window.location.pathname !== "/") {
            // Hard reload + remove waitlist from history
            window.location.replace(`/#${sectionId}`);
        } else {
            scrollToSection(sectionId);
        }
    };

    const menuItems = [  // ADD: Same array as Header
    { label: "Benefits", id: "benefits" },
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQ's", id: "faqs" },
  ];
    
  return (
    <div className="flex mb-10 flex-col text-white -mt-40 md:-mt-80 z-50 gap-10 items-center">
      <div className="div">
        <img src="https://framerusercontent.com/images/yFWJIsf9PPgw31HHvEct97FMA3A.svg"></img>
      </div>
      <div className="div w-[300px]">
        <p className="text-xl text-center font-medium">
          Empower Your Social Connections with Appit Social
        </p>
      </div>
      <div className="div flex flex-row gap-1 py-3 px-6 bg-white/10 border-[0.1px] border-white/20 items-center justify-center rounded-xl">
        <img src="https://framerusercontent.com/images/dzy2fU5uUTG4Qc1EQfhDcDYbU4.svg"></img>
        <button className="text-lg cursor-pointer">
          hello@appit.com
        </button>
      </div>
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8 text-gray-300">
      </div>

      <div
        className="
    flex flex-nowrap
    items-center justify-center
    gap-2 sm:gap-3 md:gap-6
    text-white/60
    text-[10px] sm:text-xs md:text-lg
    min-w-0
  "
      >
        <button
          className="cursor-pointer hover:text-white transition-colors duration-150 flex-shrink"
          key="benefits"
          onClick={() => handleNavClick("benefits")}
        >
          Benefits
        </button>

        <span className="text-gray-500 flex-shrink-0">•</span>

        <button
          className="cursor-pointer hover:text-white transition-colors duration-150 flex-shrink"
          key="features"
          onClick={() => handleNavClick("features")}
        >
          Features
        </button>

        <span className="text-gray-500 flex-shrink-0">•</span>

        <button
          className="cursor-pointer hover:text-white transition-colors duration-150 flex-shrink"
          key="pricing"
          onClick={() => handleNavClick("pricing")}
        >
          Pricing
        </button>

        <span className="text-gray-500 flex-shrink-0">•</span>

        <button
          className="cursor-pointer hover:text-white transition-colors duration-150 flex-shrink"
          onClick={() => handleNavClick("testimonials")}
        >
          Testimonials
        </button>

        <span className="text-gray-500 flex-shrink-0">•</span>

        <button
          className="cursor-pointer hover:text-white transition-colors duration-150 flex-shrink"
          onClick={() => handleNavClick("faqs")}
        >
          FAQ's
        </button>
      </div>

      <div className="w-screen ring ring-white/20"></div>

      <div
        className="flex items-center justify-center w-full px-20 text-white/50 text-xs">Template by Imad</div>


    </div>
  )
}