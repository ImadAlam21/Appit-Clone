import OurBenefits from './Benefits'
import Cta from './Cta'
import EmpoweringSection from './Empowering'
import Empowering from './Empowering'
import FaqSection from './Faqs'
import OurFeatures from './Features'
import Footer from './Footer'
import HeroSection from './Hero'
import './MainPage.css'
import OurPricing from './Pricing'
import TheTestimonials from './Testimonials'
import { useState } from 'react'

import { useEffect } from "react";

export default function MainPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const section = document.getElementById(id);

      if (section) {
        // Small delay ensures DOM is painted
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div id="hero"  className="h-full overflow-hidden mt-20 mx-auto" name="main-container">
            <div className="flex flex-col items-center gap-25 md:gap-30" id="top-body">
            <HeroSection />
            <EmpoweringSection />
            <OurBenefits />
            <OurFeatures />
            <OurPricing />
            <TheTestimonials />
            <FaqSection />
            <Cta />
            <Footer />
            </div>
        </div>
  );
}


// export default function MainPage() {
//     return (
//         <div id="hero"  className="h-full overflow-hidden mt-20 mx-auto" name="main-container">
//             <div className="flex flex-col items-center gap-[100px] md:gap-[200px]" id="top-body">
//             <HeroSection />
//             <EmpoweringSection />
//             <OurBenefits />
//             <OurFeatures />
//             <OurPricing />
//             <TheTestimonials />
//             <FaqSection />
//             <Cta />
//             <Footer />
//             </div>
//         </div>
//     )
// }
