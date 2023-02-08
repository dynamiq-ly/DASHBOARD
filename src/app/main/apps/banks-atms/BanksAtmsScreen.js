import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'
import reducer from './store'
import BanksAtmsHeader from './BanksAtmsHeader'
import BanksAtmTable from './BanksAtmTable'

function BanksAtmScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<BanksAtmsHeader />}
      content={<BanksAtmTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('banks', reducer)(BanksAtmScreen)
