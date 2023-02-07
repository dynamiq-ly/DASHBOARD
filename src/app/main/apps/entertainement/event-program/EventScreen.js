import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import EventHeader from './EventHeader'

function EventScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<EventHeader />}
      //   content={<SafetyTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default EventScreen
