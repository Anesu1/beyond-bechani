"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
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

export default function BlogPreview() {
    const latestPosts = BLOG_POSTS.slice(0, 3);

    return (
        <section id="blog" className="py-32 lg:py-40 px-6 md:px-10 bg-white">
            <div className="max-w-[1440px] mx-auto">

                {/* Header */}
                <motion.div
                    className="flex justify-between items-end mb-16 pb-8 border-b border-black/8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="flex flex-col gap-2">
                        <p className="label-mono text-black/35 italic">05 — Insights</p>
                        <h2 className="h1 uppercase font-black tracking-tight">The Lab</h2>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:inline-flex items-center gap-2 group label-mono text-black/40 hover:text-black transition-colors uppercase font-bold text-[12px]"
                    >
                        All Insights
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </motion.div>

                {/* Blog grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {latestPosts.map((post) => (
                        <motion.article
                            key={post.slug}
                            variants={fadeInUp}
                            className="group flex flex-col gap-6"
                        >
                            <Link href={`/blog/${post.slug}`} className="relative block aspect-[3/2] overflow-hidden rounded-[2rem] bg-[#F5F5F5] border border-black/5">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 group-hover:grayscale transition-all duration-700 ease-out"
                                    unoptimized
                                />
                            </Link>

                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center text-black/30 label-mono uppercase font-black italic text-[11px] tracking-widest">
                                    <span className="bg-black text-white px-3 py-1 rounded-full text-[9px] not-italic font-bold">{post.category}</span>
                                    <span className="tabular-nums">{post.date}</span>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="group-hover:text-black/60 transition-colors">
                                    <h3 className="h1 text-[32px] font-black uppercase tracking-tight leading-[1.1]">{post.title}</h3>
                                </Link>
                                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 label-mono text-black/50 group-hover:text-black/80 transition-colors mt-2 uppercase font-black text-[12px] tracking-widest">
                                    READ CASE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Mobile — see all */}
                <div className="mt-12 md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-4 label-mono text-black/50 border border-black/10 rounded-full px-8 py-4 uppercase font-black text-[12px]"
                    >
                        All Insights <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
