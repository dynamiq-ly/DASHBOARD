import { useState } from 'react'
import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import FileManagerHeader from './FileManagerHeader'
import FileManagerFolders from './FileManagerFolders'
import DetailScreenSideBarContent from './FileDetails'

function FileManagerScreen(props) {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  const [directories, setDirectories] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <FusePageCarded
      header={<FileManagerHeader />}
      content={
        <FileManagerFolders
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setDirectories={setDirectories}
        />
      }
      scroll={isMobile ? 'normal' : 'content'}
      rightSidebarOpen={!!selectedItem}
      rightSidebarContent={
        <DetailScreenSideBarContent
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          directories={directories}
        />
      }
      rightSidebarWidth={400}
    />
  )
}

export default FileManagerScreen
