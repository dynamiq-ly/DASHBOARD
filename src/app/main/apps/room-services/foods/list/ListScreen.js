import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from '../../store'

import ListHeader from './ListHeader'
import ListTable from './ListTable'

function ListScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<ListHeader />}
      content={<ListTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('foodsService', reducer)(ListScreen)
