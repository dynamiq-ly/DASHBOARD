import { lazy } from 'react'

const DayActivities = lazy(() => import('./day-activities/DayActivitiesScreen'))
const DayActivity = lazy(() => import('./day-activities/day/Element'))
const DayActivityTiming = lazy(() => import('./day-activities/day/timing/element/Element'))

const NightShows = lazy(() => import('./night-show/NightShowsScreen'))
const NightShow = lazy(() => import('./night-show/night/Element'))

const SportEvents = lazy(() => import('./sport-event/SportEventScreen'))
const SportEvent = lazy(() => import('./sport-event/sport/Element'))

const EntertainementConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'entertainement/day-activities',
      children: [
        {
          path: '',
          element: <DayActivities />,
        },
        {
          path: ':productId',
          children: [
            {
              path: '',
              element: <DayActivity />,
            },
            {
              path: ':timeId',
              element: <DayActivityTiming />,
            },
          ],
        },
      ],
    },
    {
      path: 'entertainement/night-show',
      children: [
        {
          path: '',
          element: <NightShows />,
        },
        {
          path: ':productId',
          element: <NightShow />,
        },
      ],
    },
    {
      path: 'entertainement/sport-event',
      children: [
        {
          path: '',
          element: <SportEvents />,
        },
        {
          path: ':productId',
          element: <SportEvent />,
        },
      ],
    },
  ],
}
export default EntertainementConfig
