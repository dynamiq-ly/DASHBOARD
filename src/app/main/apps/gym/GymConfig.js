import { lazy } from 'react'

const Gym = lazy(() => import('./GymScreen'))
const GymDetail = lazy(() => import('./element/Element'))
const GymStaff = lazy(() => import('./staffs/StaffsScreen'))
const GymStaffDetail = lazy(() => import('./staffs/staff/Element'))

const GymConfig = {
  setting: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/gym',
      children: [
        {
          path: '',
          element: <Gym />,
        },
        {
          path: ':productId',
          children: [
            { path: '', element: <GymDetail /> },
            {
              path: 'staffs',
              children: [
                { path: '', element: <GymStaff /> },
                { path: ':chefId', element: <GymStaffDetail /> },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default GymConfig
