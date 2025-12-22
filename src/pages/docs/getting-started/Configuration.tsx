import { Link } from 'react-router-dom';

export function Configuration() {
  return (
    <>
      <h1>Configuration</h1>
      {/* <p>
        Carbon can be configured using a
        <code>carbon.toml</code> file in your project root.
      </p> */}
      <p>
        <em>(Documentation coming soon)</em>
      </p>

      <p className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500">
        Next:{' '}
        <Link
          to="/docs/core-concepts/file-structure"
          className="text-blue-400 hover:underline"
        >
          File Structure &rarr;
        </Link>
      </p>
    </>
  );
}
