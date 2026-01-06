import React, { useRef, useState } from "react";

/** FAQs (from your screenshot) */
const faqs = [
    {
        question: "How do I create an account?",
        answer:
            "To create an account, download Appit, open the app, and follow the on-screen instructions to sign up using your email or social media."
    },
    {
        question: "Can I customize my profile?",
        answer:
            "Yes, Appit allows you to personalize your profile with a photo, bio, and interests to better connect with others."
    },
    {
        question: "Is Appit available on all devices?",
        answer:
            "Appit is available on both iOS and Android devices, ensuring you can stay connected from your smartphone or tablet."
    },
    {
        question: "What privacy controls are available?",
        answer:
            "Appit offers advanced privacy settings, allowing you to control who can view your profile and interact with you, ensuring your data is secure."
    },
    {
        question: "How does the smart matching work?",
        answer:
            "Our smart matching algorithm analyzes your interests and preferences to suggest connections that are most likely to be meaningful and relevant."
    },
    {
        question: "Can I share multimedia content?",
        answer:
            "Yes, Appit supports sharing photos, videos, and other multimedia content to enhance your interactions and keep your connections engaged."
    },
    {
        question: "What should I do if I encounter issues?",
        answer:
            "If you experience any issues, please contact our support team through the app or website, and we'll assist you as quickly as possible."
    }
];

export default function FaqSection() {

    // allow MULTIPLE items open
    const [openItems, setOpenItems] = useState([]);
    const answerRefs = useRef([]);

    // toggle logic for multiple open
    const toggle = (index) => {
        setOpenItems((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section id="faqs" className="flex flex-col scroll-mt-35 gap-10 w-[80%] items-center text-white mx-auto">
            
            {/* Header */}
            <div className="flex flex-col gap-5 items-center">
                <div className="flex gap-1 w-fit py-2 px-3 items-center bg-white/5 rounded-3xl ring-1 ring-white/20">
                    <img
                        className="aspect-square w-6 h-6"
                        src="https://framerusercontent.com/images/Vt3jSMM5RK4hF47lS5oQZprsA.svg"
                        alt="FAQ icon"
                    />
                    <h2 className="select-none">FAQ's</h2>
                </div>

                <h1 className="text-center text-[30px] md:text-[50px] lg:text-[60px] font-bold">
                    Frequently Asked Questions
                </h1>
            </div>

            {/* FAQ list */}
            <div className="flex flex-col gap-8 w-full max-w-3xl mx-40">

                {faqs.map((item, index) => (
                    <article
                        key={index}
                        className="flex flex-col items-start px-6 bg-white/5 rounded-2xl border-[0.1px] border-white/10"
                    >

                        {/* Entire header is clickable */}
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex items-center justify-between py-4 text-left"
                        >
                            <p className="text-lg font-bold">{item.question}</p>

                            <div className="ml-3 w-9 h-9 rounded-[7px] border-[0.1px] border-white/10 
                                flex items-center justify-center">
                                <img
                                    src="https://framerusercontent.com/images/mHa1SilBp9GVaW3Ir0GF3IPLVk.svg"
                                    alt=""
                                    className={`w-4 h-4 transition-transform duration-100 
                                        ${openItems.includes(index) ? "rotate-45" : "rotate-0"}`}
                                />
                            </div>
                        </button>

                        {/* divider */}
                        {openItems.includes(index) && (
                            <div className="h-[0.1px] w-full bg-white/10" />
                        )}

                        {/* Answer section */}
                        <div
                            ref={(el) => (answerRefs.current[index] = el)}
                            className="w-full overflow-hidden transition-[max-height] duration-300 ease-in-out"
                            style={{
                                maxHeight:
                                    openItems.includes(index) &&
                                    answerRefs.current[index]
                                        ? `${answerRefs.current[index].scrollHeight}px`
                                        : "0px",
                            }}
                        >
                            <div className="py-3">
                                <p className="text-left text-sm leading-7 text-white/50">
                                    {item.answer}
                                </p>
                            </div>
                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}
