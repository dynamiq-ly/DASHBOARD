import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from '../store'

import ChefsHeader from './ChefsHeader'
import ChefsTable from './ChefsTable'

function ChefsScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<ChefsHeader />}
      content={<ChefsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('restaurantFacility', reducer)(ChefsScreen)
