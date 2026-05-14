import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router";
import { PROBLEMS } from "../data/problems.js";
import { ChevronRightIcon, Code2Icon, DatabaseIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { motion } from "framer-motion";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);
  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-base-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgxOHYxOEgxem0xIDE3aDE2VjJIMnoiIGZpbGw9IiMzMjg0ZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] pointer-events-none" />
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <DatabaseIcon className="size-8 text-primary" />
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight">Practice Modules</h1>
          </div>
          <p className="text-lg text-base-content/70 ml-[68px] font-medium">
            Sharpen your coding skills with these curated execution scenarios.
          </p>
        </motion.div>

        {/* STATS OVERVIEW */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="solid-panel p-4 mb-12 border-primary/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-base-200 rounded-xl p-6 text-center border border-base-300">
              <div className="text-3xl font-black text-primary mb-1 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">{problems.length}</div>
              <div className="text-xs font-bold text-base-content/50 uppercase tracking-widest">Total Modules</div>
            </div>
            <div className="bg-base-200 rounded-xl p-6 text-center border border-base-300">
              <div className="text-3xl font-black text-success mb-1 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">{easyProblemsCount}</div>
              <div className="text-xs font-bold text-base-content/50 uppercase tracking-widest">Easy</div>
            </div>
            <div className="bg-base-200 rounded-xl p-6 text-center border border-base-300">
              <div className="text-3xl font-black text-warning mb-1 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">{mediumProblemsCount}</div>
              <div className="text-xs font-bold text-base-content/50 uppercase tracking-widest">Medium</div>
            </div>
            <div className="bg-base-200 rounded-xl p-6 text-center border border-base-300">
              <div className="text-3xl font-black text-error mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">{hardProblemsCount}</div>
              <div className="text-xs font-bold text-base-content/50 uppercase tracking-widest">Hard</div>
            </div>
          </div>
        </motion.div>

        {/* PROBLEMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={`/dashboard`}
                className="solid-card p-6 flex flex-col h-full group border-base-300 hover:border-primary/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex items-start justify-between mb-6">
                  <div className="size-12 rounded-xl bg-base-300 flex items-center justify-center border border-base-100 group-hover:border-primary/30 transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)_inset]">
                    <Code2Icon className="size-6 text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getDifficultyBadgeClass(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                
                <div className="relative z-10 flex-1">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-white tracking-tight">{problem.title}</h2>
                  <div className="text-[10px] font-bold text-base-content/50 uppercase tracking-wider mb-4 border-b border-base-300 pb-4">
                    {problem.category}
                  </div>
                  <p className="text-sm text-base-content/70 leading-relaxed font-medium line-clamp-3">
                    {problem.description.text}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-base-300 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-base-content/50">Action Required</span>
                  <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest group-hover:text-primary/80">
                    <span>Initialize</span>
                    <ChevronRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;