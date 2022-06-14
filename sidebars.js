/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //docsSidebar: [{ type: 'autogenerated', dirName: '.' }]

  // But you can create a sidebar manually

  docsSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction'
    },
    {
      type: 'doc',
      id: 'authentication',
      label: 'Authentication'
    },
    {
      type: 'doc',
      id: 'build-basics',
      label: 'Build Basics'
    },
    {
      type: 'doc',
      id: 'testing',
      label: 'Testing'
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: "App payments",
          collapsed: false,
          items: [
            'guides/app-payments/how-it-works',
            'guides/app-payments/build-on-mobile',
          ]
        }
      ]
    },
    {
      type: 'doc',
      id: 'payment-points',
      label: 'Payment Points'
    },
    {
      type: 'category',
      label: 'Payments and Refunds',
      collapsed: false,
      items: [
        'payments-refunds/overview',
        'payments-refunds/create-payments',
        'payments-refunds/refund-payments',
        'payments-refunds/error-codes',
      ]
    },
    {
      type: 'doc',
      id: 'webhooks',
      label: 'Webhooks'
    },
    {
      type: 'doc',
      id: 'release-notes',
      label: 'Release Notes'
    }
  ],
  reportingSidebar: [
    {
      type: 'doc',
      id: 'reporting/overview',
      label: 'Overview'
    },
    {
      type: 'doc',
      id: 'reporting/payment-points',
      label: 'Retrieve payment points'
    },
    {
      type: 'doc',
      id: 'reporting/transactions',
      label: 'Retrieve transactions'
    },
    {
      type: 'doc',
      id: 'reporting/transfers',
      label: 'Retrieve transfers'
    },
    {
      type: 'doc',
      id: 'reporting/migrate-from-v1v2',
      label: 'Migrate from v1 and v2'
    },
  ]
}
