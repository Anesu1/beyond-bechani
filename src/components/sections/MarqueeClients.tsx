"use client";

const clients = [
    "Uncommon.org", "GoLogic", "Revixions", "TravelCred", "UX Zimbabwe",
    "DVT", "Calm Being", "Bridging The Gap", "Byo Tech Hub", "MI5 Group",
];

// Double for seamless loop
const allClients = [...clients, ...clients];

export default function MarqueeClients() {
    return (
        <section className="py-32 lg:py-40 bg-white border-t border-black/8 overflow-hidden">

            <div className="px-6 md:px-10 max-w-[1440px] mx-auto mb-14">
                <p className="label-mono text-black/35 italic">06 — Network</p>
                <h2 className="h1 uppercase font-black tracking-tight">Ecosystem</h2>
            </div>

            {/* Marquee */}
            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div
                    className="flex shrink-0 items-center gap-16 animate-marquee"
                    aria-hidden="true"
                >
                    {allClients.map((client, i) => (
                        <span key={i} className="h2 font-black text-black/5 uppercase whitespace-nowrap select-none hover:text-black/60 transition-colors duration-500 cursor-default tracking-tighter italic text-[80px] md:text-[120px]">
                            {client}
                        </span>
                    ))}
                </div>
                {/* Duplicate for perfect seamless loop */}
                <div
                    className="absolute top-0 left-0 flex shrink-0 items-center gap-16 animate-marquee2"
                    aria-hidden="true"
                >
                    {allClients.map((client, i) => (
                        <span key={`b-${i}`} className="h2 font-black text-black/5 uppercase whitespace-nowrap select-none hover:text-black/60 transition-colors duration-500 cursor-default tracking-tighter italic text-[80px] md:text-[120px]">
                            {client}
                        </span>
                    ))}
                </div>
            </div>

        </section>
    );
}
