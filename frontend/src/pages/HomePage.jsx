import { SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  Code2Icon,
  HexagonIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function HomePage() {
  return (
    <div className="min-h-screen bg-base-100 selection:bg-primary/30 overflow-hidden">
      {/* NAVBAR */}
      <nav className="bg-base-200/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-3 group">
            <div className="size-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <HexagonIcon className="size-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white group-hover:text-primary transition-colors">CodeX</span>
          </Link>

          <SignInButton mode="modal">
            <button className="btn-high-vis text-sm py-2 px-5 group shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-primary/50 flex items-center gap-2">
              Authenticate
              <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* Background futuristic glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-sm shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              <ZapIcon className="size-4" />
              Real-time Code Execution engine upgraded
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white tracking-tighter">
              Initialize Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Technical Interview
              </span>
            </h1>

            <p className="text-xl text-base-content/80 leading-relaxed font-medium">
              CodeX is the ultimate collaborative platform. Pair program in real-time, share your screen, and communicate via HD video to dominate your coding interviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <SignInButton mode="modal">
                <button className="btn-high-vis text-lg justify-center w-full sm:w-auto shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-primary/50 group flex items-center gap-2">
                  Initialize Node
                  <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </SignInButton>
              <button className="btn-secondary-vis text-lg justify-center w-full sm:w-auto border border-base-300 hover:border-base-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2">
                <VideoIcon className="size-5" />
                Establish Feed
              </button>
            </div>

            <div className="flex items-center gap-6 pt-8 text-sm font-bold text-base-content/60 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-primary" />
                Open Access
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-secondary" />
                Multi-Language Support
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ perspective: "1000px" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-30 rounded-2xl -z-10" />
            <div className="solid-panel overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
              {/* Futuristic Image */}
              <img 
                src="/hero2.jpeg" 
                alt="CodeX Interface" 
                className="w-full h-auto object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="bg-base-200 border-t border-base-300 py-32 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgxOHYxOEgxem0xIDE3aDE2VjJIMnoiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            {...fadeIn}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Performance</span>
            </h2>
            <p className="text-xl text-base-content/70 font-medium">
              We stripped away the clutter to give you exactly what you need to succeed in technical evaluations. Zero latency, pure execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="solid-card p-10 border-primary/20 hover:border-primary/50 relative overflow-hidden group" {...fadeIn} transition={{ delay: 0.1 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="size-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <VideoIcon className="size-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">HD Video Calling</h3>
              <p className="text-base-content/70 font-medium leading-relaxed">
                Low latency, crystal clear video integration built directly into the editor interface so you never have to switch tabs.
              </p>
            </motion.div>

            <motion.div className="solid-card p-10 border-secondary/20 hover:border-secondary/50 relative overflow-hidden group" {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="size-16 rounded-2xl bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                <Code2Icon className="size-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Live Compilation</h3>
              <p className="text-base-content/70 font-medium leading-relaxed">
                Run your code instantly with our secure, sandboxed execution engine. Support for JavaScript, Python, and Java.
              </p>
            </motion.div>

            <motion.div className="solid-card p-10 border-accent/20 hover:border-accent/50 relative overflow-hidden group" {...fadeIn} transition={{ delay: 0.3 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="size-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <UsersIcon className="size-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Real-time Sync</h3>
              <p className="text-base-content/70 font-medium leading-relaxed">
                Every keystroke, cursor movement, and code execution is perfectly synchronized across all participants instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
