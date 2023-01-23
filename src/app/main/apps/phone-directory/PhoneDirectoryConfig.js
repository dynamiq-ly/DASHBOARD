import { lazy } from 'react'

const PhoneDirectory = lazy(() => import('./PhoneDirecotoryScreen'))
const Directory = lazy(() => import('./phone/Directory'))

const PhoneDirectoryConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/phone-directory',
      children: [
        {
          path: '',
          element: <PhoneDirectory />,
        },
        {
          path: ':productId',
          element: <Directory />,
        },
      ],
    },
  ],
}

export default PhoneDirectoryConfig
