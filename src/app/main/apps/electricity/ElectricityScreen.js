import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import ElectricityHeader from './ElectricityHeader'
import ElectricityTable from './ElectricityTable'

function ElectricityScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<ElectricityHeader />}
      content={<ElectricityTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('electricities', reducer)(ElectricityScreen)
