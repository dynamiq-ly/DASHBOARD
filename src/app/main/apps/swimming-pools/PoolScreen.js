import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'
import reducer from './store'

import PoolHeader from './PoolHeader'
import PoolTable from './PoolTable'

function PoolScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<PoolHeader />}
      content={<PoolTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('pools', reducer)(PoolScreen)
