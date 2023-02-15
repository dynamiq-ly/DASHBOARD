import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import ExcursiontHeader from './ExcursionHeader'
import ExcursionTable from './ExcursionTable'

function ExcursionScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<ExcursiontHeader />}
      content={<ExcursionTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('excursions', reducer)(ExcursionScreen)
