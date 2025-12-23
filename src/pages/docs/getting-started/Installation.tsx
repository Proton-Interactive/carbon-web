import { Link } from "react-router-dom";
import { useState } from "react";

export function Installation() {
  const [tab, setTab] = useState<"aftman" | "github">("aftman");
  const [pluginTab, setPluginTab] = useState<"creator" | "cli" | "github">(
    "creator",
  );
  return (
    <>
      <h1>Installation</h1>
      <p>
        To get started with Carbon, you'll need to install the CLI application
        and the Roblox Studio plugin.
      </p>

      <div className="mb-8">
        <p>
          Currently, Carbon is not on the official Zed extension store. However,
          you can build it from source on the GitHub repository.
        </p>
      </div>
      <h3>CLI Application</h3>

      <div className="mb-4">
        <div className="inline-flex rounded-lg bg-white/3 p-1">
          <button
            onClick={() => setTab("aftman")}
            className={`px-4 py-2 rounded-md ${tab === "aftman" ? "bg-white/5 text-white" : "text-gray-300"}`}
          >
            Aftman
          </button>
          <button
            onClick={() => setTab("github")}
            className={`px-4 py-2 rounded-md ${tab === "github" ? "bg-white/5 text-white" : "text-gray-300"}`}
          >
            GitHub Releases
          </button>
        </div>
      </div>

      {tab === "aftman" ? (
        <div>
          <p className="mb-2">Install via Aftman:</p>
          <pre className="bg-white/5 p-4 rounded">
            <code>aftman add Proton-Interactive/carbon-cli</code>
          </pre>
          <p className="text-sm text-gray-400 mt-2">
            Aftman will fetch and install the latest published version. Verify
            with <code>carbon --version</code>.
          </p>
        </div>
      ) : (
        <div>
          <p className="mb-2">Install from GitHub releases:</p>
          <p className="mb-2">
            Download the binary for your platform from the releases page and
            follow the included instructions.
          </p>
          <p>
            <a
              href="https://github.com/Proton-Interactive/carbon-cli/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://github.com/Proton-Interactive/carbon-cli/releases/latest
            </a>
          </p>
          <pre className="bg-white/5 p-4 rounded">
            <code>
              .\carbon.exe
            </code>
          </pre>
        </div>
      )}

      <h3>Studio Plugin</h3>

      <div className="mb-4">
        <div className="inline-flex rounded-lg bg-white/3 p-1">
          <button
            onClick={() => setPluginTab("creator")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              pluginTab === "creator"
                ? "bg-white/5 text-white"
                : "text-gray-300 hover:bg-white/5"
            }`}
            role="tab"
            aria-selected={pluginTab === "creator"}
          >
            Creator Store
          </button>

          <button
            onClick={() => setPluginTab("cli")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              pluginTab === "cli"
                ? "bg-white/5 text-white"
                : "text-gray-300 hover:bg-white/5"
            }`}
            role="tab"
            aria-selected={pluginTab === "cli"}
          >
            Carbon CLI
          </button>

          <button
            onClick={() => setPluginTab("github")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              pluginTab === "github"
                ? "bg-white/5 text-white"
                : "text-gray-300 hover:bg-white/5"
            }`}
            role="tab"
            aria-selected={pluginTab === "github"}
          >
            GitHub Releases
          </button>
        </div>
      </div>

      <div className="not-prose">
        {pluginTab === "creator" ? (
          <div className="p-6 bg-white/5 border border-white/5 rounded-lg">
            <h4 className="text-lg font-bold text-white">
              Install from Creator Store
            </h4>
            <p className="text-sm text-gray-300 mt-3 mb-2">
              Install directly from the Creator Store:
            </p>
            <p>
              <a
                href="https://create.roblox.com/store/asset/130303466729127"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Carbon Plugin — Creator Store
              </a>
            </p>
            <p className="text-sm text-gray-400 mt-3">
              This is the simplest method and is recommended for most users.
            </p>
          </div>
        ) : pluginTab === "cli" ? (
          <div className="p-6 bg-white/5 border border-white/5 rounded-lg">
            <h4 className="text-lg font-bold text-white">
              Install with Carbon CLI
            </h4>
            <p className="text-sm text-gray-300 mt-3 mb-2">
              Use the CLI to install the plugin automatically:
            </p>
            <pre className="bg-black/10 p-3 rounded text-sm overflow-x-auto">
              carbon install plugin
            </pre>
            <p className="text-sm text-gray-400 mt-3">
              Note: Some third-party bootstrappers (e.g., Bloxstrap, Plexity)
              may interfere with the installer. If that occurs, install from the
              Creator Store or use the manual release asset instructions in the third tab.
            </p>
          </div>
        ) : (
          <div className="p-6 bg-white/5 border border-white/5 rounded-lg">
            <h4 className="text-lg font-bold text-white">
              Install from GitHub Releases
            </h4>
            <p className="text-sm text-gray-300 mt-3 mb-2">
              Download the plugin asset for your platform from the releases page
              and follow the included manual installation steps.
            </p>
            <p>
              <a
                href="https://github.com/Proton-Interactive/carbon-cli/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://github.com/Proton-Interactive/carbon-plugin/releases/latest
              </a>
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Manual installation is useful for custom setups or if the
              automatic installer is incompatible with your environment.
            </p>
          </div>
        )}
      </div>

      <p className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500">
        Next:{" "}
        <Link
          to="/docs/getting-started/configuration"
          className="text-blue-400 hover:underline"
        >
          Configuration &rarr;
        </Link>
      </p>
    </>
  );
}
