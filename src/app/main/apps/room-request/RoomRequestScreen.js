import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import RoomRequestHeader from './RoomRequestHeader'
import RoomRequestTable from './RoomRequestTable'

function RoomRequestScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<RoomRequestHeader />}
      content={<RoomRequestTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('roomRequests', reducer)(RoomRequestScreen)
