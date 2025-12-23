import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="p-4 bg-[#0f1115] md:p-8 lg:p-10 border-t border-white/5">
      <div className="mx-auto max-w-screen-xl text-center">
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <Link
              to="/docs/getting-started/introduction"
              className="mr-4 hover:underline md:mr-6"
            >
              Docs
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/wakefulblock262/carbon/issues"
              className="mr-4 hover:underline md:mr-6"
            >
              Issues
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/EKPd3YscEs"
              className="mr-4 hover:underline md:mr-6"
            >
              Support Server
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025{" "}
          <a href="#" className="hover:underline">
            Proton Interactive
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
