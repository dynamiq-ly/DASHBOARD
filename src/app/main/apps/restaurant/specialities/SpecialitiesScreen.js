import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from '../store'

import SpecialitiesHeader from './SpecialitiesHeader'
import SpecialitiesTable from './SpecialitiesTable'

function SpecialitiesScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<SpecialitiesHeader />}
      content={<SpecialitiesTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('restaurantFacility', reducer)(SpecialitiesScreen)
