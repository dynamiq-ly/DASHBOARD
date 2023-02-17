import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import RoomUpgradeHeader from './RoomUpgradeHeader'
import FolderList from './sections/FolderList'

function RoomUpgradeScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<RoomUpgradeHeader />}
      content={<FolderList />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default RoomUpgradeScreen
