"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const fadeInUp: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 80, damping: 20 },
    },
};

export default function WorksPage() {
    return (
        <main className="pt-32 pb-40 px-6 md:px-10 bg-white">
            <div className="max-w-[1440px] mx-auto">

                {/* Header */}
                <motion.div
                    className="mb-20 md:mb-32 max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <p className="label-mono mb-4 text-black/35 italic">Selected Works</p>
                    <h1 className="h0 mb-8 uppercase font-black tracking-tight leading-[0.9]">
                        Human-centred<br />products & systems.
                    </h1>
                    <p className="body-large text-black/50 max-w-2xl font-medium tracking-tight">
                        Transforming complex challenges into intuitive experiences across fintech, social impact, and design education.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-32"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {PROJECTS.map((project) => (
                        <motion.article
                            key={project.slug}
                            variants={fadeInUp}
                            className="group flex flex-col gap-8"
                        >
                            <Link href={`/works/${project.slug}`} className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#F5F5F5] border border-black/5">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-1000 ease-out"
                                    unoptimized
                                />
                                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </Link>

                            <div className="flex justify-between items-start px-4">
                                <div className="flex flex-col gap-2">
                                    <h3 className="h1 text-[40px] font-black uppercase tracking-tighter leading-none">{project.name}</h3>
                                    <p className="label-mono text-black/40 italic uppercase tracking-wider font-bold text-[12px]">{project.category}</p>
                                </div>
                                <span className="label-mono text-black/20 tabular-nums font-black italic text-[20px]">{project.year}</span>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

            </div>
        </main>
    );
}
