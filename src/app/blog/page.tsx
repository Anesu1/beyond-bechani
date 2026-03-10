"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

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

export default function BlogPage() {
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
                    <p className="label-mono mb-4 text-black/35 italic">The Lab</p>
                    <h1 className="h0 mb-8 uppercase font-black tracking-tight leading-[0.9]">
                        Design for humans,<br />strategy for growth.
                    </h1>
                    <p className="body-large text-black/50 max-w-2xl font-medium tracking-tight">
                        Insights on UX strategy, design education, and the ethical implementation of AI in human-centred products.
                    </p>
                </motion.div>

                {/* Blog Post List */}
                <section className="flex flex-col border-t border-black/10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col"
                    >
                        {BLOG_POSTS.map((post) => (
                            <motion.article
                                key={post.slug}
                                variants={fadeInUp}
                                className="group border-b border-black/10 transition-colors"
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="flex flex-col md:flex-row items-center gap-12 py-20 px-6 -mx-6 group cursor-pointer hover:bg-black/5 transition-all duration-500 rounded-[2.5rem]"
                                >
                                    <div className="relative aspect-[3/2] md:w-[500px] overflow-hidden rounded-[2rem] bg-[#F5F5F5] border border-black/5 flex-shrink-0">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                                            unoptimized
                                        />
                                    </div>

                                    <div className="flex flex-col gap-8 w-full">
                                        <div className="flex justify-between items-center text-black/30 label-mono uppercase font-black italic text-[12px] tracking-widest">
                                            <span className="bg-black text-white px-4 py-1.5 rounded-full not-italic font-black text-[10px]">{post.category}</span>
                                            <span className="tabular-nums">{post.date}</span>
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <h2 className="h1 md:text-[64px] font-black leading-[1] text-black group-hover:-translate-y-2 transition-transform tracking-tight uppercase">
                                                {post.title}
                                            </h2>
                                            <p className="body-large text-black/40 max-w-2xl line-clamp-2 font-medium">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center gap-2 label-mono text-black/40 group-hover:text-black transition-colors mt-auto font-black uppercase tracking-[0.2em] text-[12px]">
                                            OPEN CASE <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>
                </section>

            </div>
        </main>
    );
}
