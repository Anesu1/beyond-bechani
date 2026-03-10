"use client";

import { motion, Variants } from "framer-motion";

const awards = [
    { value: "Speaker", label: "DevFest\nHarare 2025" },
    { value: "Founder", label: "UX Zim\nCommunity" },
    { value: "Mentor", label: "Startup Hub\nZimbabwe" },
    { value: "Leader", label: "Head of Design\nUncommon" },
];

const fadeInUp: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 80, damping: 20 },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
};

export default function Awards() {
    return (
        <section id="awards" className="py-32 lg:py-40 px-6 md:px-10 bg-black text-white">
            <div className="max-w-[1440px] mx-auto">

                <motion.div
                    className="mb-20 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <p className="label-mono mb-4 text-white/30 tracking-widest text-[10px] uppercase font-bold italic">04 — Recognition</p>
                    <h2 className="h1 text-white uppercase tracking-tighter font-black text-[56px] md:text-[80px]">Impact & Community</h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-y-12"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {awards.map((award, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className={`flex flex-col items-center justify-center text-center px-4 md:px-8 border-white/5 border-dashed ${i < awards.length - 1 ? "lg:border-r" : ""
                                } ${i === 1 ? "max-lg:border-l" : ""}`}
                        >
                            <span className="h1 font-black tracking-tighter mb-2 text-white italic uppercase">{award.value}</span>
                            <span className="label-mono text-white/40 whitespace-pre-line text-center uppercase tracking-wider font-bold text-[10px]">{award.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-24 pt-12 border-t border-white/5 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <p className="body-large text-white/35 max-w-2xl mx-auto italic font-medium">
                        "Technology should serve people, rather than the other way around." — Human-centered design advocate.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
