export default function Footer()
{
    const scrollToSection = (id) => {
            const section = document.getElementById(id)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
    return(
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
                <button className="text-lg">
                    hello@appit.com
                </button>
            </div>
            {/* Desktop nav */}
<div className="hidden md:flex items-center gap-8 text-gray-300">
  {/* existing header-mid content */}
</div>

{/* Mobile nav – stacked like screenshot */}
<div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-base sm:text-lg">
  <div className="flex items-center gap-8">
    <button onClick={() => scrollToSection("benefits")}>Benefits</button>
    <span className="text-gray-500">•</span>
    <button onClick={() => scrollToSection("features")}>Features</button>
    <span className="text-gray-500">•</span>
  </div>

  <div className="flex items-center gap-8">
    <button onClick={() => scrollToSection("pricing")}>Pricing</button>
    <span className="text-gray-500">•</span>
    <button onClick={() => scrollToSection("testimonials")}>Testimonials</button>
    <span className="text-gray-500">•</span>
  </div>
  <div className="flex items-center gap-8">
    <button onClick={() => scrollToSection("faqs")}>FAQ&apos;s</button>
  </div>

  {/* <div className="flex items-center gap-3">
    <span className="text-gray-500">•</span>
    <button onClick={() => scrollToSection("waitlist")}>Waitlist</button>
  </div> */}
</div>

        </div>
    )
}