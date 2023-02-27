import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import LaundryHeader from './LaundryHeader'
import LaundryTable from './LaundryTable'

function LaundryScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<LaundryHeader />}
      content={<LaundryTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('laundries', reducer)(LaundryScreen)
