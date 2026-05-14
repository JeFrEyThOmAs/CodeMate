import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, TerminalSquareIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="bg-base-200 border-b border-primary/20 py-12 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgxOHYxOEgxem0xIDE3aDE2VjJIMnoiIGZpbGw9IiMzMjg0ZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="size-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <TerminalSquareIcon className="size-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{user?.firstName || "Developer"}</span>
                </h1>
                <p className="text-lg text-base-content/60 font-medium mt-1">
                  System initialized. Ready for execution.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={onCreateSession}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all text-lg w-full md:w-auto shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-primary/50 group"
          >
            <ZapIcon className="size-5 text-yellow-300" />
            <span>Initialize Node</span>
            <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;