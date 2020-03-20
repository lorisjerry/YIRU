module.exports = {
  title: 'Lawevan',
  tagline: 'Reject Mediocrity and Fight for Greatness',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Lawevan',
      logo: {
        alt: 'Lawevan', //lawevan logo
        src: 'img/logo.svg',//Lawevan logo
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: '_Studio',
          position: 'Left',
        },        
        {to: 'docs/Mens', activeBasePath: 'docs', label: 'Mens',position: 'left'},
        {to: 'docs/WOMENS', label: 'WOMENS', activeBasePath: 'docs',position: 'left'},
        {to: 'docs/GLOVE', label: 'GLOVE', activeBasePath: 'docs',position: 'left'},
        {to: 'docs/SUSPENDERS', label: 'SUSPENDERS', activeBasePath: 'docs',position: 'left'},
        {to: 'docs/holiday_gift', label: 'Holiday_Gift', activeBasePath: 'docs',position: 'left'},
        {to: 'blog', label: 'New_Arrivals', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
