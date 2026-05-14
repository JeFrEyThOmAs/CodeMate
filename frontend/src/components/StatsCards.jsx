import { DatabaseIcon, TerminalIcon } from "lucide-react";
import { motion } from "framer-motion";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Active Count */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="solid-card p-6 flex items-center justify-between relative overflow-hidden group border-primary/20 hover:border-primary/50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="text-sm font-bold text-base-content/60 uppercase tracking-widest mb-1 flex items-center gap-2">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
            Live Nodes
          </div>
          <div className="text-5xl font-black text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">{activeSessionsCount}</div>
        </div>
        <div className="size-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <TerminalIcon className="size-8 text-primary" />
        </div>
      </motion.div>

      {/* Recent Count */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="solid-card p-6 flex items-center justify-between relative overflow-hidden group border-secondary/20 hover:border-secondary/50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="text-sm font-bold text-base-content/60 uppercase tracking-widest mb-1">Execution Log</div>
          <div className="text-5xl font-black text-secondary drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">{recentSessionsCount}</div>
        </div>
        <div className="size-16 bg-secondary/10 border border-secondary/20 rounded-2xl flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          <DatabaseIcon className="size-8 text-secondary" />
        </div>
      </motion.div>
    </div>
  );
}

export default StatsCards;