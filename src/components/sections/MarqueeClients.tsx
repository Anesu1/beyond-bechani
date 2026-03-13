"use client";

import { motion } from "framer-motion";

const clients = [
    "Uncommon.org", "GoLogic", "Revixions", "TravelCred", "UX Zimbabwe",
    "DVT", "Calm Being", "Bridging The Gap", "Byo Tech Hub", "MI5 Group",
];

// Double for seamless loop
const allClients = [...clients, ...clients, ...clients];

export default function MarqueeClients() {
    return (
        <section className="py-24 bg-white border-t border-black/5 overflow-hidden grid-background">
            <div className="max-w-[1440px] mx-auto container-padding mb-12">
                <span className="label-mono text-black/40">06 — Clients</span>
            </div>
            
            {/* Marquee Container */}
            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    className="flex flex-nowrap gap-16 md:gap-24 items-center whitespace-nowrap"
                >
                    {allClients.map((client, i) => (
                        <div key={i} className="flex items-center gap-8 md:gap-12">
                            <span className="body-large font-medium text-black">
                                {client}
                            </span>
                            {/* Dot / Logo alternative */}
                            <div className="w-2 h-2 rounded-full bg-black/10" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
