const VIDEO_SRC =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const NAV_LINKS = ["Home", "Studio", "About", "Journal", "Reach Us"] as const;

export default function App() {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* ── Fullscreen Video Background ── */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={VIDEO_SRC} type="video/mp4" />
            </video>

            {/* ── Navigation ── */}
            <nav className="relative z-10 grid grid-cols-3 items-center px-8 py-6 max-w-7xl mx-auto">
                {/* Logo */}
                <a
                    href="#"
                    className="text-3xl tracking-tight text-foreground justify-self-start"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                    Drema<sup className="text-xs">®</sup>
                </a>

                {/* Links */}
                <div className="hidden md:flex items-center justify-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className={`text-sm transition-colors ${link === "Home"
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer justify-self-end">
                    Begin Journey
                </button>
            </nav>

            {/* ── Hero Section ── */}
            <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-1 pb-52">
                <h1
                    className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                    Where{" "}
                    <em className="not-italic text-muted-foreground">dreams</em> rise{" "}
                    <em className="not-italic text-muted-foreground">
                        through the silence.
                    </em>
                </h1>

                <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
                    We're designing tools for deep thinkers, bold creators, and quiet
                    rebels. Amid the chaos, we build digital spaces for sharp focus and
                    inspired work.
                </p>

                <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] transition-transform cursor-pointer">
                    Begin Journey
                </button>
            </section>
        </div>
    );
}
