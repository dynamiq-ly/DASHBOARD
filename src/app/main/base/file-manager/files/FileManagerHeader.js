import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import axios from 'axios'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'

function FileManagerHeader(props) {
  const [files, setFiles] = useState([])
  const [directories, setDirectories] = useState([])

  useEffect(() => {
    axios
      .get('api/helpers/file-manager/directories')
      .then((res) => res.status === 200 && setDirectories(res.data))

    axios
      .get('api/helpers/file-manager/files')
      .then((res) => res.status === 200 && setFiles(res.data))
  }, [])

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
          {`${directories.length} folders`}
          {`, ${files.length} files.`}
        </Typography>
      </div>

      <div className="flex items-center -mx-8">
        <Button
          component={Link}
          to="/file-system/search"
          className="mx-8 whitespace-nowrap"
          variant="contained"
          color="primary"
          startIcon={<FuseSvgIcon size={20}>heroicons-outline:search</FuseSvgIcon>}
        >
          Search File
        </Button>
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
