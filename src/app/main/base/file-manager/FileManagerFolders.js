import { Typography } from '@mui/material'
import FileList from 'app/shared-components/sections/FolderList'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import withRouter from '@fuse/core/withRouter'
import FuseLoading from '@fuse/core/FuseLoading'
import { getMeasures, selectProducts } from './store/foldersSlice'

const FileManagerFolders = (props) => {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(products)

  useEffect(() => {
    dispatch(getMeasures()).then(() => setLoading(false))
  }, [dispatch])

  useEffect(() => {
    setData(
      products.map((product) => ({
        id: product.directory,
        type: 'heroicons-outline:folder',
        contents: product.directory,
      }))
    )
  }, [products])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There are no data!
        </Typography>
      </motion.div>
    )
  }

  return (
    <div className="p-32">
      <FileList title="Folders" data={data} />
    </div>
  )
}

export default withRouter(FileManagerFolders)
