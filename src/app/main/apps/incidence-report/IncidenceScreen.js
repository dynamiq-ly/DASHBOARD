import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import IncidenceHeader from './IncidenceHeader'
import IncidenceTable from './IncidenceTable'

function IncidenceScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<IncidenceHeader />}
      content={<IncidenceTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('incidence', reducer)(IncidenceScreen)
