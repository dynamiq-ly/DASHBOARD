import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from '../store'

import RegulationsHeader from './ReservationsHeader'
import CalendarApp from './calendar/CalendarApp'

function RegulationsScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<RegulationsHeader />}
      content={<CalendarApp />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('restaurantFacility', reducer)(RegulationsScreen)
