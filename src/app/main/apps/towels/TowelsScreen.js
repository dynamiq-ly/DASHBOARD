import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import TowelsHeader from './TowelsHeader'
import TowelsTable from './TowelsTable'

function TowelScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<TowelsHeader />}
      content={<TowelsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('towels', reducer)(TowelScreen)
