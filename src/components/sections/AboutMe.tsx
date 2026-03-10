"use client";

import { motion, Variants } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const stats = [
    { value: "40+", label: "Projects Completed" },
    { value: "8+", label: "Years of Experience" },
    { value: "Founded", label: "UX Zim & Uncommon.org" },
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
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

export default function AboutMe() {
    return (
        <section id="about" className="py-32 lg:py-40 px-6 md:px-10 bg-[#F9F9F9]">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

                    {/* Left Column: Bio */}
                    <motion.div
                        className="lg:col-span-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <p className="label-mono mb-4 text-black/40 italic">02 — About</p>
                        <h2 className="h1 mb-10 max-w-4xl uppercase font-black tracking-tight leading-[1] text-black">
                            Championing human‑centred design — leading with empathy.
                        </h2>
                        <div className="prose prose-xl prose-black text-black/60 body-regular max-w-3xl mb-12 font-medium tracking-tight">
                            <p>
                                From leading product teams at Uncommon.org to founding Zimbabwe's first UX community, my mission is to transform complex systems into intuitive, meaningful experiences. I focus on creating value for both brands and audiences across multiple design disciplines for social impact and sustainable tech education.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-12 md:gap-20">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="h1 font-black tabular-nums tracking-tighter text-black/20 italic">{stat.value}</span>
                                    <p className="label-mono text-black/40 uppercase font-bold text-[11px] tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Links */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col justify-end"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <p className="label-mono mb-6 text-black/30 font-bold uppercase tracking-widest text-[11px]">Network</p>
                        <ul className="flex flex-col border-t border-black/10">
                            {SOCIAL_LINKS.map((link) => (
                                <motion.li
                                    key={link.name}
                                    variants={fadeInUp}
                                    className="border-b border-black/10"
                                >
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex justify-between items-center py-6 group transition-all duration-300"
                                    >
                                        <span className="body-regular font-black uppercase tracking-tight group-hover:text-black text-black/50 transition-colors text-[16px]">
                                            {link.name}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-black/15 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
