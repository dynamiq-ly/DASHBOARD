import { useState } from 'react'
import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import FileManagerHeader from './FileManagerHeader'
import FileManagerFolders from './FileManagerFolders'

function FileManagerScreen(props) {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <FusePageCarded
      header={<FileManagerHeader />}
      content={<FileManagerFolders selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
      scroll={isMobile ? 'normal' : 'content'}
      rightSidebarOpen={!!selectedItem}
      rightSidebarContent={<>{JSON.stringify(selectedItem)}</>}
      rightSidebarWidth={400}
    />
  )
}

export default FileManagerScreen
