import { lazy } from 'react'

const MedicalAssistance = lazy(() => import('./MedicalAssistanceScreen'))

const MedicalAssistanceConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/medical-assistance',
      element: <MedicalAssistance />,
    },
  ],
}

export default MedicalAssistanceConfig
