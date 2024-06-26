import i18nConfig from './next-i18next.config.js';
import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18nConfig.i18n,
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/html/index.html',
      },
      {
        source: '/solutions',
        destination: '/html/solutions.html',
      },
      {
        source: '/price',
        destination: '/html/price.html',
      },
      {
        source: '/company',
        destination: '/html/company.html',
      },
      {
        source: '/resources',
        destination: '/html/resources.html',
      },
      {
        source: '/contact',
        destination: '/html/contact.html',
      },
      {
        source: '/policy',
        destination: '/html/policy.html',
      },
    ];
  },
  reactStrictMode: true,
};

export default withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: 'sampul',
    project: 'javascript-nextjs',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers. (increases server load)
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
