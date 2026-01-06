export default function Footer()
{
    const scrollToSection = (id) => {
            const section = document.getElementById(id)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
    return(
        <div className="flex mb-10 flex-col text-white -mt-40 md:-mt-80 z-50 gap-5 items-center">
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
            <div className="header-mid hidden md:flex items-center gap-8 text-gray-300">
                    <div onClick={() => scrollToSection("benefits")} className="header-subcontainer">Benefits</div>
                    <div className="bg-white/20 w-1 h-1 rounded-[100%]"></div>
                    <div onClick={() => scrollToSection("features")} className="header-subcontainer">Features</div>
                    <div className="bg-white/20 w-1 h-1 rounded-[100%]"></div>
                    <div onClick={() => scrollToSection("pricing")} className="header-subcontainer">Pricing</div>
                    <div className="bg-white/20 w-1 h-1 rounded-[100%]"></div>
                    <div onClick={() => scrollToSection("testimonials")} className="header-subcontainer">Testimonials</div>
                    <div className="bg-white/20 w-1 h-1 rounded-[100%]"></div>
                    <div onClick={() => scrollToSection("faqs")} className="header-subcontainer">FAQ's</div>
                </div>
        </div>
    )
}