import { Link } from 'react-router-dom';

export function FileStructure() {
  return (
    <>
      <h1>File Structure</h1>
      <p>Learn how to organize your files for optimal syncing.</p>
      <p>
        <em>(Documentation coming soon)</em>
      </p>

      <p className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500">
        Next:{' '}
        <Link
          to="/docs/core-concepts/syncing"
          className="text-blue-400 hover:underline"
        >
          Syncing &rarr;
        </Link>
      </p>
    </>
  );
}
