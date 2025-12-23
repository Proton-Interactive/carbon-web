import { Plug, RefreshCw, Gauge } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/**
 * Per-card variants factory.
 * - visibleY: final y offset (px) when the animation finishes.
 * - hiddenY: starting y offset when entering.
 *
 * This keeps one card slightly lower than the other while Framer Motion
 * manages the transform to avoid conflicts with CSS translate utilities.
 */
const makeItemVariants = (visibleY = 0, hiddenY = 16): Variants => ({
  hidden: { opacity: 0, y: hiddenY },
  visible: { opacity: 1, y: visibleY },
});

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
            Carbon is a seamless Roblox script synchronization tool built with Rust 
            - that bridges the gap between your IDE and Roblox Studio.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 shrink-0">
                <Plug className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  1. Install Plugin
                </h3>
                <p className="text-sm mt-1">
                  Get the Carbon plugin for Roblox Studio and run the CLI in
                  your terminal or your favorite IDE.
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
                  Open your project, click the Connect button in your plugins
                  bar, run the import command with the CLI, and you're done.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards — keep a subtle off-center effect while avoiding transform conflicts */}
        <motion.div
          className="grid grid-cols-2 gap-4 mt-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Discord Community — slightly lower (off-center) and uses Discord logo */}
          <motion.a
            href="https://discord.gg/EKPd3YscEs"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-lg p-6 flex flex-col h-full group"
            variants={makeItemVariants(8, 20)}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            tabIndex={0}
            aria-label="Join the Discord community"
          >
            <img
              src="https://cdn.simpleicons.org/discord/5865F2"
              alt="Discord logo"
              className="w-10 h-10 mb-4"
            />
            <h3 className="text-lg font-bold text-white mb-2">
              Discord Community
            </h3>
            <p className="text-sm text-gray-400">
              Join our Discord server for support, community discussion, and
              update announcements.
            </p>
          </motion.a>

          {/* Blazing Fast — settles at y = 0 */}
          <motion.div
            className="glass-panel rounded-lg p-6 flex flex-col h-full"
            variants={makeItemVariants(0, 20)}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            tabIndex={0}
            aria-label="Blazing Fast"
          >
            <Gauge className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">
              Star on GitHub!
            </h3>
            <p className="text-sm text-gray-400">
              Starring us on GitHub is a great way for more people to discover
              and use Carbon.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
