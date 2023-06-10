import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../store'

import SportEventHeader from './SportEventHeader'
import SportEventTable from './SportEventTable'

function SportEventScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<SportEventHeader />}
      content={<SportEventTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('entertainements', reducer)(SportEventScreen)
