import { useEffect } from "react";
import './MainPage.css'
export default function TheTestimonials() {
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
        <div id="testimonials" className="flex flex-col scroll-mt-35 gap-20 items-center text-white w-full">
            <div className="div flex flex-col gap-5 items-center">
                <div className="div flex flex-row gap-1 w-fit py-2 px-3 items-center bg-white/5 rounded-3xl ring-1 ring-white/20">
                    <img
                        className="w-full h-full"
                        src="https://framerusercontent.com/images/1CGcD1VdAFHtaEbo8XY5DBOwy5c.svg">
                    </img>
                    <h3>Testimonials</h3>
                </div>
                <div className="div flex flex-col items-center gap-7">
                    <h1 className="text-center text-[30px] md:text-[50px] lg:text-[60px] font-bold">Our Testimonials</h1>
                    <h3 className="text-center px-5 md:px-50 lg:px-90 text-gray-400">See how Appit has transformed users social experiences through their own words.</h3>
                </div>
            </div>
            <div
                id="scroller"
                className="w-full h-auto overflow-hidden mx-auto"
            >
                <ul
                    id="inner-scroller"
                    className="flex items-center gap-5 p-1"
                >
                    {/* Each li is non-flexible (won't shrink or grow) and centers the img */}
                    <li className="shrink-0 flex items-center justify-center w-[300px] h-[250px]">
                        <div className="relative flex flex-col border-[0.1px] rounded-2xl w-full h-full border-white/10 text-white">
                            <p className="z-2 p-4 text-left font-light text-white/70">The intuitive design and smart features of Appit made it easy to find meaningful connections. It's become my go-to app.</p>
                            <div className="z-1">
                                <img
                                className="absolute inset-0"
                            src="https://framerusercontent.com/images/ftLaVloyhCtaUPhQd1Wo4ofYTa4.svg">
                            </img>
                            </div>

                            <div className="border-[0.1px] border-white/15 mx-5"></div>
                            
                            <div className="div flex flex-row gap-5 p-3 z-2">
                                <img
                                className=" h-15 w-15 p-1"
                                src="https://framerusercontent.com/images/DsQBHRyqYMW0j9DEkiDEFfYhI6Q.png"></img>
                                <div className="div flex flex-col items-start">
                                    <h2 className="text-2xl font-semibold">John Doe</h2>
                                    <h3 className="font-extralight text-sm">Founder at Nova</h3>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className="shrink-0 flex items-center justify-center w-[300px] h-[250px]">
                        <div className="relative flex flex-col border-[0.1px] rounded-2xl w-full h-full border-white/10 text-white">
                            <p className="z-2 p-4 text-left font-light text-white/70">With Appit, I've expanded my network and found genuine connections. The seamless interface makes socializing so much easier.</p>
                            <div className="z-1">
                                <img
                                className="absolute inset-0"
                            src="https://framerusercontent.com/images/ftLaVloyhCtaUPhQd1Wo4ofYTa4.svg">
                            </img>
                            </div>

                            <div className="border-[0.1px] border-white/15 mx-5"></div>
                            
                            <div className="div flex flex-row gap-5 p-3 z-2">
                                <img
                                className=" h-15 w-15 p-1"
                                src="https://framerusercontent.com/images/btu2FLVJjqlpZhrCc216uNeKhM.png"></img>
                                <div className="div flex flex-col items-start">
                                    <h2 className="text-2xl font-semibold">Michael Brown</h2>
                                    <h3 className="font-extralight text-sm">Founder at Novus</h3>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className="shrink-0 flex items-center justify-center w-[300px] h-[250px]">
                        <div className="relative flex flex-col border-[0.1px] rounded-2xl w-full h-full border-white/10 text-white">
                            <p className="z-2 p-4 text-left font-light text-white/70">The community support and engaging multimedia sharing on Appit have made it my favorite platform for connecting and sharing.</p>
                            <div className="z-1">
                                <img
                                className="absolute inset-0"
                            src="https://framerusercontent.com/images/ftLaVloyhCtaUPhQd1Wo4ofYTa4.svg">
                            </img>
                            </div>

                            <div className="border-[0.1px] border-white/15 mx-5"></div>
                            
                            <div className="div flex flex-row gap-5 p-3 z-2">
                                <img
                                className=" h-15 w-15 p-1"
                                src="https://framerusercontent.com/images/q8tlzXQaCG8gQHuuiRSRgpqUbc.png"></img>
                                <div className="div flex flex-col items-start">
                                    <h2 className="text-2xl font-semibold">James Taylor</h2>
                                    <h3 className="font-extralight text-sm">Founder at Wond</h3>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className="shrink-0 flex items-center justify-center w-[300px] h-[250px]">
                        <div className="relative flex flex-col border-[0.1px] rounded-2xl w-full h-full border-white/10 text-white">
                            <p className="z-2 p-4 text-left font-light text-white/70">I love how Appit helps me stay in touch with friends and meet new people. The app is user-friendly and effective.</p>
                            <div className="z-1">
                                <img
                                className="absolute inset-0"
                            src="https://framerusercontent.com/images/ftLaVloyhCtaUPhQd1Wo4ofYTa4.svg">
                            </img>
                            </div>

                            <div className="border-[0.1px] border-white/15 mx-5"></div>
                            
                            <div className="div flex flex-row gap-5 p-3 z-2">
                                <img
                                className=" h-15 w-15 p-1"
                                src="https://framerusercontent.com/images/q9EnfT6QkNFrFgqgUjIfmWzoW8.png"></img>
                                <div className="div flex flex-col items-start">
                                    <h2 className="text-2xl font-semibold">John Pitt</h2>
                                    <h3 className="font-extralight text-sm">Founder at Apex</h3>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className="shrink-0 flex items-center justify-center w-[300px] h-[250px]">
                        <div className="relative flex flex-col border-[0.1px] rounded-2xl w-full h-full border-white/10 text-white">
                            <p className="z-2 p-4 text-left font-light text-white/70">Appit’s features are fantastic for both meeting new people and staying connected with existing friends. It’s a must-have app.</p>
                            <div className="z-1">
                                <img
                                className="absolute inset-0"
                            src="https://framerusercontent.com/images/ftLaVloyhCtaUPhQd1Wo4ofYTa4.svg">
                            </img>
                            </div>

                            <div className="border-[0.1px] border-white/15 mx-5"></div>
                            
                            <div className="div flex flex-row gap-5 p-3 z-2">
                                <img
                                className=" h-15 w-15 p-1"
                                src="https://framerusercontent.com/images/w6nhBfckvD3enWdC7MdGroG3zYM.png"></img>
                                <div className="div flex flex-col items-start">
                                    <h2 className="text-2xl font-semibold">David Wilson</h2>
                                    <h3 className="font-extralight text-sm">Founder at Boom</h3>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className="shrink-0 flex items-center justify-center w-[300px] h-[250px]">
                        <div className="relative flex flex-col border-[0.1px] rounded-2xl w-full h-full border-white/10 text-white">
                            <p className="z-2 p-4 text-left font-light text-white/70">I’m amazed at how Appit’s advanced privacy controls and customizable features have enhanced my online social experience. Truly innovative.</p>
                            <div className="z-1">
                                <img
                                className="absolute inset-0"
                            src="https://framerusercontent.com/images/ftLaVloyhCtaUPhQd1Wo4ofYTa4.svg">
                            </img>
                            </div>

                            <div className="border-[0.1px] border-white/15 mx-5"></div>
                            
                            <div className="div flex flex-row gap-5 p-3 z-2">
                                <img
                                className=" h-15 w-15 p-1"
                                src="https://framerusercontent.com/images/yYKQ1tubWkyz2kIXNYCQoAawMQ.png"></img>
                                <div className="div flex flex-col items-start">
                                    <h2 className="text-2xl font-semibold">Laura Martinez</h2>
                                    <h3 className="font-extralight text-sm">Founder at Comet</h3>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className="shrink-0 flex items-center justify-center w-[300px] h-[250px]">
                        <div className="relative flex flex-col border-[0.1px] rounded-2xl w-full h-full border-white/10 text-white">
                            <p className="z-2 p-4 text-left font-light text-white/70">Appit has truly transformed my social life. I've connected with amazing people and discovered new interests. Highly recommended!</p>
                            <div className="z-1">
                                <img
                                className="absolute inset-0"
                            src="https://framerusercontent.com/images/ftLaVloyhCtaUPhQd1Wo4ofYTa4.svg">
                            </img>
                            </div>

                            <div className="border-[0.1px] border-white/15 mx-5"></div>
                            
                            <div className="div flex flex-row gap-5 p-3 z-2">
                                <img
                                className=" h-15 w-15 p-1"
                                src="https://framerusercontent.com/images/VvQpIy1y1cSSlomZVLtZ5g6MY.png"></img>
                                <div className="div flex flex-col items-start">
                                    <h2 className="text-2xl font-semibold">Emma Johnson</h2>
                                    <h3 className="font-extralight text-sm">Founder at Specra</h3>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}