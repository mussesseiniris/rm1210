import type { NextConfig } from "next";


const nextConfig = {
  output: "export",
  basePath: "/rm1210",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/rm1210",
  },
}
export default nextConfig