import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'

import reducer from '../store'

import CategoriesHeader from './CategoriesHeader'
import CategoriesTable from './CategoriesTable'

function CategoryInterestScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<CategoriesHeader />}
      content={<CategoriesTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('rooms', reducer)(CategoryInterestScreen)
