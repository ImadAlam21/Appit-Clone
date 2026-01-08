import CountUp from "react-countup";
import { useState } from "react";

export default function OurPricing() {
    const [billing, setBilling] = useState("monthly");
    return (
        <div id="pricing" className="section flex flex-col scroll-mt-35 gap-20 items-center text-white w-full">
            <div className="div flex flex-col items-center gap-8 w-full">
                <div className="flex flex-row bg-[rgb(24,24,26)]
                rounded-full
                ring-1 ring-white/20
                py-1 px-3
                backdrop-blur-md
                gap-2
                items-center
                w-fit
                ">
                    <img src="https://framerusercontent.com/images/09WQXTvlhUU67CKWraCKw0Mcj0.svg"></img>
                    <h3>Our Pricing</h3>
                </div>
                <div className="div flex flex-col items-center  gap-3 w-full">
                    <h1 className="text-center font-extrabold text-5xl">Flexible Pricing Plans</h1>
                    <h3 className="text-center text-gray-400">Choose a plan that fits your needs, with flexible options and transparent pricing.</h3>
                </div>
            </div>

            {/* <div className="flex px-3 py-2 rounded-4xl border-[0.1px] border-gray-700 items-center">
                <div className="flex-1 px-6 py-2 border-[0.1px] bg-white/10 border-gray-400 rounded-2xl">Monthly</div>
                <div className="mx-2 h-6 w-px bg-gray-500"></div>
                <div className="flex-1 px-6 py-2 border-[0.1px] bg-white/10 border-gray-400 rounded-2xl">Yearly</div>
            </div> */}
            <div className="relative inline-flex -mb-15 items-center rounded-full bg-black/40 border border-white/10 p-1 w-fit">

                <div
                    className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white/10  transition-all duration-300 ring-1 ring-white/15 ease-in-out ${billing === "monthly" ? "left-1" : "left-[48%]"
                        }`}
                ></div>


                {/* Monthly */}
                <button
                    onClick={() => setBilling("monthly")}
                    className="relative w-1/2 z-10 flex-1 px-5 py-2 text-sm font-medium"
                >
                    Monthly
                </button>

                {/* Yearly */}
                <button
                    onClick={() => setBilling("yearly")}
                    className="relative w-1/2 z-10 flex-1 px-5 py-2 text-sm font-medium"
                >
                    Yearly
                </button>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-20 w-full justify-center m-auto">
                <div
                    id="card1"
                    className="relative flex flex-col border-inherit rounded-3xl py-7 px-3 flex-none w-fit"
                >
                    <div className="flex flex-col items-start gap-3 z-2 p-2">
                        <h2 className="text-xl font-bold">Free Plan</h2>
                        <div className="flex flex-row items-baseline gap-1">
                            <h1 className="text-5xl font-extrabold">$0</h1>
                            <h1 className="font-extralight text-sm text-gray-400">{billing === "monthly" ? "/ month" : "/ year"}</h1>
                        </div>
                        <h3 className="text-gray-400 text-md">Basic access with essential features.</h3>
                        <button className="bg-white text-md font-bold my-3 text-black px-8 py-3 rounded-2xl w-full">Get Started</button>
                    </div>
                    <div className="flex flex-col items-start border-[0.1px] border-white/20 p-3 rounded-3xl z-2">
                        <div className="flex flex-col items-start">
                            <h2 className="font-bold text-md mb-3 mt-3">What’s Included</h2>
                            <div className="flex flex-col items-start text-xs font-light gap-2">
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>Create and customize profile</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>Connect with other users</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/Ej8l59R9fYjXX47NmFf4J9ZOwU.svg"></img>
                                    <h2 className="line-through text-gray-500">Send and receive messages</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>Access to basic features</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/Ej8l59R9fYjXX47NmFf4J9ZOwU.svg"></img>
                                    <h2 className="line-through text-gray-500">View and share content</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>Receive notifications and updates</h2></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="absolute top-0 left-0 right-0 z-1"
                            src="https://framerusercontent.com/images/aVXEk0fKk4xK5x26SHjQ2GJHz9c.svg">
                        </img>
                    </div>
                </div>


                <div
                    id="card2"
                    className="relative flex flex-col border-inherit rounded-3xl py-7 px-3 flex-none w-fit"
                >
                    <div className="flex flex-col items-start gap-3 z-2 p-2">
                        <h2 className="text-xl font-bold">Premium Plan</h2>
                        <div className="flex flex-row items-baseline gap-1">
                            <h1 className="text-5xl font-extrabold">
                                <CountUp start={billing === "monthly" ? 5 : 80} end={billing === "monthly" ? 10 : 99} useEasing={false} duration={0.3} prefix="$" enableScrollSpy={true} />
                            </h1>
                            <h1 className="font-extralight text-sm text-gray-400">{billing === "monthly" ? "/ month" : "/ year"}</h1>
                        </div>
                        <h3 className="text-gray-400 text-md">Enhanced features for new experience.</h3>
                        <button className="bg-white text-md font-bold my-3 text-black px-8 py-3 rounded-2xl w-full">Get Started</button>
                    </div>
                    <div className="flex flex-col items-start border-[0.1px] border-white/20 p-3 rounded-3xl z-2">
                        <div className="flex flex-col items-start">
                            <h2 className="font-bold text-md mb-3 mt-3">What’s Included</h2>
                            <div className="flex flex-col items-start text-xs font-light gap-2">
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>Create and customize profile</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>Connect with other users</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>Send and receive messages</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>Access to basic features</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>View and share content</h2></div>
                                <div className="flex flex-row gap-1 items-center">
                                    <img src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"></img>
                                    <h2>Receive notifications and updates</h2></div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-2 py-2 px-3 right-2 bg-white/10 rounded-3xl text-white/80 z-2">
                        <h2 className="text-xs">Save 20% on Yearly</h2>
                    </div>
                    <div>
                        <img
                            className="absolute top-0 left-0 right-0 z-1"
                            src="https://framerusercontent.com/images/aVXEk0fKk4xK5x26SHjQ2GJHz9c.svg">
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
}

