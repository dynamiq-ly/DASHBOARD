import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import ParkingHeader from './ParkingHeader'
function SafetyScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<ParkingHeader />}
      //   content={<SafetyTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default SafetyScreen
