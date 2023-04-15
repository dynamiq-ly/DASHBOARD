import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import withReducer from 'app/store/withReducer'

import reducer from './store'

import MedicalAssistanceHeader from './MedicalAssistanceHeader'
import MedicalAssistanceTable from './MeficalAssistanceTable'

function MedicalAssistanceScreen() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<MedicalAssistanceHeader />}
      content={<MedicalAssistanceTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('medicalmeasures', reducer)(MedicalAssistanceScreen)
