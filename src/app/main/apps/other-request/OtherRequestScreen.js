import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import OtherRequestHeader from './OtherRequestHeader'
import OtherRequestTable from './OtherRequestTable'

function OtherRequestScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<OtherRequestHeader />}
      content={<OtherRequestTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('requests', reducer)(OtherRequestScreen)
