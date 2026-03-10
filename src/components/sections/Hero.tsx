"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 80, damping: 20 },
    },
};

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const phoneY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={ref} className="min-h-screen relative flex items-center pt-[80px] px-6 md:px-10 overflow-hidden bg-white">
            <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center py-20 md:py-0">

                {/* ── LEFT ──────────────────────────── */}
                <motion.div
                    className="col-span-1 md:col-span-7 flex flex-col items-start gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Availability pill */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-3 border border-black/10 rounded-full py-1.5 pl-1.5 pr-5"
                    >
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-black/5 flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
                                alt="Beyond Bechani"
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                        <span className="label-mono text-black/50">Available for projects</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1 variants={itemVariants} className="flex flex-col">
                        <span className="h0 leading-[0.88] tracking-[-0.04em] text-black">Beyond Bechani</span>
                        <span className="h0 leading-[0.88] tracking-[-0.04em] text-black/15">Product Designer</span>
                    </motion.h1>

                    {/* Sub text */}
                    <motion.p variants={itemVariants} className="body-regular text-black/50 max-w-[480px]">
                        Transforming complex systems into intuitive and meaningful human-centred experiences. Based in Harare, Zimbabwe.
                    </motion.p>

                    {/* CTA */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 bg-black text-white rounded-full px-7 py-4 hover:bg-black/80 transition-colors duration-300"
                        >
                            <span className="body-regular font-medium">Get in Touch</span>
                            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                                <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </a>
                        <a href="/works" className="label-mono text-black/40 hover:text-black transition-colors border-b border-black/20 pb-0.5">
                            View Projects
                        </a>
                    </motion.div>
                </motion.div>

                {/* ── RIGHT — Mobile/Fintech Visualization ──────────── */}
                <motion.div
                    className="col-span-1 md:col-span-5 flex justify-center md:justify-end"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.6 }}
                    style={{ y: phoneY }}
                >
                    <motion.div
                        className="relative w-[260px] md:w-[300px] h-[530px] md:h-[600px]"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                        {/* Phone shell */}
                        <div className="absolute inset-0 bg-[#111] rounded-[44px] shadow-2xl overflow-hidden border border-white/5">
                            {/* Screen content */}
                            <div className="absolute inset-[3px] rounded-[41px] overflow-hidden bg-[#1a1a1a]">
                                <Image
                                    src="https://images.unsplash.com/photo-1618067182337-a75d55b05770?q=80&w=600&auto=format&fit=crop"
                                    alt="Fintech Interface"
                                    fill
                                    className="object-cover opacity-90"
                                    unoptimized
                                />
                            </div>
                            {/* Notch */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111] rounded-full z-10" />
                        </div>
                    </motion.div>
                </motion.div>

            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 left-6 right-6 md:left-10 md:right-10 h-px bg-black/8" />
        </section>
    );
}
