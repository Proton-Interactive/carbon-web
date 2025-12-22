import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DocsNavbar } from "../components/DocsNavbar";
import { DocsSidebar } from "../components/DocsSidebar";
import { Footer } from "../components/Footer";

export function DocsLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <DocsNavbar />

      <div className="pt-24 pb-12 max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row gap-8 flex-grow w-full">
        <DocsSidebar />

        <main className="flex-1 min-w-0">
          <div className="glass-panel rounded-xl p-8 md:p-12 prose max-w-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
