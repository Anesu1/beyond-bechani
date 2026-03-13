"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const revealVariants = {
    hidden: { y: "100%" },
    visible: { 
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export default function Hero() {
    return (
        <section className="min-h-screen relative flex flex-col justify-center grid-background overflow-hidden">
            <div className="container-padding max-w-[1440px] mx-auto w-full flex flex-col items-start pt-32 pb-20">
                
                {/* Profile Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-[32px] overflow-hidden bg-black/5 border border-black/5">
                        <Image
                            src="/images/profile.webp"
                            alt="Beyond Bechani"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col mb-12"
                >
                    <div className="overflow-hidden">
                        <motion.h1 variants={revealVariants} className="h-hero text-black">
                            Beyond Bechani
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden -mt-2">
                        <motion.h1 variants={revealVariants} className="h-hero text-black/20">
                            Product Designer
                        </motion.h1>
                    </div>
                </motion.div>

                {/* Subtext & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row md:items-center gap-8 w-full justify-between"
                >
                    <p className="body-large text-black/50 max-w-[540px]">
                        Transforming complex systems into intuitive and meaningful human-centred experiences. Based in Harare, Zimbabwe.
                    </p>

                    <button className="group relative bg-[#000000] text-white rounded-full px-8 py-4 overflow-hidden transition-all hover:pr-12">
                        <span className="relative z-10 font-medium">BOOK A FREE CALL</span>
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                            <ArrowDown className="w-4 h-4 -rotate-[135deg]" />
                        </div>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-px h-12 bg-black/10 relative overflow-hidden">
                    <motion.div 
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute inset-0 bg-black/40"
                    />
                </div>
            </motion.div>
        </section>
    );
}

