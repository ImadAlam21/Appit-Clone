import CountUp from "react-countup";

export default function EmpoweringSection() {
    return (
        <div className="flex flex-col place-items-center text-white gap-20">
            <div className="flex flex-col items-center mb-1">
                <div className="relative flex items-center justify-center w-[84px] h-[84px] sm:w-[84px] md:w-[108px] lg:w-[108px] sm:h-[84px] md:h-[108px] lg:h-[108px]">
                    <img id="image-bg"
                        src="https://framerusercontent.com/images/otHBuAY6On6DCfJTQ2YePpDX5YU.svg"
                        className="absolute"
                        style={{ zIndex: 0 }}>
                    </img>
                    <img src="https://framerusercontent.com/images/y6iefUxEqyQODWaJCuoKhPQnEqc.svg"
                        className="absolute w-[40px] h-[40px] sm:w-[40px] md:w-[60px] lg:w-[60px] sm:h-[40px] md:h-[60px] lg:h-[60px]"
                        style={{ zIndex: 1 }}
                    >
                    </img>
                </div>

                <div className="flex w-xs md:w-xl lg:w-4xl font-semibold text-2xl md:text-4xl lg:text-5xl ">
                    <p className="text-center">
                        Empowering authentic connections for a vibrant social experience.
                    </p>
                </div>
            </div>

            <div className="flex
            flex-col md:flex-row
            justify-between items-center
            w-full max-w-[1040px]
            gap-10 md:gap-4
            ">
                {/* 1 */}
                <div className="
                flex
                flex-col
                gap-2
                justify-center items-center
                w-[33%]
                h-auto
                px-4 md:px-3 lg:px-6
                ">
                    <div className="text-5xl lg:text-6xl font-bold">
                        <CountUp start={450} end={500} useEasing={false} duration={0.6} suffix="k" enableScrollSpy={true} />
                        <span className="text-4xl md:text-5xl">+</span>
                    </div>
                    <div className="text-sm lg:text-xl text-gray-400">
                        <p className="text-center">Shared moments and stories every month</p>
                    </div>
                </div>

                <div
                    className="
                    bg-white/30 
                    mx-0 my-4
                    h-px w-[12rem]

                    md:mx-2 md:my-0
                    md:w-px md:h-[7rem]"
                />


                {/* 2 */}
                <div className="
                flex
                flex-col
                gap-2
                justify-center items-center
                w-[33%]
                h-auto
                px-4 md:px-3 lg:px-6
                ">
                    <div className="text-5xl  lg:text-6xl font-bold">
                        <CountUp start={150} end={200} useEasing={false} duration={0.6} suffix="k" enableScrollSpy={true} />
                        <span className="text-4xl md:text-5xl">+</span>
                    </div>
                    <div className="text-sm lg:text-xl text-gray-400">
                        <p className="text-center">Communities thriving across diverse interests</p>
                    </div>
                </div>


                <div
                    className="
                    bg-white/30 
                    mx-0 my-4
                    h-px w-[12rem]

                    md:mx-2 md:my-0
                    md:w-px md:h-[7rem]"
                />

                {/* 3 */}
                <div className="
                flex
                flex-col
                gap-2
                justify-center items-center
                w-[33%]
                h-auto
                px-4 md:px-3 lg:px-6
                ">
                    <div className="text-5xl  lg:text-6xl font-bold">
                        <CountUp start={1} end={50} useEasing={false} duration={0.6} enableScrollSpy={true} />
                        <span className="text-4xl md:text-5xl">+</span>
                    </div>
                    <div className="text-sm lg:text-xl text-gray-400">
                        <p className="text-center">Countries where Appit is growing strong</p>
                    </div>
                </div>
            </div>
        </div>
    );
}