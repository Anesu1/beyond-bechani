"use client";

import { motion, Variants } from "framer-motion";
import { Palette, MonitorSmartphone, Sparkles, PenTool, LucideIcon, GraduationCap, Users } from "lucide-react";

const services: { id: string; name: string; Icon: LucideIcon }[] = [
    { id: "01", name: "Product Design", Icon: MonitorSmartphone },
    { id: "02", name: "UX Strategy", Icon: PenTool },
    { id: "03", name: "Design Education", Icon: GraduationCap },
    { id: "04", name: "Community Building", Icon: Users },
];

export default function FocusServices() {
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    };

    const item: Variants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    return (
        <section id="services" className="py-32 lg:py-40 px-6 md:px-10 bg-[#F9F9F9]">
            <div className="max-w-[1440px] mx-auto">
                <motion.div
                    className="mb-16 md:mb-24"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="label-mono mb-4 text-black/40 italic">03 — Focus</p>
                    <h2 className="h2 max-w-2xl uppercase font-black tracking-tight leading-[1] text-black">
                        Bridging the gap between humans and technology through design.
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col border-t border-black/10"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map(({ id, name, Icon }) => (
                        <motion.div
                            key={id}
                            variants={item}
                            className="py-8 md:py-12 border-b border-black/10 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer hover:bg-black/[0.02] transition-colors -mx-4 px-4 rounded-xl"
                        >
                            <div className="flex items-center gap-8 md:gap-16">
                                <span className="label-mono text-black/20 tabular-nums font-black italic text-[24px]">{id}</span>
                                <h3 className="h1 md:text-[56px] font-black group-hover:translate-x-3 transition-transform duration-500 ease-out uppercase tracking-tighter">
                                    {name}
                                </h3>
                            </div>

                            <div className="w-16 h-16 md:w-24 md:h-24 rounded-[2rem] bg-white border border-black/10 flex items-center justify-center shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 ease-out">
                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-black/20 group-hover:text-black transition-colors" strokeWidth={1} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
