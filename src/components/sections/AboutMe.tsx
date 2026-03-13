"use client";

import { motion, Variants } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/data";
import { ArrowDown } from "lucide-react";

const revealVariants: Variants = {
    hidden: { y: "30%", opacity: 0 },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
        }
    }
};

export default function AboutMe() {
    return (
        <section id="about" className="section-padding bg-white grid-background">
            <div className="max-w-[1440px] mx-auto container-padding">
                <div className="flex flex-col gap-20">
                    
                    {/* Bio Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        className="flex flex-col gap-6"
                    >
                        <motion.span variants={revealVariants} className="label-mono text-black/40">
                            02 — About Me
                        </motion.span>
                        <div className="overflow-hidden">
                            <motion.h2 variants={revealVariants} className="h-section text-black max-w-[900px]">
                                Bridging the gap between humans and technology through strategic design.
                            </motion.h2>
                        </div>
                        <motion.div variants={revealVariants} className="body-large text-black/50 max-w-[700px]">
                            <p>
                                I specialize in creating digital products that are not only functional but emotionally resonant. My approach combines UX strategy with art direction to build experiences that drive real impact for businesses and their users.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Social Links Row */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap gap-8 pt-12 border-t border-black/5"
                    >
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2"
                            >
                                <span className="label-mono text-black group-hover:text-black/50 transition-colors uppercase">
                                    {link.name}
                                </span>
                                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                    <ArrowDown className="w-3.5 h-3.5 -rotate-[135deg]" />
                                </div>
                            </a>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

