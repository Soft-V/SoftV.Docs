// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  documentationSidebar: [
    'welcome',
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
      'label': 'robocad',
      'link': {
        'type': 'doc',
        'id': 'robocad/index',
      },
      'items': [
        'robocad/get-started',
        {
          'type': 'category',
          'label': 'Installation and update',
          'link': {
            'type': 'doc',
            'id': 'robocad/installation/index',
          },
          'items': [
            'robocad/installation/python',
            'robocad/installation/java',
            'robocad/installation/cpp',
            'robocad/installation/cs',
            'robocad/installation/labview',
            'robocad/installation/update-libraries'
          ],
        },
        // {
        //   'type': 'category',
        //   'label': 'Libraries',
        //   'link': {
        //     'type': 'doc',
        //     'id': 'robocad/libraries/index',
        //   },
        //   'items': [
        //     {
        //       'type': 'category',
        //       'label': 'Shufflecad-robocad',
        //       'link': {
        //         'type': 'doc',
        //         'id': 'robocad/libraries/shufflecad/index',
        //       },
        //       'items': [
        //         'robocad/libraries/shufflecad/vars',
        //         'robocad/libraries/shufflecad/camera',
        //         'robocad/libraries/shufflecad/joystick',
        //         'robocad/libraries/shufflecad/logs',
        //       ],
        //     },
        //     {
        //       'type': 'category',
        //       'label': 'Update',
        //       'link': {
        //         'type': 'doc',
        //         'id': 'robocad/libraries/update/index',
        //       },
        //       'items': [
        //         'robocad/libraries/update/image',
        //         'robocad/libraries/update/python',
        //         'robocad/libraries/update/java',
        //         'robocad/libraries/update/cpp',
        //         'robocad/libraries/update/cs',
        //       ],
        //     },
        //   ],
        // },
      ],
    },
      {
    'type': 'category',
    'label': 'shufflecad',
    'link': {
      'type': 'doc',
      'id': 'shufflecad/index',
    },
    'items': [
      {
        'type': 'category',
        'label': 'shufflecad-app',
        'link': {
          'type': 'doc',
          'id': 'shufflecad/index',
        },
        'items': [
          'shufflecad/start-project',
          'shufflecad/front-panel',
          'shufflecad/cameras',
          'shufflecad/joystick',
          'shufflecad/logs',
        ],
      },
      {
        'type': 'category',
        'label': 'shufflecad-robocad',
        'link': {
          'type': 'doc',
          'id': 'robocad/libraries/index',
        },
        'items': [
          'robocad/libraries/shufflecad/vars',
          'robocad/libraries/shufflecad/camera',
          'robocad/libraries/shufflecad/joystick',
          'robocad/libraries/shufflecad/logs'
        ],
      },
    ],
  },
    {
      'type': 'category',
      'label': 'Algaritm-Get-Started',
      'link': {
        'type': 'doc',
        'id': 'algaritm-kit/index',
      },
      'items': [
        'algaritm-kit/get-started',
        'algaritm-kit/download-required',
        'algaritm-kit/create-project',
        'algaritm-kit/kit-overview',
        'algaritm-kit/powering-up-the-kit',
        'algaritm-kit/connecting-infrared',
        'algaritm-kit/connecting-analog',
        'algaritm-kit/connecting-ultrasonic',
        'algaritm-kit/connecting-digital',
        'algaritm-kit/connecting-bno055',
        'algaritm-kit/connecting-lidar',
        'algaritm-kit/connecting-servo',
        'algaritm-kit/connecting-camera',
        'algaritm-kit/connecting-motors',
        'algaritm-kit/connecting-encoders',
        'algaritm-kit/connecting-limit-switch',
        'algaritm-kit/connecting-step-motors',
        'algaritm-kit/indication',
      ],
    },
    {
      'type': 'category',
      'label': 'Studica-Get-Started',
      'link': {
        'type': 'doc',
        'id': 'studica-kit/index',
      },
      'items': [
        'studica-kit/get-started',
        'studica-kit/download-required',
        'studica-kit/create-project',
        'studica-kit/kit-overview',
        'studica-kit/powering-up-the-kit',
        'studica-kit/connecting-infrared',
        'studica-kit/connecting-analog',
        'studica-kit/connecting-ultrasonic',
        'studica-kit/using-imu',
        'studica-kit/connecting-limit-switches-and-leds',
        'studica-kit/connecting-servo',
        'studica-kit/connecting-camera',
        'studica-kit/connecting-motors',
        'studica-kit/connecting-encoders',
        'studica-kit/indication',
      ],
    },
    'community'
  ],
};

module.exports = sidebars;
