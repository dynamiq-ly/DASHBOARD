import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../store'

import FoodServicesHeader from './FoodServicesHeader'
import FoodServicesTable from './FoodServicesTable'

function FoodServiceScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<FoodServicesHeader />}
      content={<FoodServicesTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('roomService', reducer)(FoodServiceScreen)
