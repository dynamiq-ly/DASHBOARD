import { styled } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'

import FusePageSimple from '@fuse/core/FusePageSimple'
import FusePageCarded from '@fuse/core/FusePageCarded'

import reducer from '../store'

import SafetyHeader from './SafetyHeader'

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}))

const SafetyScreen = (props) => {
  const { t } = useTranslation('safetyPage')
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <Root
      header={
        <div className='p-24'>
          <h4>{t('TITLE')}</h4>
        </div>
      }
      content={
        <FusePageCarded
          // header={<SafetyHeader />}
          // contenet={<ProductsTable />}
          scroll={isMobile ? 'normal' : 'content'}
        />
      }
    />
  )
}

export default withReducer('safetyMeasure', reducer)(SafetyScreen)
