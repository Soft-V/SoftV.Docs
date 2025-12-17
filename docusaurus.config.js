// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const fs = require('fs');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Soft-V Docs',
  tagline: 'Soft V products documentation / robocadV documentation',
  url: 'https://softv.su',
  baseUrl: '/docshome/',
  organizationName: 'soft-v', // Usually your GitHub org/user name.
  projectName: 'soft-v', // Usually your repo name.
  onBrokenLinks: "ignore",
  onBrokenAnchors: "ignore",
  onBrokenMarkdownLinks: "throw",
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'zh-Hans'],
  },
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/docshome/favicons/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/docshome/favicons/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/docshome/favicons/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/docshome/favicons/favicon.ico",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/docshome/favicons/site.webmanifest",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "mask-icon",
        color: "#ffffff",
        href: "/docshome/favicons/safari-pinned-tab.svg",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#ffffff",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "msapplication-config",
        content: "/docshome/favicons/browserconfig.xml",
      },
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Soft-V/SoftV.Docs/tree/main',
          editLocalizedFiles: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: "latest",
              banner: "none"
            }
          }
        },
        
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ],
      
        },
      }),
    ],
  ],
  plugins: [
    require('./plugins/tailwind-plugin.cjs'),
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      "@gracefullight/docusaurus-plugin-microsoft-clarity",
      { projectId: "hqhy3ac3l1" },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(196, 196, 196)',
          dark: 'rgb(22, 28, 45)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          margin: 50,
        }
      },
      navbar: {
        title: 'Soft-V',
        logo: {
          alt: 'Soft-V Logo',
          src: 'img/purple-border-gradient-icon.png',
          srcDark: "img/white-border-gradient-icon.png"
        },
        items: [
          {
            label: 'Documentation',
            to: '/docs/welcome'
          },
          {
            label: 'Support',
            to: 'https://t.me/SoftVsupport_bot',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/get-started/test-drive/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/avaloniaui',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/SoftVsupport_bot',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/avaloniaui',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://avaloniaui.net/Blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/avaloniaui/avalonia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LLC Soft V`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'java', 'python'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'V9UF6750GH',
        // Public API key: it is safe to commit it
        apiKey: '028e3dad834905a2a2c2a7ad9da9e666',
        indexName: 'avaloniaui_docs',
      },
    }),
};

module.exports = config;
