import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export function ProtonRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetching from users endpoint usually works for both users and orgs for public repos
        const response = await fetch(
          "https://api.github.com/users/Proton-Interactive/repos?sort=updated&per_page=6",
        );

        if (!response.ok) {
          // Fallback to orgs endpoint if users fails (e.g. strict org type)
          const orgResponse = await fetch(
            "https://api.github.com/orgs/Proton-Interactive/repos?sort=updated&per_page=6",
          );
          if (!orgResponse.ok) {
            throw new Error("Failed to fetch repositories");
          }
          const orgData = await orgResponse.json();
          setRepos(orgData);
          return;
        }

        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load repositories");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            More from <span className="gradient-text">Proton Interactive</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass-panel h-48 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] rounded-xl animate-pulse bg-white/5"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || repos.length === 0) return null;

  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          More from <span className="gradient-text">Proton Interactive</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-xl block group relative overflow-hidden border border-white/5 hover:border-blue-500/30 transition-colors w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-blue-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors truncate pr-8">
                {repo.name}
              </h3>

              <p className="text-gray-400 text-sm mb-6 line-clamp-2 h-10">
                {repo.description || "No description available."}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      <span>{repo.language}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500/80" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4 text-purple-400/80" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
