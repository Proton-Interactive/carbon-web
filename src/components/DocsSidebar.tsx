import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SidebarLinkProps {
  to: string;
  children: React.ReactNode;
}

function SidebarLink({ to, children }: SidebarLinkProps) {
  return (
    <motion.li
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          clsx(
            "block transition-colors pl-3 border-l-2",
            isActive
              ? "text-blue-400 font-medium border-blue-400"
              : "text-gray-400 hover:text-white border-transparent hover:border-gray-600",
          )
        }
      >
        {children}
      </NavLink>
    </motion.li>
  );
}

export function DocsSidebar() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-24 glass-panel rounded-xl p-6">
        <nav>
          <div className="mb-6">
            <h3 className="font-bold text-white mb-3 uppercase text-xs tracking-wider text-gray-400">
              Getting Started
            </h3>
            <ul className="space-y-2">
              <SidebarLink to="/docs/getting-started/introduction">
                Introduction
              </SidebarLink>
              <SidebarLink to="/docs/getting-started/installation">
                Installation
              </SidebarLink>
              <SidebarLink to="/docs/getting-started/configuration">
                Configuration
              </SidebarLink>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-white mb-3 uppercase text-xs tracking-wider text-gray-400">
              Core Concepts
            </h3>
            <ul className="space-y-2">
              <SidebarLink to="/docs/core-concepts/file-structure">
                File Structure
              </SidebarLink>
              <SidebarLink to="/docs/core-concepts/syncing">
                Syncing
              </SidebarLink>
              <SidebarLink to="/docs/core-concepts/ignore-patterns">
                Ignore Patterns
              </SidebarLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3 uppercase text-xs tracking-wider text-gray-400">
              Reference
            </h3>
            <ul className="space-y-2">
              <SidebarLink to="/docs/reference/cli-commands">
                CLI Commands
              </SidebarLink>
              <SidebarLink to="/docs/changelog">Changelog</SidebarLink>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
