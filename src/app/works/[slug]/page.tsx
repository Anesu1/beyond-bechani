"use client";

import { useParams, notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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

export default function ProjectPage() {
    const params = useParams();
    const project = PROJECTS.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

    return (
        <main className="bg-white">
            {/* Hero Header */}
            <section className="pt-32 lg:pt-48 pb-16 lg:pb-24 px-6 md:px-10">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="flex flex-col gap-12"
                    >
                        <div className="flex flex-col gap-6">
                            <Link href="/works" className="inline-flex items-center gap-2 group label-mono text-black/30 hover:text-black transition-colors mb-6">
                                <ArrowLeft className="w-4 h-4" /> Back to Works
                            </Link>
                            <h1 className="h0 text-[60px] md:text-[100px] lg:text-[140px] leading-[0.88] tracking-[-0.05em] uppercase font-bold">
                                {project.name}
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black/10 pt-10">
                            <div className="md:col-span-8">
                                <p className="body-large text-black/60 max-w-3xl leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-12">
                                    <a href="#" className="inline-flex items-center gap-3 bg-black text-white rounded-full px-8 py-4 px-10 hover:bg-black/80 transition-all duration-300 shadow-xl shadow-black/10">
                                        <span className="body-regular font-bold uppercase tracking-wider">Launch Site</span>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="md:col-span-4 grid grid-cols-1 gap-8">
                                <div>
                                    <p className="label-mono text-black/30 mb-2">Client</p>
                                    <p className="body-regular font-medium uppercase">{project.client}</p>
                                </div>
                                <div>
                                    <p className="label-mono text-black/30 mb-2">Category</p>
                                    <p className="body-regular font-medium uppercase">{project.category}</p>
                                </div>
                                <div>
                                    <p className="label-mono text-black/30 mb-2">Year</p>
                                    <p className="body-regular font-medium tabular-nums">{project.year}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hero Full-width Media */}
            <section className="px-6 md:px-10 mb-32 lg:mb-48">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        className="relative aspect-[16/9] lg:aspect-[21/9] rounded-[32px] overflow-hidden bg-[#F5F5F5] border border-black/5"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    </motion.div>
                </div>
            </section>

            {/* Suggested Works footer */}
            <section className="py-24 lg:py-40 bg-[#F9F9F9] px-6 md:px-10">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="h2 text-[48px] font-bold">Next Projects</h2>
                        <Link href="/works" className="label-mono text-black/40 hover:text-black border-b border-black/10 pb-0.5 transition-colors">
                            SEE ALL WORKS
                        </Link>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {otherProjects.map((proj) => (
                            <motion.article
                                key={proj.slug}
                                variants={fadeInUp}
                                className="group flex flex-col gap-6"
                            >
                                <Link href={`/works/${proj.slug}`} className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-white border border-black/5">
                                    <Image
                                        src={proj.image}
                                        alt={proj.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                                        unoptimized
                                    />
                                </Link>
                                <div className="flex flex-col gap-1 px-1">
                                    <h3 className="h2 text-[24px] leading-tight font-medium">{proj.name}</h3>
                                    <p className="label-mono text-black/35">{proj.category}</p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
