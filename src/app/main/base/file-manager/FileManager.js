import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import withReducer from 'app/store/withReducer'
import reducer from './store'

import FileManagerHeader from './FileManagerHeader'
import FileManagerFolders from './FileManagerFolders'

function FileManagerScreen(props) {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  return (
    <FusePageCarded
      header={<FileManagerHeader />}
      content={<FileManagerFolders />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  )
}

export default withReducer('fileManager', reducer)(FileManagerScreen)
