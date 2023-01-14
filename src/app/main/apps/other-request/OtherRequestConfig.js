import { lazy } from 'react'

const OtherRequest = lazy(() => import('./OtherRequestScreen'))

const OtherRequestConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/other-request',
      element: <OtherRequest />,
    },
  ],
}

export default OtherRequestConfig
