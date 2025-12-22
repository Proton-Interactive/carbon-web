import { Plug, RefreshCw, FileCode, Gauge } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section id="install" className="bg-[#0f1115] py-24">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Zero Config. <br />
            Maximum Efficiency.
          </h2>
          <p className="mb-4">
            I built Carbon because I was tired of the complex Rojo setups for
            simple scripts. Carbon strips away the boilerplate.
          </p>
          <p className="mb-8">
            It's designed specifically for the Zed editor and Roblox Studio. No
            external servers to manage, no complex JSON mapping files.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 shrink-0">
                <Plug className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  1. Install Plugins
                </h3>
                <p className="text-sm mt-1">
                  Get the Carbon plugin for Roblox Studio and the extension for
                  Zed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">2. Run It</h3>
                <p className="text-sm mt-1">
                  Open your project in Roblox Studio and Zed and you're done!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <motion.div
            className="glass-panel rounded-lg p-6 transform translate-y-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FileCode className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Script Sync</h3>
            <p className="text-sm text-gray-400">
              Real-time 2-way synchronization between Zed and Studio.
            </p>
          </motion.div>
          <motion.div
            className="glass-panel rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Gauge className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Blazing Fast</h3>
            <p className="text-sm text-gray-400">
              Built with Rust for minimal latency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
