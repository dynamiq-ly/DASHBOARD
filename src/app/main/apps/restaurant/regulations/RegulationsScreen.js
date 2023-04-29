import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from '../store'

import RegulationsHeader from './RegulationsHeader'
import RegulationsTable from './RegulationsTable'

function RegulationsScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<RegulationsHeader />}
      content={<RegulationsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('restaurantFacility', reducer)(RegulationsScreen)
