import { lazy } from 'react'

const OtherRequest = lazy(() => import('./OtherRequestScreen'))
const OtherRequestEdit = lazy(() => import('./request/Request'))

const OtherRequestConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/other-request',
      children: [
        {
          path: '',
          element: <OtherRequest />,
        },
        {
          path: ':productId',
          element: <OtherRequestEdit />,
        },
      ],
    },
  ],
}

export default OtherRequestConfig
