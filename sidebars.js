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
        {
          'type': 'category',
          'label': 'Libraries',
          'link': {
            'type': 'doc',
            'id': 'robocad/libraries/index',
          },
          'items': [
            {
              'type': 'category',
              'label': 'Installation',
              'link': {
                'type': 'doc',
                'id': 'robocad/libraries/installation/index',
              },
              'items': [
                'robocad/libraries/installation/python',
                'robocad/libraries/installation/java',
                'robocad/libraries/installation/labview',
              ],
            },
            {
              'type': 'category',
              'label': 'Studica',
              'link': {
                'type': 'doc',
                'id': 'robocad/libraries/studica/index',
              },
              'items': [
                'robocad/libraries/studica/motors',
                'robocad/libraries/studica/encoders',
                'robocad/libraries/studica/infrared',
                'robocad/libraries/studica/ultrasound',
                'robocad/libraries/studica/analog',
                'robocad/libraries/studica/imu',
                'robocad/libraries/studica/camera',
                'robocad/libraries/studica/vmx-hcdio',
                'robocad/libraries/studica/vmx-flex',
                'robocad/libraries/studica/titan-limits',
              ],
            },
          ],
        },
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
        'softhub/auth',
        'softhub/robocad',
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
        'hypocrite/container',
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
