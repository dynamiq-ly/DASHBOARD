import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import TourOperatorHeader from './TourOperatorHeader'
import TourOperatorTable from './TourOperatorTable'

function TourOperatorScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<TourOperatorHeader />}
      content={<TourOperatorTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('agencies', reducer)(TourOperatorScreen)
