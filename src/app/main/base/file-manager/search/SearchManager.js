import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'
import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'

import FileManagerHeader from './SearchManagerHeader'
import FileManagerFolders from './SearchManagerFolders'
// import DetailScreenSideBarContent from './FileDetails'

function FileManagerScreen(props) {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('api/helpers/file-manager/files')
      .then((res) => res.status === 200 && setData(res.data))
      .finally(() => setLoading(false))
  }, [])

  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    if (search.length !== 0) {
      setFilteredData(
        _.filter(
          data,
          (el) =>
            el.filename.toLowerCase().includes(search.toLowerCase()) ||
            el.url.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else {
      setFilteredData(data)
    }
  }, [data, search])

  return (
    <FusePageCarded
      header={<FileManagerHeader search={search} setSearch={setSearch} />}
      content={
        <FileManagerFolders data={filteredData} setData={setFilteredData} loading={loading} />
      }
      scroll={isMobile ? 'normal' : 'content'}
      // rightSidebarOpen={!!selectedItem}
      // rightSidebarContent={
      //   <DetailScreenSideBarContent
      //     selectedItem={selectedItem}
      //     setSelectedItem={setSelectedItem}
      //     directories={directories}
      //   />
      // }
      // rightSidebarWidth={400}
    />
  )
}

export default FileManagerScreen
