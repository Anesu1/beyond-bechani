"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const fadeInUp: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 80, damping: 20 },
    },
};

export default function SelectedWorks() {
    const featuredProjects = PROJECTS.slice(0, 4);

    return (
        <section id="works" className="py-32 lg:py-40 px-6 md:px-10 bg-white">
            <div className="max-w-[1440px] mx-auto">

                {/* Section header */}
                <motion.div
                    className="flex justify-between items-end mb-14 pb-6 border-b border-black/8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeInUp}
                >
                    <div className="flex flex-col gap-1">
                        <p className="label-mono text-black/35 italic">01 — Selected</p>
                        <h2 className="h1 uppercase font-black tracking-tight">Projects</h2>
                    </div>
                    <Link
                        href="/works"
                        className="hidden md:inline-flex items-center gap-2 group label-mono text-black/40 hover:text-black transition-colors uppercase font-bold text-[12px]"
                    >
                        All Works
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {featuredProjects.map((project) => (
                        <motion.article
                            key={project.slug}
                            variants={fadeInUp}
                            className="group flex flex-col gap-4 cursor-pointer"
                        >
                            <Link href={`/works/${project.slug}`} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F5F5] border border-black/6">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>

                            <div className="flex justify-between items-center px-1">
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="body-large font-bold uppercase tracking-tight leading-tight">{project.name}</h3>
                                    <p className="label-mono text-black/35 italic">{project.category}</p>
                                </div>
                                <span className="label-mono text-black/25 tabular-nums font-medium">{project.year}</span>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Mobile — see all */}
                <div className="mt-12 md:hidden">
                    <Link
                        href="/works"
                        className="inline-flex items-center gap-2 label-mono text-black/50 border border-black/10 rounded-full px-8 py-4 hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-bold uppercase text-[12px]"
                    >
                        All Works <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
