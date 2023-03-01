import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import AirConditionerHeader from './AirConditionerHeader'
import AirConditionerTable from './AirConditionerTable'

function AirConditionerScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<AirConditionerHeader />}
      content={<AirConditionerTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}
export default withReducer('climatizations', reducer)(AirConditionerScreen)
