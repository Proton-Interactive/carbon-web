import { Link } from "react-router-dom";

export function CliCommands() {
  return (
    <>
      <h1>CLI Commands</h1>
      <p>Reference for the Carbon command line interface.</p>
      <p>
        <em>(Documentation coming soon)</em>
      </p>

      <p className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500">
        Next:{" "}
        <Link to="/docs/changelog" className="text-blue-400 hover:underline">
          Changelog &rarr;
        </Link>
      </p>
    </>
  );
}
