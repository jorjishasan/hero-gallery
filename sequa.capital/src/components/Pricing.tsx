import React from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Personal",
    price: "$0",
    description: "For individual tinkerers and privacy enthusiasts.",
    features: ["Local-only processing", "Basic Neural Kernels", "Community Support", "1 Device Sync"],
    button: "GET STARTED",
  },
  {
    name: "Pro",
    price: "$29",
    description: "Advanced intelligence for professionals and researchers.",
    features: ["Accelerated Kernels", "Unlimited Device Sync", "Priority Research Access", "Cloud Relays (Optional)"],
    button: "LAUNCH PRO",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated infrastructure for security-first organizations.",
    features: ["Custom Model Training", "SLA Garuantees", "Dedicated Instance", "Hardware Integration"],
    button: "CONTACT SALES",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 md:px-28 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 animate-fade-rise">
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-6 tracking-tight">Simple Access.</h2>
          <p className="text-white/40 text-lg md:text-xl font-sans max-w-xl mx-auto">
            Choose the plan that fits your intelligence needs. All tiers include our standard privacy protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={tier.name}
              className={`relative p-10 rounded-[40px] border transition-all duration-500 hover:scale-[1.02] animate-fade-rise 
                ${tier.popular ? "bg-white/[0.05] border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]" : "bg-white/[0.02] border-white/10"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute top-6 right-10">
                   <span className="text-[10px] tracking-widest text-white/40 font-bold uppercase">Popular</span>
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-serif text-white mb-2">{tier.name}</h3>
                <p className="text-white/40 text-sm font-sans mb-6">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                   <span className="text-5xl font-serif text-white">{tier.price}</span>
                   {tier.price !== "Custom" && <span className="text-white/20 text-sm font-sans">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-12">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/50 font-sans">
                    <Check size={14} className="text-white/20" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-full text-xs tracking-widest font-bold transition-all 
                  ${tier.popular ? "bg-white text-black hover:bg-white/90" : "bg-white/5 text-white border border-white/10 hover:bg-white/10"}`}
              >
                {tier.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
