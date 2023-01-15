import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import NightShowsHeader from './NightShowsHeader'

function NightShowsScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<NightShowsHeader />}
      //   content={<SafetyTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default NightShowsScreen
