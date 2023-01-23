import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import PhoneDirectoryHeader from './PhoneDirectoryHeader'
import PhoneDirectoryTable from './PhoneDirectoryTable'

function PhoneDirectoryScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<PhoneDirectoryHeader />}
      content={<PhoneDirectoryTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('directories', reducer)(PhoneDirectoryScreen)
