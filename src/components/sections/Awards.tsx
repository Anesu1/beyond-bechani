"use client";

import { motion, Variants } from "framer-motion";

const accolades = [
    { value: "Speaker", label: "DevFest Harare 2025" },
    { value: "Founder", label: "UX Zimbabwe Community" },
    { value: "Mentor", label: "Startup Hub Zimbabwe" },
    { value: "Leader", label: "Head of Design Uncommon" },
];

const revealVariants: Variants = {
    hidden: { y: "30%", opacity: 0 },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1] as any,
        }
    }
};

export default function Awards() {
    return (
        <section id="awards" className="section-padding bg-white grid-background">
            <div className="max-w-[1440px] mx-auto container-padding">
                
                <div className="mb-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        <motion.span variants={revealVariants} className="label-mono text-black/40">
                            04 — Recognition
                        </motion.span>
                        <div className="overflow-hidden">
                            <motion.h2 variants={revealVariants} className="h-section text-black max-w-[600px]">
                                Impact & Community
                            </motion.h2>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {accolades.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1] as any }}
                            className="p-10 rounded-[32px] bg-black/[0.02] border border-black/5 flex flex-col items-center justify-center text-center group hover:bg-black/[0.04] transition-colors"
                        >
                            <span className="h-card text-black mb-2 uppercase tracking-tighter">{item.value}</span>
                            <p className="label-mono text-black/40 uppercase tracking-wider">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
