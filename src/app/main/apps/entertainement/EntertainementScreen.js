import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from './store'

import EntertainemenetHeader from './EntertainemenetHeader'
import EntertainementTable from './EntertainementTable'

function EventProgramScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<EntertainemenetHeader />}
      content={<EntertainementTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('interestPoints', reducer)(EventProgramScreen)
