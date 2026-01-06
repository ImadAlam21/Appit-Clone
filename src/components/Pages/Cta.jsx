export default function Cta() {
    return (
        <div className="div flex flex-col w-full gap-10 text-white items-center justify-center">
            <div className="div flex flex-col w-[55%] gap-8 items-center">
                <div className="div">
                    <p className="text-center text-6xl font-extrabold">
                        Download Appit Social and Connect Today
                    </p>
                </div>
                <div className="div text-center text-xl text-white/60">
                    Download Appit now to start connecting with like-minded people and enjoy a seamless social experience!
                </div>
            </div>
            <div className="div flex flex-row items-center gap-5">
                <div className="div flex flex-col md:flex-row gap-5 place-items-center p-3">
                    <div className="shrink-0 div flex bg-white rounded-2xl border-[0.1px] border-gray-600 p-5 gap-5 py-3">
                        <img src="https://framerusercontent.com/images/1GgSZDsVA7GKub98IQFhnqoNJvI.svg"
                            className="w-auto h-auto object-cover p-1"
                        ></img>
                        <div className="div flex flex-col text-left text-black">
                            <h3>Get it on</h3>
                            <h2 className="font-bold text-xl">Google Play</h2>
                        </div>
                    </div>
                    <div className="shrink-0 div flex bg-white rounded-2xl border-[0.1px] border-gray-600 p-5 gap-5 py-3">
                        <img src="https://framerusercontent.com/images/FYCYoM8VIfSiqoaZSgdFlktYPik.svg"
                            className="w-auto h-auto object-cover p-1"
                        ></img>
                        <div className="div flex flex-col text-left text-black">
                            <h3>Download on the</h3>
                            <h2 className="font-bold text-xl">App Store</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center items-center gap-8
                h-full
                md:h-[633px] lg:h-[712px] mx-10
                w-[300px] sm:w-[745px] md:w-[845px] lg:w-full
                px-10 md:px-0
                overflow-hidden">

                <div className="relative">
                    <img
                        src="https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png"
                        className="relative w-[150px] sm:w-[180px] md:w-[210px] lg:w-[280px] scale-95 z-10"
                    />
                    <img src="https://framerusercontent.com/images/B2m0LKSmEka5kfOQ2YKH6auX0k.jpg"
                        className="absolute z-20 -top-3
                        left-0
                        right-0 scale-85 rounded-[40px]"
                    >
                    </img>
                </div>


                <img
                    src="https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png"
                    className="w-[200px] sm:w-[230px] md:w-[300px] lg:w-[360px] z-20"
                />

                <div className="relative">
                    <img
                    src="https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png"
                    className="w-[150px] sm:w-[180px] md:w-[210px] lg:w-[280px] scale-95 z-10"
                    />
                    <img src="https://framerusercontent.com/images/4PMUjM37QV5xqmOThq7gnKNHOBs.jpg"
                    className="absolute z-20 -top-3
                        left-0
                        right-0 scale-85 rounded-[40px]"
                    >
                    </img>
                </div>
                

                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black to-transparent h-65 sm:h-75 md:h-115 lg:h-120 z-30" />
            </div>

        </div>
    )
}