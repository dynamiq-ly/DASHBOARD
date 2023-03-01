import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import HairDryerHeader from './HairDryerHeader'
import HairDryerTable from './HairDryerTable'

function HairDryerScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<HairDryerHeader />}
      content={<HairDryerTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('hairdryers', reducer)(HairDryerScreen)
