import { Link } from 'react-router-dom';

export function Syncing() {
  return (
    <>
      <h1>Syncing</h1>
      <p>
        Details on how the two-way sync works between your file system and Roblox
        Studio.
      </p>
      <p>
        <em>(Documentation coming soon)</em>
      </p>

      <p className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500">
        Next:{' '}
        <Link
          to="/docs/core-concepts/ignore-patterns"
          className="text-blue-400 hover:underline"
        >
          Ignore Patterns &rarr;
        </Link>
      </p>
    </>
  );
}
