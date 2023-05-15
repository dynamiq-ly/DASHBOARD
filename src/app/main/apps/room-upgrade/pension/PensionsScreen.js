import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from '../store'

import PensionsHeader from './PensionsHeader'
import PensionsTable from './PensionsTable'

function RestaurantsScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<PensionsHeader />}
      content={<PensionsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('pensionUpgrade', reducer)(RestaurantsScreen)
