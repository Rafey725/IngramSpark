
"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const AICrousal = () => {
    const slides = [
        {
            heading: "Print",
            description: "Hardcover and paperback books created on demand.",
            image: "/slides/slide5.svg",
        },
        {
            heading: "Sell",
            description: "Reach millions of readers around the world.",
            image: "/slides/slide4.svg",
        },
        {
            heading: "Promote",
            description: "Book marketing services",
            image: "/slides/slide3.svg",
        },
        {
            heading: "Publish",
            description: "Create your print and ebook with professional quality.",
            image: "/slides/slide2.svg",
        },
        {
            heading: "You Have a Story. Share It with the World.",
            description:
                "Everything you need to publish, print, promote and sell your book to millions of readers.",
            image: "/slides/slide1.webp",
        },
    ];

    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const [current, setCurrent] = useState(1);
    const [slideWidth, setSlideWidth] = useState(0);

    // Make infinite loop structure
    const extendedSlides = [
        slides[slides.length - 1], // clone last
        ...slides,
        slides[0], // clone first
    ];

    /** -----------------------------------
     *  FUNCTIONS (declared before usage)
     * -----------------------------------**/

    const resetTransition = () => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = "none";
        }
    };

    const enableTransition = () => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = "transform 0.45s ease";
        }
    };

    const startAuto = () => {
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 3000);
    };

    const handleNext = () => {
        clearInterval(intervalRef.current);
        enableTransition();
        setCurrent((prev) => prev + 1);
        startAuto();
    };

    const handlePrev = () => {
        clearInterval(intervalRef.current);
        enableTransition();
        setCurrent((prev) => prev - 1);
        startAuto();
    };

    /** -----------------------------------
     *  EFFECTS
     * -----------------------------------**/

    // Autoplay
    // useEffect(() => {
    //   startAuto();
    //   return () => clearInterval(intervalRef.current);
    // }, []);

    // Recalculate width on resize
    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current && sliderRef.current.children[1]) {
                setSlideWidth(sliderRef.current.children[1].offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Infinite-loop teleport logic
    useEffect(() => {
        if (!sliderRef.current) return;

        // Reached after last clone
        if (current === extendedSlides.length - 1) {
            setTimeout(() => {
                resetTransition();
                setCurrent(1);
            }, 450);
        }

        // Reached before first clone
        if (current === 0) {
            setTimeout(() => {
                resetTransition();
                setCurrent(slides.length);
            }, 450);
        }
    }, [current]);

    /** -----------------------------------
     *  RENDER
     * -----------------------------------**/

    return (
        <div className="relative sm:h-[480px] w-full bg-[#f0fbfc] flex justify-center items-center px-5 overflow-hidden">

            {/* Prev Button */}
            <button
                onClick={handlePrev}
                className="absolute z-20 left-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer"
            >
                <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="w-full h-full block -rotate-90 ml-2.5"
                />
            </button>

            {/* Slider */}
            <div className="max-w-5xl w-full overflow-hidden">
                <div
                    ref={sliderRef}
                    style={{
                        transform: `translateX(-${current * slideWidth}px)`,
                    }}
                    className="flex"
                >
                    {extendedSlides.map((slide, i) => (
                        <div
                            key={i}
                            className="min-w-full h-[400px] flex items-center justify-center bg-[#d9eef2]"
                        >
                            <h1 className="text-3xl font-bold">{slide.heading}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Button */}
            <button
                onClick={handleNext}
                className="absolute z-20 right-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer"
            >
                <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="w-full h-full block rotate-90 mr-3"
                />
            </button>
        </div>
    );
};

export default AICrousal;
