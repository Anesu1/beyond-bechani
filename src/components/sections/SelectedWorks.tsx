"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

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

export default function SelectedWorks() {
    const featuredProjects = PROJECTS.slice(0, 4);

    return (
        <section id="works" className="section-padding bg-white grid-background">
            <div className="max-w-[1440px] mx-auto container-padding">
                
                {/* Section header */}
                <div className="mb-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        <motion.span variants={revealVariants} className="label-mono text-black/40">
                            01 — Selected Works
                        </motion.span>
                        <div className="overflow-hidden">
                            <motion.h2 variants={revealVariants} className="h-section text-black max-w-[600px]">
                                Strategic design for ambitious brands
                            </motion.h2>
                        </div>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {featuredProjects.map((project, idx) => (
                        <motion.article
                            key={project.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1] as any }}
                            className="group"
                        >
                            <Link href={`/works/${project.slug}`} className="block">
                                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-black/5 mb-6">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                                        unoptimized
                                    />
                                    {/* Arrow Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                                            <ArrowDown className="w-6 h-6 -rotate-[135deg] text-black" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="h-card text-black">{project.name}</h3>
                                        <p className="body-regular text-black/40">{project.category}</p>
                                    </div>
                                    <span className="label-mono text-black/30 mt-2">{project.year}</span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {/* View All */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 flex justify-center md:justify-start"
                >
                    <Link href="/works" className="group flex items-center gap-4 py-4 px-2">
                        <span className="label-mono text-black group-hover:text-black/60 transition-colors">VIEW ALL PROJECTS</span>
                        <div className="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                            <ArrowDown className="w-4 h-4 -rotate-[135deg]" />
                        </div>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
