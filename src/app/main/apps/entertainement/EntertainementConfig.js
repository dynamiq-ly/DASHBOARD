import { lazy } from 'react'

const EventProgram = lazy(() => import('./event-program/EventScreen'))
const DayActivities = lazy(() => import('./day-activities/DayActivitiesScreen'))
const NightShows = lazy(() => import('./night-show/NightShowsScreen'))
const SportEvents = lazy(() => import('./sport-event/SportEventScreen'))

const EntertainementConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'entertainement/event-programs',
      element: <EventProgram />,
    },
    {
      path: 'entertainement/day-activities',
      element: <DayActivities />,
    },
    {
      path: 'entertainement/night-show',
      element: <NightShows />,
    },
    {
      path: 'entertainement/sport-event',
      element: <SportEvents />,
    },
  ],
}
export default EntertainementConfig
