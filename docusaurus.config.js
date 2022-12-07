// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reveal',
  tagline: 'Embedded Analytics & Business Intelligence Tools',
  url: 'https://revealbi.io',
  baseUrl: '/documentation-vnext/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RevealBi', // Usually your GitHub org/user name.
  projectName: 'documentation-vnext', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // locales: ['en', 'ja'],
    // localeConfigs: {
    //   en: {
    //     label: "English",
    //     htmlLang: 'en-US',
    //   },
    //   ja: {
    //     label: "日本語",
    //     htmlLang: 'ja-JP',
    //     path: 'ja'
    //   }
    // },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/RevealBi/documentation-vnext/tree/master/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reveal',
        logo: {
          alt: 'Reveal',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: "docsVersionDropdown",
          //   position: "left",
          // },
          // { 
          //   type: "localeDropdown",
          //   position: "right"
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Web SDK',
                to: 'web',
              },
              {
                label: 'WPF SDK',
                to: 'wpf',
              },
              {
                label: 'DOM',
                href: 'https://github.com/RevealBi/Reveal.Sdk.Dom',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Who are We',
                href: 'https://www.revealbi.io/about-us',
              },
              {
                label: 'Contact Us',
                href: 'https://www.revealbi.io/about-us?#connect',
              },
              {
                label: 'Global Offices',
                href: 'https://www.revealbi.io/about-us?#connect',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Support',
                href: 'https://www.infragistics.com/my-account/submit-support-request/reveal',
              },
              {
                label: 'Glossary',
                href: 'https://www.revealbi.io/glossary',
              },
              {
                label: 'FAQs',
                href: 'https://www.revealbi.io/faq',
              },
              {
                label: 'Blogs',
                href: 'https://www.infragistics.com/community/blogs/tags/Reveal',
              },
              {
                label: 'Forums',
                href: 'https://www.infragistics.com/community/forums/f/reveal',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Infragistics. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "java"],
      },
    }),
};

module.exports = config;
