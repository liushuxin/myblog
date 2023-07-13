// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "新之所向",
  tagline: "Stay hungry, stay foolish",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "shuxinliu", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },

        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "js-docs",
        path: "js-docs",
        routeBasePath: "js-docs",
        sidebarPath: require.resolve("./sidebarsReact.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "css-docs",
        path: "css-docs",
        routeBasePath: "css-docs",
        sidebarPath: require.resolve("./sidebarsReact.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "build-tools",
        path: "build-tools",
        routeBasePath: "build-tools",
        sidebarPath: require.resolve("./sidebarsReact.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "data-structure",
        path: "data-structure",
        routeBasePath: "data-structure",
        sidebarPath: require.resolve("./sidebarsReact.js"),
        // ... other options
      },
    ],

    [
      "@docusaurus/plugin-content-docs",
      {
        id: "reading",
        path: "reading",
        routeBasePath: "reading",
        sidebarPath: require.resolve("./sidebarsReact.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "English",
        path: "English",
        routeBasePath: "English",
        sidebarPath: require.resolve("./sidebarsReact.js"),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "shuxinliu",
        logo: {
          alt: "shuxinliu",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "JavaScript基础",
          },
          { to: "/js-docs/index", label: "JS 框架", position: "left" },
          { to: "/css-docs/index", label: "CSS", position: "left" },
          {
            to: "/build-tools/webpack/index",
            label: "构建工具",
            position: "left",
          },
          {
            to: "/data-structure/index",
            label: "算法与数据结构",
            position: "left",
          },

          { to: "/reading/index", label: "阅读", position: "left" },
          { to: "/English/index", label: "英语学习", position: "left" },

          { to: "/blog", label: "博客", position: "left" },

          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "My Github",
                href: "https://github.com/liushuxin",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/liushuxin",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
