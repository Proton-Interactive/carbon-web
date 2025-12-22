import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SnowBackground } from "./components/SnowBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProtonRepos } from "./components/ProtonRepos";
import { Footer } from "./components/Footer";
import { DocsLayout } from "./layouts/DocsLayout";
import { Introduction } from "./pages/docs/getting-started/Introduction";
import { Installation } from "./pages/docs/getting-started/Installation";
import { Configuration } from "./pages/docs/getting-started/Configuration";
import { FileStructure } from "./pages/docs/core-concepts/FileStructure";
import { Syncing } from "./pages/docs/core-concepts/Syncing";
import { IgnorePatterns } from "./pages/docs/core-concepts/IgnorePatterns";
import { CliCommands } from "./pages/docs/reference/CliCommands";
import { PluginApi } from "./pages/docs/reference/PluginApi";

function LandingPage() {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProtonRepos />
        <Features />
      </main>
      <Footer />
    </motion.div>
  );
}

function AnimatedDocsLayout() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <DocsLayout />
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const pageKey = location.pathname.startsWith("/docs") ? "docs" : "home";

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pageKey}>
        <Route path="/" element={<LandingPage />} />

        {/* Docs Routes */}
        <Route path="/docs" element={<AnimatedDocsLayout />}>
          <Route
            index
            element={<Navigate to="getting-started/introduction" replace />}
          />

          <Route path="getting-started">
            <Route path="introduction" element={<Introduction />} />
            <Route path="installation" element={<Installation />} />
            <Route path="configuration" element={<Configuration />} />
          </Route>

          <Route path="core-concepts">
            <Route path="file-structure" element={<FileStructure />} />
            <Route path="syncing" element={<Syncing />} />
            <Route path="ignore-patterns" element={<IgnorePatterns />} />
          </Route>

          <Route path="reference">
            <Route path="cli-commands" element={<CliCommands />} />
            <Route path="plugin-api" element={<PluginApi />} />
          </Route>
        </Route>

        {/* Redirect legacy docs URLs or 404s */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SnowBackground />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
