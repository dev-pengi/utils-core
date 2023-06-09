// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Utils Core',
  tagline: 'a powerful JavaScript utility library that provides a wide range of functions to simplify common programming tasks',

  // Set the production url of your site here
  url: 'https://dev-pengi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dev-pengi', // Usually your GitHub org/user name.
  projectName: 'utils-core-docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dev-pengi/utils-core-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'YOUR_INDEX_NAME',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      // Replace with your project's social card
      navbar: {
        title: 'Utils core',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Get started',
          },
          { to: 'https://github.com/dev-pengi/utils-core.js', label: 'Github', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: '/docs/intro',
              },
              {
                label: 'Canvas',
                to: '/docs/category/canvas-utils',
              },
              {
                label: 'Arrays',
                to: '/docs/category/arrays-utils',
              },
              {
                label: 'Math',
                to: '/docs/category/math-utils',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/utilscore/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/package/utils-core.js',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dev-pengi/utils-core.js',
              },
              {
                label: 'Story set',
                href: 'https://storyset.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Utils core, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
