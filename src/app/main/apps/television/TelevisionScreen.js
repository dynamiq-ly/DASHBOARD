import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import TelevisionHeader from './TelevisionHeader'
import TelevisionTable from './TelevisionTable'

function TelevisionScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<TelevisionHeader />}
      content={<TelevisionTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('televisions', reducer)(TelevisionScreen)
