import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../store'

import MiniBarHeader from './MiniBarHeader'
import MiniBarTable from './MiniBarTable'

function MiniBarScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<MiniBarHeader />}
      content={<MiniBarTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('roomService', reducer)(MiniBarScreen)
