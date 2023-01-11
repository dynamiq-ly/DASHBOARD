import { lazy } from 'react'

const PhoneDirectory = lazy(() => import('./PhoneDirecotoryScreen'))

const PhoneDirectoryConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/phone-directory',
      element: <PhoneDirectory />,
    },
  ],
}

export default PhoneDirectoryConfig
