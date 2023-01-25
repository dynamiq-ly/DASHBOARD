import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import GymHeader from './GymHeader'
import GymTable from './GymTable'

function GymScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<GymHeader />}
      content={<GymTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('gyms', reducer)(GymScreen)
