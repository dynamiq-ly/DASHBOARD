import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from './store'

import HouseKeepingHeader from './HousekeepingHeader'
import HouseKeepingTable from './HouseKeepingTable'

function HouseKeepingScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<HouseKeepingHeader />}
      content={<HouseKeepingTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('housekeeping', reducer)(HouseKeepingScreen)
