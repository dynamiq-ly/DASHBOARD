import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'

import reducer from '../store'

import CategoryHeader from './CategoryHeader'
import CategoryTable from './CategoryTable'

function CategoryInterestScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<CategoryHeader />}
      content={<CategoryTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('pointsCategories', reducer)(CategoryInterestScreen)
