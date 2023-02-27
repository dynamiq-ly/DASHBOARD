import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../store'

import MenuHeader from './MenuHeader'
import MenuTable from './MenuTable'

function MenuScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<MenuHeader />}
      content={<MenuTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('laundries', reducer)(MenuScreen)
