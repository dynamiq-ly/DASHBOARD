import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../store'

import RoomDrinksHeader from './RoomDrinksHeader'
import RoomDrinksTable from './RoomDrinksTable'

function DrinkServiceScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<RoomDrinksHeader />}
      content={<RoomDrinksTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('roomService', reducer)(DrinkServiceScreen)
