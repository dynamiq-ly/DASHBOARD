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

  const fetchData = () => {
    axios
      .get('api/helpers/file-manager/files')
      .then((res) => res.status === 200 && setData(res.data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchData()
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

  const deleteImageFromStorage = (key) => {
    /* */
    axios
      .delete('api/helpers/file-manager/files', {
        data: { id: key },
      })
      .then((res) => {
        if (res.status === 200) {
          alert('File deleted successfully')
          fetchData()
        }
      })
    /* */
    // setData(data.filter((el) => el.filename !== key))
  }

  return (
    <FusePageCarded
      header={<FileManagerHeader search={search} setSearch={setSearch} />}
      content={
        <FileManagerFolders
          data={filteredData}
          setData={setFilteredData}
          loading={loading}
          deleteImageFromStorage={deleteImageFromStorage}
        />
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
