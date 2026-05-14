import { Code2Icon, ClockIcon, UsersIcon, TrophyIcon, LoaderIcon, DatabaseIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";

function RecentSessions({ sessions, isLoading }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="solid-panel mt-8 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgxOHYxOEgxem0xIDE3aDE2VjJIMnoiIGZpbGw9IiMzMjg0ZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] pointer-events-none" />
      <div className="p-6 md:p-8 relative z-10">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-base-300">
          <div className="size-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <DatabaseIcon className="size-6 text-secondary" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Execution History</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-20">
              <LoaderIcon className="size-10 animate-spin text-secondary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session, i) => (
              <motion.div 
                key={session._id} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="solid-card p-5 relative overflow-hidden group border-base-300 hover:border-secondary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {session.status === "active" && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="px-2 py-1 bg-success/10 border border-success/20 text-success text-[10px] font-bold rounded flex items-center gap-1.5 shadow-[0_0_5px_rgba(34,197,94,0.2)]">
                      <div className="size-1.5 bg-success rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                      ACTIVE
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="size-10 rounded-lg bg-base-300 border border-base-100 flex items-center justify-center">
                    <Code2Icon className="size-5 text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white mb-1 truncate">{session.problem}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${getDifficultyBadgeClass(session.difficulty)}`}>
                      {session.difficulty}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-sm font-medium text-base-content/60 mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="size-4" />
                    <span>
                      {(() => {
                        const date = new Date(session.createdAt);
                        return isNaN(date.getTime()) ? "Unknown" : formatDistanceToNow(date, { addSuffix: true });
                      })()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UsersIcon className="size-4" />
                    <span>{session.participant ? "2 nodes" : "1 node"}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-base-300 relative z-10">
                  <span className="text-[10px] font-bold tracking-wider text-base-content/40 uppercase">
                    Status Check
                  </span>
                  <span className="text-xs font-mono font-bold text-base-content/70">
                    {new Date(session.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center">
              <div className="size-20 mb-6 bg-base-300 border border-base-100 rounded-full flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.5)_inset]">
                <TrophyIcon className="size-10 text-base-content/40" />
              </div>
              <p className="text-xl font-black text-white mb-2 tracking-tight">No Records Found</p>
              <p className="text-base-content/60 font-medium">
                Execute your first problem to populate the history logs.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default RecentSessions;