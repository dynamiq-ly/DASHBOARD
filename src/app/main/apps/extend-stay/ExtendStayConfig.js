import { lazy } from 'react'
const ExtendStay = lazy(() => import('./ExtendStayScreen'))

const ExtendStayConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/extend-stay',
      element: <ExtendStay />,
    },
  ],
}

export default ExtendStayConfig
