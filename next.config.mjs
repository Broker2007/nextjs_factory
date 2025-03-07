/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "standalone",
    sassOptions: {
        implementation: 'sass-embedded',
        additionalData: `$var: red;`,
      },
};

export default nextConfig;
