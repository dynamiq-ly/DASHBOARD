import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../../store'

import SuppelementHeader from './SuppelementHeader'
import SuppelementTable from './SuppelementTable'

function SuppelementScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<SuppelementHeader />}
      content={<SuppelementTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('foodsService', reducer)(SuppelementScreen)
