import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import AlarmHeader from './AlarmHeader'
import AlarmTable from './AlarmTable'

function AlarmScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<AlarmHeader />}
      content={<AlarmTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('reminders', reducer)(AlarmScreen)
