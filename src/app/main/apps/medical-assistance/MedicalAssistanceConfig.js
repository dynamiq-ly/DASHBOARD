import { lazy } from 'react'

const MedicalAssistance = lazy(() => import('./MedicalAssistanceScreen'))
const Measures = lazy(() => import('./MedicalMeasures/MedicalMeasures'))

const MedicalAssistanceConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/medical-assistance',
      children: [
        {
          path: '',
          element: <MedicalAssistance />,
        },
        {
          path: ':productId',
          element: <Measures />,
        },
      ],
    },
  ],
}

export default MedicalAssistanceConfig
