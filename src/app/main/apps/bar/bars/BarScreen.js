import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from '../store'

import BarsHeader from './BarsHeader'
import BarsTable from './BarsTable'

function BarScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<BarsHeader />}
      content={<BarsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('bars', reducer)(BarScreen)
