import { lazy } from 'react'

const LaugageVault = lazy(() => import('./LaugageScreen'))

const LaugageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/laugage-vault',
      element: <LaugageVault />,
    },
  ],
}

export default LaugageConfig
