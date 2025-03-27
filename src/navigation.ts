import {
  getPermalink,
  // getBlogPermalink,
  // getAsset
} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
      //   // links: [
      //   //   {
      //   //     text: 'SaaS',
      //   //     href: getPermalink('/homes/saas'),
      //   //   },
      //   //   {
      //   //     text: 'Startup',
      //   //     href: getPermalink('/homes/startup'),
      //   //   },
      //   //   {
      //   //     text: 'Mobile App',
      //   //     href: getPermalink('/homes/mobile-app'),
      //   //   },
      //   //   {
      //   //     text: 'Personal',
      //   //     href: getPermalink('/homes/personal'),
      //   //   },
      //   // ],
    },
    // {
    //   text: 'About',
    //   links: [
    //     {
    //       text: 'About',
    //       href: getPermalink('/'),
    //     },
    //     {
    //       text: 'Team',
    //       href: getPermalink('/team'),
    //     },
    //     // {
    //     //   text: 'Testimonials',
    //     //   href: getPermalink('/testimonials'),
    //     // },
    //     // {
    //     //   text: 'FAQ',
    //     //   href: getPermalink('/faq'),
    //     // },
    //   ],
    // },
    {
      text: 'Events',
      href: getPermalink('/events'),
      // links: [
      //   {
      //     text: 'She Leads Product Events',
      //     // href: getPermalink('/slp-events'),
      //   },
      //   {
      //     text: 'Events from Friends',
      //     // href: getPermalink('/sponsored-events'),
      //   },
      // ],
    },
    // {
    //   text: 'Pricing',
    //   links: [
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'Pricing Details',
    //       href: getPermalink('/pricing-details'),
    //     },
    //   ],
    // },

    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    //   // links: [
    //   //   {
    //   //     text: 'Blog List',
    //   //     href: getBlogPermalink(),
    //   //   },

    //   //   {
    //   //     text: 'Category Page',
    //   //     href: getPermalink('tutorials', 'category'),
    //   //   },
    //   //   {
    //   //     text: 'Tag Page',
    //   //     href: getPermalink('astro', 'tag'),
    //   //   },
    //   // ],
    // },

    { text: 'Contact', href: getPermalink('/contact') },

    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    {
      text: 'Partners',
      href: getPermalink('/partners'),
      //   // links: [
      //   //   {
      //   //     text: 'What do we do?',
      //   //     href: getPermalink('/about'),
      //   //   },
      //   //   {
      //   //     text: 'Product Management Bootcamp',
      //   //     href: getPermalink('/category/projects-pm-bootcamp'),
      //   //   },
      //   // ],
    },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },

    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  footNote: `

    Made by <a class="text-purple-800 underline dark:text-muted" href="https://annalenabirkner.com/">Alephantom</a> · All rights reserved.
  `,
};
