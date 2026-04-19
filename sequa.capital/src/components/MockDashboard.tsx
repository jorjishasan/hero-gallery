import React from "react";
import { 
  LayoutGrid, 
  BarChart3, 
  Wallet, 
  Heart, 
  Trophy, 
  Users, 
  CircleDot, 
  Bell, 
  Calendar,
  Search,
  MessageSquare,
  MoreHorizontal
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Smooth deceleration — reads calmer than default ease (premium UI tooling feel). */
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

// Frost stays on a static sibling. All motion lives under the content tree only.

const twoColumnShell = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      // Sequenced after outer Hero container motion (see Hero.tsx).
      delayChildren: 0.22,
    },
  },
};

const columnEnterLeft = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

const columnEnterRight = {
  hidden: { opacity: 0, x: 14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

const sidebarList = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.034,
      delayChildren: 0.14,
    },
  },
};

const mainInner = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.048,
      delayChildren: 0.1,
    },
  },
};

const headerPair = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.072,
      delayChildren: 0.04,
    },
  },
};

const workspaceReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.05,
    },
  },
};

const revealBrand = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: easeOutExpo },
  },
};

const revealLabel = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOutExpo },
  },
};

const tableHead = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
};

const tableBodyReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
};

const tableRow = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
};

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <motion.div 
    variants={revealItem}
    className={cn(
      "flex items-center gap-3 px-4 py-2 rounded-xl transition-all cursor-pointer group",
      active ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/60 hover:bg-white/5"
    )}
  >
    <Icon className="w-4 h-4" />
    <span className="text-xs font-medium">{label}</span>
  </motion.div>
);

const NavLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.span 
    variants={revealLabel}
    className="px-4 text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2 mt-4 block"
  >
    {children}
  </motion.span>
);

export const MockDashboard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "mock-dashboard-shell relative flex h-full w-full overflow-hidden rounded-3xl shadow-2xl",
        className
      )}
    >
      {/* Single static frosted plane — never animated, own layer for stable sampling */}
      <div
        className="mock-dashboard-frost pointer-events-none absolute inset-0 z-0 rounded-3xl border border-white/5 bg-black/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] rounded-3xl bg-gradient-to-tr from-transparent via-white/[0.025] to-transparent"
        aria-hidden
      />

      <motion.div
        variants={twoColumnShell}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex min-h-0 w-full flex-1"
      >
      <motion.aside
        variants={columnEnterLeft}
        className="flex w-50 flex-col border-r border-white/5 bg-black/5 py-6 md:w-56"
      >
        <motion.div
          variants={revealBrand}
          className="mb-8 flex items-center gap-2 px-6"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <div className="h-3 w-3 rotate-45 rounded-sm border-2 border-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">Finlytic</span>
        </motion.div>

        <motion.div
          variants={sidebarList}
          className="flex min-h-0 flex-1 flex-col gap-1 px-2"
        >
          <NavLabel>General</NavLabel>
          <SidebarItem icon={LayoutGrid} label="Overview" active />
          <SidebarItem icon={BarChart3} label="Reports" />
          <SidebarItem icon={Wallet} label="Wallets Manage" />
          <SidebarItem icon={Heart} label="Favorite Transaction" />

          <NavLabel>Mentors</NavLabel>
          <SidebarItem icon={Trophy} label="Insights" />
          <SidebarItem icon={Users} label="Followed" />

          <NavLabel>Community</NavLabel>
          <SidebarItem icon={CircleDot} label="Visualizations" />
          <SidebarItem icon={Bell} label="Alerts" />
          <SidebarItem icon={Calendar} label="Meetups" />
        </motion.div>
      </motion.aside>

      <motion.main
        variants={columnEnterRight}
        className="flex min-h-0 flex-1 flex-col bg-white/[0.02]"
      >
        <motion.div variants={mainInner} className="flex min-h-0 flex-1 flex-col">
        <motion.header
          variants={headerPair}
          className="flex h-16 items-center justify-between border-b border-white/5 px-8"
        >
          <motion.h2 variants={revealItem} className="text-xl font-semibold">
            Dashboard Overview
          </motion.h2>

          <motion.div variants={revealItem} className="flex items-center gap-6">
            <div className="relative group">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-white/40 transition-colors" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-white/5 border border-white/5 rounded-full py-1.5 pl-10 pr-4 text-xs w-56 focus:outline-none focus:border-white/20 transition-all font-light"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <Bell className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <MessageSquare className="w-4 h-4" />
              </button>
              <div className="w-8 h-8 rounded-full bg-foreground border border-white/20 overflow-hidden ml-2 shadow-inner">
                <img src="/testimonial-avatar.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </motion.header>

        <motion.div variants={workspaceReveal} className="flex flex-1 flex-col p-8">
          <motion.div variants={revealItem} className="mb-8 flex items-center justify-between">
            <h3 className="text-lg font-medium">Recent Activity Logs</h3>
            <div className="flex items-center gap-3">
               <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-white/5 border border-white/5 rounded-lg py-1 pl-9 pr-4 text-[10px] w-48 focus:outline-none"
                />
              </div>
              <button className="p-2 bg-white/5 rounded-lg text-white/40"><MoreHorizontal className="w-4 h-4" /></button>
            </div>
          </motion.div>

          <motion.div variants={revealItem} className="min-w-0">
          <table className="w-full text-left text-[11px]">
            <thead>
              <motion.tr variants={tableHead} className="border-b border-white/5 text-white/20">
                <th className="pb-4 font-normal">Timestamp</th>
                <th className="pb-4 font-normal">Status</th>
                <th className="pb-4 font-normal">Source</th>
                <th className="pb-4 font-normal">Data Type</th>
                <th className="pb-4 font-normal">Notes</th>
              </motion.tr>
            </thead>
            <motion.tbody
              variants={tableBodyReveal}
              className="text-white/70"
            >
              {[
                { time: "2025-05-03 10:24", status: "In Queue", source: "$ 34709", type: "CRM", note: "Validated", statusColor: "text-cyan-400 bg-cyan-400/10" },
                { time: "2025-05-02 18:50", status: "Processed", source: "Traffic Event", type: "Web Analytics", note: "Updated", statusColor: "text-green-400 bg-green-400/10" },
                { time: "2025-05-01 09:30", status: "Paid", source: "Bounce Report", type: "CRM", note: "Format", statusColor: "text-blue-400 bg-blue-400/10" },
                { time: "2025-05-01 09:30", status: "In Queue", source: "Customer Entry", type: "CRM", note: "Updated", statusColor: "text-cyan-400 bg-cyan-400/10" },
                { time: "2025-05-01 09:30", status: "Failed", source: "Bounce Report", type: "Web Analytics", note: "Validated", statusColor: "text-red-400 bg-red-400/10" },
              ].map((row, i) => (
                <motion.tr 
                  key={i} 
                  variants={tableRow}
                  className="group border-b border-white/[0.02] transition-colors hover:bg-white/[0.02]"
                >
                  <td className="py-4 font-medium">{row.time}</td>
                  <td className="py-4">
                    <span className={cn("px-2.5 py-1 rounded-full text-[9px] font-semibold border border-white/5", row.statusColor)}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 font-medium">{row.source}</td>
                  <td className="py-4 text-white/40">{row.type}</td>
                  <td className="py-4 text-white/90">{row.note}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
          </motion.div>
        </motion.div>

        </motion.div>
      </motion.main>
      </motion.div>
    </div>
  );
};

