import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../store'

import NightShowsHeader from './NightShowsHeader'
import NightShowsTable from './NightShowsTable'

function NightShowsScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<NightShowsHeader />}
      content={<NightShowsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('entertainements', reducer)(NightShowsScreen)
