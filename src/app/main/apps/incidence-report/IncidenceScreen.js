import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import IncidenceHeader from './IncidenceHeader'

function IncidenceScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<IncidenceHeader />}
      // content={<div></div>}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default IncidenceScreen
