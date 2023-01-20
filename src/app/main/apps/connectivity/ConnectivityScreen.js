import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from './store'

import ConnectivityHeader from './ConnectivityHeader'
import ConnectivityTable from './ConnectivityTable'

function ConnectivityScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<ConnectivityHeader />}
      content={<ConnectivityTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('connectivities', reducer)(ConnectivityScreen)
