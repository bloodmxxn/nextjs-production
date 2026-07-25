import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "X-Forwarded-Host", value: "repoti.ir" }],
      },
    ];
  },
};

export default nextConfig;
