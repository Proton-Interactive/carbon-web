import { Link } from "react-router-dom";

export function Installation() {
  return (
    <>
      <h1>Installation</h1>
      <p>
        To get started with Carbon, you'll need to install the Zed extension and
        the Roblox Studio plugin.
      </p>

      <div className="mb-8">
        <p>
          Currently, Carbon is not on the official Zed extension store. However,
          you can build it from source on the GitHub repository.
        </p>
      </div>

      <h2>Connect Studio</h2>
      <p>
        Open Roblox Studio, install the{" "}
        <a
          href="https://create.roblox.com/store/asset/130303466729127"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Silicon plugin
        </a>
        , and click "Export". Your scripts will start syncing immediately.
      </p>

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
