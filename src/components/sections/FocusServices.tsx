"use client";

import { motion, Variants } from "framer-motion";
import { MonitorSmartphone, PenTool, GraduationCap, Users } from "lucide-react";

const services = [
    { 
        id: "01", 
        name: "Product Design", 
        Icon: MonitorSmartphone,
        description: "Creating digital products that are functional, intuitive, and human-centred."
    },
    { 
        id: "02", 
        name: "UX Strategy", 
        Icon: PenTool,
        description: "Transforming complex systems into frictionless user experiences."
    },
    { 
        id: "03", 
        name: "Design Education", 
        Icon: GraduationCap,
        description: "Empowering the next generation of designers through mentorship."
    },
    { 
        id: "04", 
        name: "Community", 
        Icon: Users,
        description: "Building the design ecosystem through UX Zimbabwe and beyond."
    },
];

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

export default function FocusServices() {
    return (
        <section id="services" className="section-padding bg-white grid-background">
            <div className="max-w-[1440px] mx-auto container-padding">
                
                <div className="mb-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        <motion.span variants={revealVariants} className="label-mono text-black/40">
                            03 — Focus
                        </motion.span>
                        <div className="overflow-hidden">
                            <motion.h2 variants={revealVariants} className="h-section text-black max-w-[600px]">
                                Bridging the gap through design
                            </motion.h2>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1] as any }}
                            className="p-10 rounded-[32px] bg-black/[0.02] border border-black/5 hover:bg-black/[0.04] transition-colors"
                        >
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <service.Icon className="w-6 h-6 text-black" strokeWidth={1.5} />
                            </div>
                            <h3 className="h-card text-black mb-4">{service.name}</h3>
                            <p className="body-regular text-black/50">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

