import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../store/roomCategorySlice'

import RoomCategoryHeader from './RoomCategoryHeader'
import RoomCategoryTable from './RoomCategoryTable'

function RoomCategoryScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<RoomCategoryHeader />}
      content={<RoomCategoryTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('roomCategories', reducer)(RoomCategoryScreen)
