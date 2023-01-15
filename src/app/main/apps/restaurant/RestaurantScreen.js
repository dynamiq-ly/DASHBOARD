import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from './store'

import RestaurantsHeader from './RestaurantsHeader'
import RestaurantsTable from './RestaurantsTable'

function RestaurantScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<RestaurantsHeader />}
      content={<RestaurantsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('restaurants', reducer)(RestaurantScreen)
