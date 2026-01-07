import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function WaitList() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className="div text-white flex pt-30 flex-col items-center justify-center gap-30">
                <div className="flex flex-col items-center gap-20">
                    <div className="flex flex-col items-center gap-20">
                        <div className="div flex flex-col gap-5 w-[300px] sm:w-[500px] md:w-[700px] lg:w-full">
                            <div className="flex justify-center">
                                <div
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
                                        Join 3 million users on waitlist
                                    </p>
                                </div>
                            </div>
                            <div className="div flex justify-center">
                                <p className="text-center font-extrabold text-6xl">Get early access</p>
                            </div>
                            <div className="div max-w-[720px] px-0 md:px-20">
                                <p className="text-white/50 text-center font-md text-lg">
                                    Be amongst the first to experience Wait and launch a viral waitlist. Sign up to be notified when we launch!
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-10 place-items-center">
                            <div className="flex flex-col gap-2 sm:flex-row w-[300px] md:w-full sm:gap-5 px-0 sm:px-1 md:px-10 place-items-center">
                                <input type="text" placeholder="Enter your e-mail"
                                    className="bg-white/10 font-extralight flex-1 py-4 px-6 border border-white/5 rounded-xl"
                                >
                                </input>
                                <Link
                                    to="/Waitlist"
                                    className="bg-white text-black text-center py-1 md:py-4 px-5 rounded-xl font-semibold hover:opacity-90 transition">
                                    Join Waitlist
                                </Link>
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <img
                                    className="h-5 w-5"
                                    src="https://framerusercontent.com/images/lvuKg4x2aNtdE9KCJ5H0BUAeEo.svg"></img>
                                <h2 className="text-white/60 font-light text-xs sm:text-lg md:text-xl ">No Spam, Only Genuine Updates</h2>
                            </div>
                            <div className="div">
                                <p className="text-3xl font-semibold">00:00:00:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="div px-10">
                        <video
                            className="rounded-xl aspect-video w-full"

                            loop
                            muted
                            playsInline
                            controls
                            src="https://framerusercontent.com/assets/ogfiuJfKkk61kCDqLt2IWMVDhM.mp4"></video>
                    </div>
                </div>
                <div className="div"></div>
            </motion.div>
        </>
    )
}