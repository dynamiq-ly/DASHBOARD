import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from './store'

import InterestHeader from './InterestHeader'
import InterestTable from './InterestTable'

function InterestScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<InterestHeader />}
      content={<InterestTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('interestPoints', reducer)(InterestScreen)
