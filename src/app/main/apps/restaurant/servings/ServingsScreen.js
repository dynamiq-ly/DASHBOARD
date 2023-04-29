import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from '../store'

import ServingsHeader from './ServingsHeader'
import ServingsTable from './ServingsTable'

function ServingsScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<ServingsHeader />}
      content={<ServingsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('restaurantFacility', reducer)(ServingsScreen)
