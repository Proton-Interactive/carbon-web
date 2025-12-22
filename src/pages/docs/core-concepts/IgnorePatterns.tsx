import { Link } from 'react-router-dom';

export function IgnorePatterns() {
  return (
    <>
      <h1>Ignore Patterns</h1>
      <p>
        Configure which files and directories Carbon should ignore.
      </p>
      <p>
        <em>(Documentation coming soon)</em>
      </p>

      <p className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500">
        Next:{' '}
        <Link
          to="/docs/reference/cli-commands"
          className="text-blue-400 hover:underline"
        >
          CLI Commands &rarr;
        </Link>
      </p>
    </>
  );
}
