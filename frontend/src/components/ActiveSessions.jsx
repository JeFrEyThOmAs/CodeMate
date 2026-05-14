import { Link } from "react-router";
import { ArrowRightIcon, Code2Icon, CrownIcon, UsersIcon, ZapIcon, LoaderIcon, TerminalIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { motion } from "framer-motion";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-2 solid-panel h-full flex flex-col overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgxOHYxOEgxem0xIDE3aDE2VjJIMnoiIGZpbGw9IiMzMjg0ZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] pointer-events-none" />
      <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
        {/* HEADERS SECTION */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-base-300">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <ZapIcon className="size-6 text-primary" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Active Nodes</h2>
          </div>

          <div className="flex items-center gap-2 bg-success/10 text-success border border-success/20 px-4 py-2 rounded-lg font-bold shadow-[0_0_10px_rgba(34,197,94,0.2)]">
            <div className="size-2 bg-success rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <span>{sessions.length} ONLINE</span>
          </div>
        </div>

        {/* LIST SECTION */}
        <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[400px]">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <LoaderIcon className="size-10 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session, i) => (
              <motion.div 
                key={session._id} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="solid-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-base-300 hover:border-primary/50 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {/* LEFT SIDE */}
                <div className="flex items-center gap-5 flex-1 min-w-0 relative z-10">
                  <div className="size-12 rounded-lg bg-base-300 border border-base-100 flex items-center justify-center">
                    <Code2Icon className="size-6 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-lg text-white truncate">{session.problem}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${getDifficultyBadgeClass(session.difficulty)}`}>
                        {session.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-base-content/60 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CrownIcon className="size-4 text-warning" />
                        <span>{session.host?.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <UsersIcon className="size-4 text-accent" />
                        <span>{session.participant ? "2/2" : "1/2"}</span>
                      </div>
                      {session.participant && !isUserInSession(session) ? (
                        <span className="text-[10px] font-bold text-error bg-error/10 border border-error/20 px-2 py-0.5 rounded shadow-[0_0_5px_rgba(239,68,68,0.2)]">SECURED</span>
                      ) : (
                        <span className="text-[10px] font-bold text-success bg-success/10 border border-success/20 px-2 py-0.5 rounded shadow-[0_0_5px_rgba(34,197,94,0.2)]">OPEN</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: ACTIONS */}
                <div className="w-full sm:w-auto relative z-10">
                  {session.participant && !isUserInSession(session) ? (
                    <button className="px-6 py-2.5 bg-base-300 text-base-content/40 rounded-xl font-bold uppercase tracking-widest text-[10px] cursor-not-allowed w-full sm:w-auto border border-base-100 shadow-inner">
                      Node Full
                    </button>
                  ) : (
                    <Link
                      to={`/session/${session._id}`}
                      className="btn-high-vis justify-center w-full sm:w-auto text-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] border border-primary/50 group"
                    >
                      {isUserInSession(session) ? "Re-Enter" : "Connect"}
                      <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <div className="size-20 mb-6 bg-base-300 border border-base-100 rounded-full flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.5)_inset]">
                <TerminalIcon className="size-10 text-base-content/40" />
              </div>
              <p className="text-xl font-black text-white mb-2 tracking-tight">No Active Nodes</p>
              <p className="text-base-content/60 font-medium max-w-sm">
                System idle. Initialize a new session to establish connection.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ActiveSessions;