import { Link } from 'react-router-dom';
import { Info, Zap, Code } from 'lucide-react';

export function Introduction() {
  return (
    <>
      <h1>
        Introduction to <span className="gradient-text">Carbon</span>
      </h1>
      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
        Carbon is a seamless Roblox script synchronization tool based on Silicon
        designed to bridge the gap between your local development environment and
        Roblox Studio without the hassle.
      </p>

      <div className="my-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-4 items-start">
        <div className="text-blue-400 mt-1">
          <Info className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-blue-400 font-bold mb-1">Note</h4>
          <p className="text-sm text-gray-300 m-0">
            Carbon is currently in beta. Please report any issues you encounter on
            our GitHub repository.
          </p>
        </div>
      </div>

      <h2>Why Carbon?</h2>
      <p>
        Developing on Roblox often involves copy-pasting scripts or using clunky
        plugins. Carbon solves this by watching your local files and automatically
        syncing changes to Roblox Studio in real-time. It allows you to use
        professional tools like Zed and Git while working on Roblox projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="p-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="text-blue-400 mb-3">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-white font-bold mb-2 text-lg">Fast Sync</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Simple and fast updates as you save your files. Just one click and
            your changes are synced instantly.
          </p>
        </div>
        <div className="p-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="text-purple-400 mb-3">
            <Code className="w-6 h-6" />
          </div>
          <h3 className="text-white font-bold mb-2 text-lg">IDE Support</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Currently, Carbon only supports Zed offically for the extension.
            However the Python script supports most, if not all text editors.
          </p>
        </div>
      </div>

      <p className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500">
        Next:{' '}
        <Link
          to="/docs/getting-started/installation"
          className="text-blue-400 hover:underline"
        >
          Installation Guide &rarr;
        </Link>
      </p>
    </>
  );
}
