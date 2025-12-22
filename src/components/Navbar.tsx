import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#0f1115]/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <MotionLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-tight">
            Carbon
          </span>
        </MotionLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <motion.a
            href="https://github.com/Proton-Interactive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" /> View on GitHub
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
