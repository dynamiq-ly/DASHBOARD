import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMeasures, selectProducts } from './store/foldersSlice'
import { getFiles, selectProducts as selectFileProduct } from './store/filesSlice'

function FileManagerHeader(props) {
  const dispatch = useDispatch()

  const products = useSelector(selectProducts)
  const fileProducts = useSelector(selectFileProduct)

  const [dirLoading, setDirLoading] = useState(true)
  const [fileLoading, setFileLoading] = useState(true)

  const [data, setData] = useState(products)
  const [fileData, setFileData] = useState(fileProducts)

  useEffect(() => {
    Promise.all([
      dispatch(getMeasures()).then(() => setDirLoading(false)),
      dispatch(getFiles()).then(() => setFileLoading(false)),
    ])
  }, [dispatch])

  useEffect(() => {
    setData(products)
  }, [products])

  useEffect(() => {
    setFileData(fileProducts)
  }, [fileProducts])

  return (
    <div className="p-24 sm:p-32 w-full flex flex-col sm:flex-row space-y-8 sm:space-y-0 items-center justify-between">
      <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0">
        <motion.span
          className="flex items-end"
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
        >
          <Typography
            component={Link}
            to="/file-system"
            className="text-20 md:text-32 font-extrabold tracking-tight leading-none"
            role="button"
          >
            File Manager
          </Typography>
        </motion.span>
        <Typography
          component={motion.span}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          delay={500}
          className="text-14 font-medium mx-2"
          color="text.secondary"
        >
          {!dirLoading && `${data.length} folders`}
          {!fileLoading && `, ${fileData.length} files.`}
        </Typography>
      </div>

      <div className="flex items-center -mx-8">
        <Button
          className="mx-8 whitespace-nowrap"
          variant="contained"
          color="secondary"
          startIcon={<FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>}
        >
          Upload file
        </Button>
      </div>
    </div>
  )
}

export default FileManagerHeader
