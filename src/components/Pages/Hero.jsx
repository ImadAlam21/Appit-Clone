import { useEffect } from "react";
import './MainPage'
import { motion } from "motion/react"

export default function HeroSection() {
    useEffect(() => {
        const scrollers = document.querySelectorAll("#scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
        function addAnimation() {
            scrollers.forEach(scroller => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector("#inner-scroller");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }

    })

    return (
        <section className="flex flex-col items-center bg-black gap-24 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col py-20 gap-2 box-border">
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            damping: 14,
                            delay: 0.2,
                        }}
                        className="flex items-center bg-white/10 rounded-full backdrop-blur-md border-[0.01rem] border-white/15 py-1 px-0"
                    >
                        <div className="flex items-center">
                            <img
                                src="https://framerusercontent.com/images/zA7hg7OUnSahgBJcsn7HpCAtY.png"
                                className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover ml-2 my-0"
                            />
                            <img
                                src="https://framerusercontent.com/images/FW7gdHyIJZUqRX0WLmQwCo53YI4.png"
                                className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover -ml-2"
                            />
                            <img
                                src="https://framerusercontent.com/images/Bwgwwe4qJCF29kCrDg7c4NMzek.png"
                                className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover -ml-2"
                            />
                        </div>
                        <p className="text-white text-xs md:text-sm mr-2 ml-1">
                            Trusted by 3+ million users
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col items-center text-center mt-10 gap-6 px-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            damping: 14,
                            delay: 0.3,
                        }} className="w-[70%] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Connect, Share, and Grow with Appit Social
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            damping: 14,
                            delay: 0.4,
                        }} className="max-w-xl text-gray-300 text-base sm:text-lg md:text-xl">
                        Join Appit to build authentic connections and share your passions effortlessly.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-6 items-center">

                    <motion.a
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.6,
                        }}
                        href="/waitlist"
                        className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:opacity-80 transition"
                    >
                        Join Waitlist
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.6,
                        }}
                        className="flex items-center gap-[0.7rem]">
                        <img
                            src="https://framerusercontent.com/images/lvuKg4x2aNtdE9KCJ5H0BUAeEo.svg"
                            className="w-5 h-5 md:w-6 md:h-6 object-cover"
                        />
                        <p className="text-gray-400 text-xs md:text-sm -ml-2">App Available For</p>
                        <div className="flex flex-row items-center gap-[0.3rem] bg-[rgb(24,24,26)] px-[0.6rem] py-[0.4rem] rounded-full border-[0.01rem] border-[#969696]">
                            <img src="https://framerusercontent.com/images/iubuv2STfmPz5zeKS49tuf1E38.svg"></img>
                            <div className="w-px h-[1.2rem] bg-[#969696] mx-2" />
                            <img src="https://framerusercontent.com/images/Qh3hInJRKF6WFt1cZiFo08d8aXM.svg"></img>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* <div className="flex flex-row">
                <div className="relative bg-red-600">
                    <img src="mobile.PNG" className="w-100 aspect-9/16"></img>
                </div>
                <div>
                    <img src="mobile.PNG" className=" w-100 aspect-9/16" ></img>
                </div>
                <div>
                    <img src="mobile.PNG" className="absolute w-100 aspect-9/16"></img>
                </div>
            </div> */}
            <div className="relative px-10 w-full max-w-6xl flex justify-center items-center ">
                {/* Left phone */}
                <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.7,
                        }}
                    className="w-64 max-w-xs absolute left-2 md:-left-10 lg:-left-18 -top-12 pl-4 transform -translate-y-1/2 hidden md:block">
                    <img
                        src="https://framerusercontent.com/images/DNA4hTd6dhMchnMyWmFAPzRAB7M.png"
                        alt="Left Phone"
                        className="w-full h-auto"
                        style={{ zIndex: 2 }}
                    />
                    <div className="absolute left-0 bottom-0 w-full h-1/2 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-1/5 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
                    </div>
                </motion.div>

                {/* Center phone */}
                <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.8,
                        }}
                    className="relative w-64 max-w-xs -top-30 mx-4 z-10">
                    <img
                        src="https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png"
                        alt="Center Phone"
                        className="w-full h-auto"
                    />
                    <div className="absolute left-0 bottom-0 w-full h-[100%] pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-1/4 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
                    </div>
                </motion.div>

                {/* Right phone */}
                <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.7,
                        }}
                    className="w-64 max-w-xs absolute right-2 md:-right-10 lg:-right-18 pr-4 -top-12 transform -translate-y-1/2 hidden md:block">
                    <img
                        src="https://framerusercontent.com/images/bbJeLns4NqVr3NOyuD4LsO6Qz6E.png"
                        alt="Right Phone"
                        className="w-full h-auto"
                        style={{ zIndex: 2 }}
                    />
                    <div className="absolute left-0 bottom-0 w-full h-1/2 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-1/5 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
                    </div>
                </motion.div>
            </div>

            {/* Parent wrapper */}
            <div className="flex flex-col w-xs md:w-xl lg:w-4xl text-center pt-[30px] pb-[30px] gap-[15px] text-white items-center">
                <div>
                    <p>Trusted by 1000+ businesses across the world</p>
                </div>

                <div
                    id="scroller"
                    className="max-w-full w-xs md:w-xl lg:w-4xl overflow-hidden mx-auto"
                >
                    <ul
                        id="inner-scroller"
                        className="flex items-center gap-[-1] p-1"
                    >
                        {/* Each li is non-flexible (won't shrink or grow) and centers the img */}
                        <li className="shrink-0 flex items-center justify-center w-[120px] h-[56px]">
                            <img
                                src="https://framerusercontent.com/images/REcm2GPd8XeDeIQSsBPuO6ow8o.svg"
                                alt="logo"
                                className="w-[100px] h-auto max-w-none object-contain block"
                            />
                        </li>

                        <li className="flex-shrink-0 flex items-center justify-center w-[120px] h-[56px]">
                            <img
                                src="https://framerusercontent.com/images/MZ6rbKRiZjje7tVUXsisqG1VWY.svg"
                                alt="logo"
                                className="w-[100px] h-auto max-w-none object-contain block"
                            />
                        </li>

                        <li className="flex-shrink-0 flex items-center justify-center w-[120px] h-[56px]">
                            <img
                                src="https://framerusercontent.com/images/cxnY4fTJzQBwpTWYxEAYWmOHz5E.svg"
                                alt="logo"
                                className="w-[100px] h-auto max-w-none object-contain block"
                            />
                        </li>

                        <li className="flex-shrink-0 flex items-center justify-center w-[120px] h-[56px]">
                            <img
                                src="https://framerusercontent.com/images/jxbcPFmgDcWp6mu57vYz3auJKE.svg"
                                alt="logo"
                                className="w-[100px] h-auto max-w-none object-contain block"
                            />
                        </li>

                        <li className="flex-shrink-0 flex items-center justify-center w-[120px] h-[56px]">
                            <img
                                src="https://framerusercontent.com/images/A4Z4KqXfs9AVL9KbmUBQmMAJCQ.svg"
                                alt="logo"
                                className="w-[100px] h-auto max-w-none object-contain block"
                            />
                        </li>
                    </ul>
                </div>
            </div>

        </section >
    );
}
