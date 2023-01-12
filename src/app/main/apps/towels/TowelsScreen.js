import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import TowelsHeader from './TowelsHeader'
function SafetyScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<TowelsHeader />}
      //   content={<SafetyTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default SafetyScreen
