// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  documentationSidebar: [
    'welcome',
    {
      'type': 'category',
      'label': 'robocadV',
      'link': {
        'type': 'doc',
        'id': 'robocad/index',
      },
      'items': [
        'robocad/get-started',
      ],
    },
    {
      'type': 'category',
      'label': 'SoftHub',
      'link': {
        'type': 'doc',
        'id': 'softhub/index',
      },
      'items': [
        'softhub/get-started',
      ],
    },
    {
      'type': 'category',
      'label': 'Hypocrite',
      'link': {
        'type': 'doc',
        'id': 'hypocrite/index',
      },
      'items': [
        'hypocrite/app-setup',
        'hypocrite/localization',
        'hypocrite/themes',
        'hypocrite/logging',
        'hypocrite/observer',
        'hypocrite/preview-window',
        'hypocrite/fody',
      ],
    },
    // 'faq',
    'community'
  ],
};

module.exports = sidebars;
