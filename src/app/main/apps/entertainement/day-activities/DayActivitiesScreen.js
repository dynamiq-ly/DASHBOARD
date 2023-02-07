import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../store'

import DayActivitiesHeader from './DayActivitiesHeader'
import DayActivitiesTable from './DayActivitiesTable'

function DayActivitiesScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<DayActivitiesHeader />}
      content={<DayActivitiesTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('entertainements', reducer)(DayActivitiesScreen)
