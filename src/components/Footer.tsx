"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
    return (
        <footer id="contact" className="bg-black text-white px-6 md:px-10 pt-32 lg:pt-40 pb-10">
            <div className="max-w-[1440px] mx-auto">

                {/* Top CTA */}
                <motion.div
                    className="mb-24 md:mb-32"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="label-mono text-white/30 mb-6">06 — Connect</p>
                    <h2 className="h0 leading-[0.9] tracking-[-0.04em] max-w-4xl mb-10 uppercase">
                        Let&apos;s build<br />
                        <span className="text-white/20">something human.</span>
                    </h2>
                    <a
                        href="mailto:hello@beyondbechani.com"
                        className="inline-flex items-center gap-3 group border-b border-white/20 pb-1 hover:border-white/60 transition-colors duration-300"
                    >
                        <Mail className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                        <span className="text-2xl md:text-3xl font-light text-white/70 group-hover:text-white transition-colors duration-300 tracking-tight">
                            hello@beyondbechani.com
                        </span>
                        <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                    </a>
                </motion.div>

                {/* Info row */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mb-20 pt-10 border-t border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div>
                        <p className="label-mono text-white/30 mb-4">Location</p>
                        <div className="flex items-start gap-2 text-white/60">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <p className="body-regular leading-relaxed uppercase">
                                Harare, Zimbabwe<br />
                                Africa
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="label-mono text-white/30 mb-4">Availability</p>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <p className="body-regular text-white/60">Open to design strategy — 2025</p>
                        </div>
                    </div>

                    <div>
                        <p className="label-mono text-white/30 mb-4">Design Network</p>
                        <ul className="flex flex-col gap-2">
                            {SOCIAL_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        className="inline-flex items-center gap-1.5 body-regular text-white/50 hover:text-white transition-colors duration-200 group uppercase text-[12px] font-bold"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/8">
                    <p className="label-mono text-white/25">© {new Date().getFullYear()} Beyond Bechani. HUMAN-CENTERED DESIGN.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="label-mono text-white/25 hover:text-white/60 transition-colors uppercase">Strategy</Link>
                        <Link href="#" className="label-mono text-white/25 hover:text-white/60 transition-colors uppercase">Impact</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
