import { lazy } from 'react'

const DayActivities = lazy(() => import('./day-activities/DayActivitiesScreen'))
const DayActivity = lazy(() => import('./day-activities/day/Element'))

const NightShows = lazy(() => import('./night-show/NightShowsScreen'))
const NightShow = lazy(() => import('./night-show/night/Element'))

const SportEvents = lazy(() => import('./sport-event/SportEventScreen'))

const CalendarAppEntertainement = lazy(() => import('./calendar/CalendarApp'))

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
          element: <DayActivity />,
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
      element: <SportEvents />,
    },
    {
      path: 'entertainement/calendar',
      element: <CalendarAppEntertainement />,
    },
  ],
}
export default EntertainementConfig
