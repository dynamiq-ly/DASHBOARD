import { lazy } from 'react'

const Gym = lazy(() => import('./GymScreen'))
const GymDetail = lazy(() => import('./element/Element'))
const GymStaff = lazy(() => import('./staffs/StaffsScreen'))
const GymStaffDetail = lazy(() => import('./staffs/staff/Element'))
const GymEquipment = lazy(() => import('./equipements/EquipementsScreen'))
const GymEquipmentDetail = lazy(() => import('./equipements/staff/Element'))

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
            {
              path: 'equipements',
              children: [
                { path: '', element: <GymEquipment /> },
                { path: ':equipId', element: <GymEquipmentDetail /> },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default GymConfig
