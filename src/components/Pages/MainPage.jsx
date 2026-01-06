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

export default function MainPage() {
    return (
        <div id="hero"  className="h-full overflow-hidden mt-20 mx-auto" name="main-container">
            <div className="flex flex-col items-center gap-[100px] md:gap-[200px]" id="top-body">
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
    )
}
