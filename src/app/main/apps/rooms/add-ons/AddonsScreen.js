import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'
import reducer from '../store'

import RoomHeader from './AddonsHeader'
import RoomTable from './AddonsTable'

function RoomListScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<RoomHeader />}
      content={<RoomTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('rooms', reducer)(RoomListScreen)
