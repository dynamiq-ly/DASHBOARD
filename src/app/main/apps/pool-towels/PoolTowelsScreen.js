import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import PoolTowelsHeader from './PoolTowelsHeader'
import PoolTowelsTable from './PoolTowelsTable'

function PoolTowelScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<PoolTowelsHeader />}
      content={<PoolTowelsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('pooltowels', reducer)(PoolTowelScreen)
