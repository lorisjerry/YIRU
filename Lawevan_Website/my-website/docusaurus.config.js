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
        src: 'img/logo_L.svg',//Lawevan logo
      },
      links: [
        {to: 'blog', label: 'New_Arrivals', position: 'right'},       
        {to: 'docs/Mens', activeBasePath: 'docs', label: 'Men',position: 'right'},
        {to: 'docs/WOMENS', label: 'Women', activeBasePath: 'docs',position: 'right'},
        {to: 'docs/', label: 'Kids', activeBasePath: 'docs',position: 'right'},
        {to: 'docs/Baby', label: 'Baby', activeBasePath: 'docs',position: 'right'},
        {to: 'docs/Weddings', label: 'Weddings', activeBasePath: 'docs',position: 'right'},
        {to: 'docs/Home',activeBasePath: 'docs',label: 'Home',position:'right'}, 
        {to: 'docs/doc1',activeBasePath: 'docs',label: 'About_us',position:'right'}, 
        
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
