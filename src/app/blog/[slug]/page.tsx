"use client";

import { useParams, notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/data";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";

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

export default function BlogPostPage() {
    const params = useParams();
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

    return (
        <main className="bg-white">
            {/* Header section */}
            <section className="pt-32 lg:pt-48 pb-16 lg:pb-24 px-6 md:px-10">
                <div className="max-w-[1000px] mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="flex flex-col gap-12"
                    >
                        <Link href="/blog" className="inline-flex items-center gap-3 group label-mono text-black/30 hover:text-black transition-colors uppercase font-black text-[12px] tracking-widest">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Lab
                        </Link>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-6 label-mono text-black/40 uppercase font-black italic text-[11px] tracking-widest">
                                <span className="bg-black text-white px-4 py-1.5 rounded-full not-italic font-black text-[9px]">{post.category}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                                <span>{post.date}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                                <span>{post.readTime}</span>
                            </div>
                            <h1 className="h0 text-[48px] md:text-[80px] lg:text-[100px] leading-[0.9] tracking-tight font-black uppercase italic">
                                {post.title}
                            </h1>
                        </div>

                        <div className="flex items-center gap-8 border-y border-black/10 py-10">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-[1.2rem] bg-black/5 overflow-hidden border border-black/5">
                                    <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="Beyond Bechani" width={60} height={60} className="grayscale object-cover h-full w-full" unoptimized />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="label-mono text-black text-[14px] font-black uppercase tracking-tight">Beyond Bechani</span>
                                    <span className="label-mono text-black/30 text-[11px] font-bold uppercase tracking-widest">Lead Product Designer</span>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <button className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all text-black/40 group shadow-xl hover:shadow-black/20">
                                    <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured image */}
            <section className="px-6 md:px-10 mb-32">
                <div className="max-w-[1240px] mx-auto">
                    <motion.div
                        className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden bg-[#F5F5F5] border border-black/5"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    </motion.div>
                </div>
            </section>

            {/* Content section */}
            <section className="pb-32 lg:pb-48 px-6 md:px-10">
                <div className="max-w-[800px] mx-auto">
                    <motion.div
                        className="prose prose-xl prose-black"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="body-large text-[24px] md:text-[28px] leading-[1.2] mb-16 font-black uppercase tracking-tight italic">
                            {post.excerpt}
                        </p>
                        <div className="flex flex-col gap-10 text-black/80 body-regular text-[20px] leading-relaxed font-medium">
                            <p>
                                Leading with empathy in the age of AI. Great design isn't just about pixels; it's about people. Technology should serve us, and that mission begins with every decision we make in the lab.
                            </p>
                            <h3 className="h1 md:text-[56px] font-black uppercase tracking-tighter italic mt-12 mb-6 text-black">Art + Human Logic</h3>
                            <p>
                                When human-centred strategy and creativity work in harmony, they create experiences that are not only visually stunning but also deeply impactful. At Uncommon.org and through UX Zimbabwe, we focus on designs that bridge the gap—transforming complex systems into intuitive interactions.
                            </p>
                            <div className="bg-[#F9F9F9] p-12 rounded-[2.5rem] border border-black/5 mt-12 mb-12">
                                <p className="body-large italic font-black uppercase tracking-tight text-center leading-[1.2]">
                                    "Human-centred design ensures your hard work in AI actually reaches and benefits real people."
                                </p>
                            </div>
                            <p>
                                In the following frameworks, we'll explore how to align product strategy with social impact, ensuring every creative choice adds measurable value to the ecosystem.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* More blogs preview */}
            <section className="py-24 lg:py-48 bg-[#F9F9F9] px-6 md:px-10 border-t border-black/5">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                        <div className="flex flex-col gap-4">
                            <p className="label-mono text-black/30 uppercase font-black italic tracking-widest text-[12px]">Continue Reading</p>
                            <h2 className="h1 text-[48px] md:text-[80px] font-black uppercase tracking-tighter italic">More Visions</h2>
                        </div>
                        <Link href="/blog" className="label-mono text-black/40 hover:text-black border-b-2 border-black/10 pb-2 transition-all font-black uppercase tracking-widest">
                            The Lab
                        </Link>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-16"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {relatedPosts.map((related) => (
                            <motion.article
                                key={related.slug}
                                variants={fadeInUp}
                                className="group flex flex-col gap-8"
                            >
                                <Link href={`/blog/${related.slug}`} className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-white border border-black/5">
                                    <Image
                                        src={related.image}
                                        alt={related.title}
                                        fill
                                        className="object-cover group-hover:scale-[1.08] transition-all duration-1000 ease-out"
                                        unoptimized
                                    />
                                </Link>
                                <div className="flex flex-col gap-6 px-4">
                                    <div className="flex justify-between text-black/30 label-mono uppercase font-black italic text-[11px] tracking-widest">
                                        <span>{related.category}</span>
                                        <span>{related.date}</span>
                                    </div>
                                    <h3 className="h1 text-[36px] md:text-[44px] leading-tight font-black uppercase tracking-tight group-hover:text-black/60 transition-colors">{related.title}</h3>
                                    <Link href={`/blog/${related.slug}`} className="inline-flex items-center gap-3 label-mono text-black/50 group-hover:text-black transition-colors uppercase font-black text-[14px]">
                                        READ POST <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
