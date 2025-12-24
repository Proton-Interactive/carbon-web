import { Link } from "react-router-dom";

type Release = {
  id: string;
  version: string;
  date?: string;
  summary: string;
  changes: string[];
  githubTag?: string;
};

const releases: Release[] = [
  {
    id: "unreleased",
    version: "Unreleased",
    date: "",
    summary: "Work in progress — items planned for upcoming releases.",
    changes: [
      "VSC and Zed Extensions",
      "Linux and MacOS support",
      "Roblox Plugin made in roblox-ts?",
      "Add roblox-ts compiling and exporting support within the CLI?"
    ],
  },
  {
    id: "2.0.1",
    version: "v2.0.1",
    date: "2025-12-22",
    summary:
      "First major release with performance and reliability",
    changes: [
      "Rewrote codebase in Rust from Python",
      "Transformed the server to a CLI tool for easier integration between different editors and IDEs.",
      "New plugin made by me instead of using Silicon's",
    ],
    githubTag: "v2.0.1",
  },
];

export function Changelog() {
  const hasReleases = releases && releases.length > 0;

  return (
    <>
      <h1>Changelog</h1>

      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
        This page documents notable changes, releases, and fixes for Carbon. For
        full release notes and binary downloads, see our{" "}
        <a
          href="https://github.com/Proton-Interactive/carbon-cli/releases"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub releases
        </a>
        .
      </p>

      {/* Cards container (not-prose so Tailwind prose mixins don't interfere) */}
      <div className="not-prose">
        {!hasReleases ? (
          <div className="min-h-[40vh] flex items-center justify-center">
            <div className="glass-panel rounded-xl p-8 w-full">
              <p className="text-lg text-gray-400 text-center m-0">
                Nothing to show right now
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {releases.map((r) => (
              <article
                key={r.id}
                className="p-8 bg-white/5 border border-white/5 rounded-lg w-full"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {r.version}
                      {r.date ? (
                        <span className="text-sm text-gray-400 ml-3">
                          — {r.date}
                        </span>
                      ) : null}
                    </h3>
                    <p className="text-sm text-gray-400 mt-3 mb-4">
                      {r.summary}
                    </p>
                  </div>

                  {r.githubTag ? (
                    <div className="flex-shrink-0">
                      <a
                        href={`https://github.com/Proton-Interactive/carbon-cli/releases/tag/${r.githubTag}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 rounded-md text-sm text-blue-400 hover:underline border border-transparent hover:border-white/10"
                      >
                        View release
                      </a>
                    </div>
                  ) : null}
                </div>

                <ul className="list-disc pl-6 mt-4 text-sm text-gray-300">
                  {r.changes.map((c, i) => (
                    <li key={i} className="mb-1">
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>

      <p className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500">
        Back:{" "}
        <Link
          to="/docs/getting-started/introduction"
          className="text-blue-400 hover:underline"
        >
          Getting Started &rarr;
        </Link>
      </p>
    </>
  );
}

export default Changelog;
