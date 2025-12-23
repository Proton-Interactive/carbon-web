import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const MotionLink = motion(Link);

export function Hero() {
  const navigate = useNavigate();
  const handleChangelogClick = (e: any) => {
    // allow modified clicks (ctrl/cmd/middle click) to open in a new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
      return;
    e.preventDefault();
    try {
      navigate("/docs/changelog");
    } catch (err) {
      window.location.href = "/docs/changelog";
    }
  };
  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-[-1]">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <motion.a
          href="https://github.com/Proton-Interactive/carbon-cli/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 transition-colors"
          role="alert"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">
            Carbon v2.0.0 is now available
          </span>
          <ChevronRight className="ml-2 w-5 h-5" />
        </motion.a>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          Sync Roblox Scripts <br />
          <span className="gradient-text">Without the Headache</span>
        </h1>

        <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Forget those complex setups. Carbon connects your editor to Roblox
          Studio almost instantly.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <MotionLink
            to="/docs/getting-started/introduction"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-900 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </MotionLink>

          <MotionLink
            to="/docs/changelog"
            onClick={handleChangelogClick}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white/10 hover:border-blue-500 hover:text-blue-400 focus:ring-4 focus:ring-blue-900 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Changelog
            <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
