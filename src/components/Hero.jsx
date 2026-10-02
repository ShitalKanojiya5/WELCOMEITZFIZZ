import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Stats from "./Stats";
import CarVisual from "./CarVisual";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const heroRef = useRef(null);
    const headlineRef = useRef(null);
    const statsRef = useRef(null);
    const carRef = useRef(null);
    const ringRef = useRef(null);
    const glowRef = useRef(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {

            /* ----- INITIAL LOAD ANIMATION----------- */

            const headlineLetters =
                headlineRef.current.querySelectorAll(".headline-letter");

            const statItems =
                statsRef.current.querySelectorAll(".hero-stat");

            const introTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            introTimeline.from(headlineLetters, {
                y: 80,
                opacity: 0,
                duration: 0.9,
                stagger: 0.045,
            });

            introTimeline.from(
                statItems,
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.15,
                },
                "-=0.35"
            );

            introTimeline.from(
                carRef.current,
                {
                    x: 120,
                    opacity: 0,
                    scale: 0.75,
                    duration: 1.2,
                    ease: "power3.out",
                },
                "-=0.8"
            );

            /* ------ SCROLL ANIMATION--------*/

            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=1300",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            /* ----------------CAR MOVEMENT--------------- */

            scrollTimeline.to(
                carRef.current,
                {
                    x: 230,
                    y: 100,
                    scale: 0.72,
                    rotate: -8,
                    ease: "none",
                },
                0
            );


            /* -------------  RING MOVEMENT----------- */

            scrollTimeline.to(
                ringRef.current,
                {
                    rotate: 180,
                    scale: 1.3,
                    opacity: 0.2,
                    ease: "none",
                },
                0
            );

            /* ----------   HEADLINE MOVEMENT-------------*/

            scrollTimeline.to(
                headlineRef.current,
                {
                    y: -100,
                    scale: 0.9,
                    opacity: 0.18,
                    ease: "none",
                },
                0
            );


            /* ----------BACKGROUND GLOW----------- */

            scrollTimeline.to(
                glowRef.current,
                {
                    scale: 1.8,
                    opacity: 0.15,
                    ease: "none",
                },
                0
            );
        }, heroRef);
        return () => {
            context.revert();
        };
    }, []);

    const headline = "WELCOMEITZFIZZ";

    return (
        <section
            id="home" ref={heroRef} className=" hero-section
        relative min-h-screen overflow-hidden bg-[#05060a]" >

            {/*-----------------BACKGROUND------------ */}

            <div className="pointer-events-none absolute inset-0">

                <div
                    className="absolute-right-20  top-20 h-72 w-72 rounded-full
                    bg-violet-700/30 blur-[100px] md:h-96 md:w-96"/>
                <div
                    className="absolute  bottom-0 left-[-100px]
                    h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]"/>
                <div
                    ref={glowRef}
                    className="absolute right-[20%] top-[30%]  h-80   w-80
                     rounded-full bg-indigo-500/10 blur-[100px] will-change-transform"/>

            </div>


            {/* ----------- HERO CONTENT---------- */}

            <div
                className="relative z-10 flex min-h-screen
                     items-center px-6 pt-20 md:px-12 lg:px-16">

                <div className="w-full max-w-[1500px]">

                    {/* Small label */}

                    <div className="mb-8 flex items-center gap-5 text-[10px] uppercase tracking-[0.35em] text-white/50 md:mb-12">
                        <span className="text-sm font-bold tracking-normal text-white">01</span>
                        <span className="h-px w-12 bg-white/30"></span>
                        <span>Scroll Experience</span>
                    </div>

                    {/* ----------HEADLINE----------- */}

                    <h1
                        ref={headlineRef}
                        className="max-w-[1000px] text-[clamp(48px,8.8vw,145px)] font-black
                         uppercase leading-[0.88] tracking-[0.025em] text-white will-change-transform">
                        {headline.split("").map((letter, index) => (
                            <span
                                key={`${letter}-${index}`}
                                className={`  headline-letter inline-block
                                        ${index >= 7 
                                            ? "bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent"
                                                : ""
                                    }
                               `}>
                                {letter}
                            </span>
                        ))}
                    </h1>

                    {/* ----------  STATISTICS--------    */}

                    <div ref={statsRef}><Stats /></div>
                </div>
            </div>

            {/* -----------------CAR VISUAL--------- */}

            <div
                ref={carRef}
                className="absolute right-[-90px] top-[52%] z-20
               -translate-y-1/2 md:right-[0] lg:right-[3%]  will-change-transform">
                <div ref={ringRef}><CarVisual /></div>
            </div>


            {/* ---------  SCROLL INDICATOR----------- */}

            <div
                className="absolute bottom-7 left-1/2 z-30 flex-translate-x-1/2 flex-col
              items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-white/50">
                <span>Scroll</span>
                <span className="h-12 w-px bg-white/30"></span>
                <span className="flex h-7 w-5 items-start justify-center rounded-full border border-white/30 pt-1">
                    <span className="h-1.5 w-px bg-white/70"></span>
                </span>
            </div>
        </section>
    );
}

export default Hero;