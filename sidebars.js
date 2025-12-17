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
              'label': 'Algaritm',
              'link': {
                'type': 'doc',
                'id': 'robocad/libraries/algaritm/index',
              },
              'items': [
                'robocad/libraries/algaritm/setup',
                'robocad/libraries/algaritm/motors',
                'robocad/libraries/algaritm/step-motors',
                'robocad/libraries/algaritm/encoders',
                'robocad/libraries/algaritm/pid',
                'robocad/libraries/algaritm/infrared',
                'robocad/libraries/algaritm/ultrasound',
                'robocad/libraries/algaritm/analog',
                'robocad/libraries/algaritm/imu',
                'robocad/libraries/algaritm/camera',
                'robocad/libraries/algaritm/lidar',
                'robocad/libraries/algaritm/servo',
                'robocad/libraries/algaritm/titan-limits',
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
                'robocad/libraries/studica/setup',
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
            {
              'type': 'category',
              'label': 'Shufflecad',
              'link': {
                'type': 'doc',
                'id': 'robocad/libraries/shufflecad/index',
              },
              'items': [
                'robocad/libraries/shufflecad/vars',
                'robocad/libraries/shufflecad/camera',
                'robocad/libraries/shufflecad/logs',
                'robocad/libraries/shufflecad/joystick',
              ],
            },
            {
              'type': 'category',
              'label': 'Update',
              'link': {
                'type': 'doc',
                'id': 'robocad/libraries/update/index',
              },
              'items': [
                'robocad/libraries/update/python',
                'robocad/libraries/update/java',
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
      'label': 'Shufflecad',
      'link': {
        'type': 'doc',
        'id': 'shufflecad/index',
      },
      'items': [
        'shufflecad/get-started',
        'shufflecad/start-project',
        'shufflecad/front-panel',
        'shufflecad/logs',
        'shufflecad/cameras',
        'shufflecad/joystick',
      ],
    },
    'community'
  ],
};

module.exports = sidebars;
