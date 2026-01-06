export default function OurFeatures() {
    return (
        <div id="features" className="section max-w-[1440px] flex flex-col gap-10 mt-20 scroll-mt-35 items-center justify-center text-white">
            <div className="div flex flex-col gap-10 items-center">
                <div className="bg-[rgb(24,24,26)]
                flex flex-row
                rounded-full
                ring-1 ring-white/20
                py-1.5 px-3
                backdrop-blur-md gap-2 w-fit">
                    <img src="https://framerusercontent.com/images/kQr6giL6HveRQhi7tiDl3MKDuo.svg">
                    </img>
                    <h3>Features</h3>
                </div>

                <div className="div flex flex-col items-center gap-3">
                    <h1 className="text-center font-extrabold text-5xl w-[70%]">Discover Appit Features</h1>
                    <h3 className="text-center w-[50%] text-gray-400">Explore Appit's powerful features designed to help you connect, share, and engage with your community effortlessly.</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-3 grid-rows-1 md:grid-rows-2 lg:grid-rows-2 gap-5 w-full h-full text-white">
                <div className="shrink-0 flex flex-col items-start p-3 border-[0.1px] rounded-2xl border-[#969696]">
                    <div className="relative">
                        <img src="https://framerusercontent.com/images/X0Vl8CpTeSTA8DdhJhhjv4ll8ZQ.png?scale-down-to=512"
                            className="relative z-1 mx-auto"
                        >
                        </img>
                        <img src="https://framerusercontent.com/images/vSXeDeiftCFIZjNVBWtvTj0ibk.svg"
                            className="absolute bottom-0 w-full mx-auto z-2"
                        ></img>
                    </div>
                    <div className="flex flex-col p-3 gap-3">
                        <div className="flex flex-row items-center gap-2 font-bold text-xl">
                            <img src="https://framerusercontent.com/images/HjUlVlaeVs5qamaZtWxKr7EoTNY.svg"
                                className="w-6 h-6 md:w-8 md:h-8 shrink-0"></img>
                            <h3 className="shrink-0 text-lg sm:text-xl md:text-2xl">Customizable Profiles</h3>
                        </div>
                        <h2 className="shrink-0 text-sm md:text-lg text-left">Personalize your profile with themes, layouts, and settings.</h2>
                    </div>
                </div>
                
                <div className=" flex flex-col items-start p-3 border-[0.1px] rounded-2xl border-[#969696]">
                    <div className="relative">
                        <img src="https://framerusercontent.com/images/SgBTdEbC2kWCbLFQfnCHZpn3Jw.png"
                            className="relative z-1 mx-auto"
                        >
                        </img>
                        <img src="https://framerusercontent.com/images/vSXeDeiftCFIZjNVBWtvTj0ibk.svg"
                            className="absolute bottom-0 w-full mx-auto z-2"
                        ></img>
                    </div>
                    <div className="flex flex-col p-3 gap-3">
                        <div className="flex flex-row items-center gap-2 font-bold text-xl">
                            <img src="https://framerusercontent.com/images/4d3xrHbTj5Ms5diHGITxfxhNWE.svg"
                                className="w-6 md:w-8 md:h-8 h-6 shrink-0"></img>
                            <h3 className="shrink-0 text-lg sm:text-xl md:text-2xl">Verified Users</h3>
                        </div>
                        <h2 className="shrink-0 text-sm md:text-lg text-left">Connect confidently with verified, authentic users on the platform.</h2>
                    </div>
                </div>

                <div className=" flex flex-col items-start p-3 border-[0.1px] rounded-2xl border-[#969696]">
                    <div className="relative">
                        <img src="https://framerusercontent.com/images/n4njaiteTaVrq1KL1O5iAE2nI8.png"
                            className="relative z-1 mx-auto"
                        >
                        </img>
                        <img src="https://framerusercontent.com/images/vSXeDeiftCFIZjNVBWtvTj0ibk.svg"
                            className="absolute bottom-0 w-full mx-auto z-2"
                        ></img>
                    </div>
                    <div className="flex flex-col p-3 gap-3">
                        <div className="flex flex-row items-center gap-2 font-bold text-xl">
                            <img src="https://framerusercontent.com/images/ibG0LiimnkUTSfKg66O30GRXw.svg"
                                className="w-6 md:w-8 md:h-8 h-6 shrink-0"></img>
                            <h3 className="shrink-0 text-lg sm:text-xl md:text-2xl">Smart Notifications</h3>
                        </div>
                        <h2 className="shrink-0 text-sm md:text-lg text-left">Get real-time alerts for the updates that matter to you.</h2>
                    </div>
                </div>

                <div className=" flex flex-col items-start p-3 border-[0.1px] rounded-2xl border-[#969696]">
                    <div className="relative">
                        <img src="https://framerusercontent.com/images/ccnTzZyQjyrmUv1jY98k7JQNj0.png"
                            className="relative z-1 mx-auto"
                        >
                        </img>
                        <img src="https://framerusercontent.com/images/vSXeDeiftCFIZjNVBWtvTj0ibk.svg"
                            className="absolute bottom-0 w-full mx-auto z-2"
                        ></img>
                    </div>
                    <div className="flex flex-col p-3 gap-3">
                        <div className="flex flex-row items-center gap-2 font-bold text-xl">
                            <img src="https://framerusercontent.com/images/k172RybSC5AgmTnr7g2w13DUXM.svg"
                                className="w-6 md:w-8 md:h-8 h-6 shrink-0"></img>
                            <h3 className="shrink-0 text-lg sm:text-xl md:text-2xl">Account Insights</h3>
                        </div>
                        <h2 className="shrink-0 text-sm md:text-lg text-left">Track your engagement and performance with detailed analytics.</h2>
                    </div>
                </div>

                <div className=" flex flex-col items-start p-3 border-[0.1px] rounded-2xl border-[#969696]">
                    <div className="relative">
                        <img src="https://framerusercontent.com/images/9oeJvwWkztzYPVxzLFz36e0oEc.png"
                            className="relative z-1 mx-auto"
                        >
                        </img>
                        <img src="https://framerusercontent.com/images/vSXeDeiftCFIZjNVBWtvTj0ibk.svg"
                            className="absolute bottom-0 w-full mx-auto z-2"
                        ></img>
                    </div>
                    <div className="flex flex-col p-3 gap-3">
                        <div className="flex flex-row items-center gap-2 font-bold text-xl">
                            <img src="https://framerusercontent.com/images/rnEb8tJo8lTbNSRlcrJXd3Hp4oY.svg"
                                className="w-6 h-6 md:w-8 md:h-8  shrink-0"></img>
                            <h3 className="shrink-0 text-lg sm:text-xl md:text-2xl">Easy Messaging</h3>
                        </div>
                        <h2 className="shrink-0 text-sm md:text-lg text-left">Chat seamlessly with friends and groups through an intuitive interface.</h2>
                    </div>
                </div>

                <div className=" flex flex-col items-start p-3 border-[0.1px] rounded-2xl border-[#969696]">
                    <div className="relative">
                        <img src="https://framerusercontent.com/images/tGoB3F9x6jrFw9OxuiFq40o0HEg.png"
                            className="relative z-1 mx-auto"
                        >
                        </img>
                        <img src="https://framerusercontent.com/images/vSXeDeiftCFIZjNVBWtvTj0ibk.svg"
                            className="absolute bottom-0 w-full mx-auto z-2"
                        ></img>
                    </div>
                    <div className="flex flex-col p-3 gap-3">
                        <div className="flex flex-row items-center gap-2 font-bold text-xl">
                            <img src="https://framerusercontent.com/images/oicYIMrKrcr3XUdyPDOIw5qHg.svg"
                                className="w-6 md:w-8 md:h-8 h-6 shrink-0"></img>
                            <h3 className="shrink-0 text-lg sm:text-xl md:text-2xl">Post Scheduling</h3>
                        </div>
                        <h2 className="shrink-0 text-sm md:text-lg text-left">Plan and schedule posts to share content at the perfect time.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}