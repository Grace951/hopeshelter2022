/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const repo = isGithubActions
  ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  : '';

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  basePath: isGithubActions ? `/${repo}` : '',
};

module.exports = nextConfig;
