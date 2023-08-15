import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from '../store'

import ChefsHeader from './EquipementsHeader'
import ChefsTable from './EquipementsTable'

function ChefsScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<ChefsHeader />}
      content={<ChefsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('gyms', reducer)(ChefsScreen)
