import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile lives in the
  // home directory, which otherwise confuses Turbopack's root inference).
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
