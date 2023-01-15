import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import EntertainemenetHeader from './EntertainemenetHeader'

function EventProgramScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<EntertainemenetHeader />}
      //   content={<SafetyTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default EventProgramScreen
