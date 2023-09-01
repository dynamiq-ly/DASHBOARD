import { IconButton, Typography } from '@mui/material'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import axios from 'axios'
import { Box, lighten } from '@mui/system'
import withRouter from '@fuse/core/withRouter'
import FuseLoading from '@fuse/core/FuseLoading'
import NavLinkAdapter from '@fuse/core/NavLinkAdapter/NavLinkAdapter'
import ItemIcon from 'app/shared-components/sections/ItemIcon'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'

const FileManagerFolders = (props) => {
  const { selectedItem, setSelectedItem } = props

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get('api/helpers/file-manager/detailed-file-structure')
      .then((res) => res.status === 200 && setData(res.data))
      .finally(() => setLoading(false))
  }, [])

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
      <Box
        className="p-16 w-full rounded-16 mb-24 border"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
      >
        <Typography className="font-medium">Image Folders</Typography>
        <div className="flex flex-wrap -m-8 mt-8">
          {Object.entries(data)
            .filter(([index, _]) => index !== '.' && index !== 'pdf')
            .map(([key, value]) => (
              <Box
                sx={{ backgroundColor: 'background.paper' }}
                className="relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16"
              >
                <IconButton
                  className="absolute z-20 top-0 right-0 m-6 w-32 h-32 min-h-32"
                  onClick={() =>
                    value === selectedItem ? setSelectedItem(null) : setSelectedItem(value)
                  }
                >
                  <FuseSvgIcon size={20}>heroicons-solid:information-circle</FuseSvgIcon>
                </IconButton>
                <NavLinkAdapter className="flex flex-col h-full w-full" to="" role="button">
                  <div className="flex flex-auto w-full items-center justify-center">
                    <ItemIcon
                      className=""
                      name="IMAGES"
                      color="blue"
                      type="material-twotone:snippet_folder"
                    />
                  </div>
                  <div className="flex shrink flex-col justify-center text-center">
                    <Typography className="truncate text-12 font-medium capitalize">
                      {key}
                    </Typography>

                    <Typography className="truncate text-12 font-medium" color="text.secondary">
                      {value.files && `${value.files.length} files, `}
                      {`${Object.entries(value).length} folders`}
                    </Typography>
                  </div>
                </NavLinkAdapter>
              </Box>
            ))}
        </div>
      </Box>

      <Box
        className="p-16 w-full rounded-16 mb-24 border"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
      >
        <Typography className="font-medium">PDF Document</Typography>
        <div className="flex flex-wrap -m-8 mt-8">
          {Object.entries(data)
            .filter(([index, _]) => index === 'pdf')
            .map(([key, value]) => (
              <Box
                sx={{ backgroundColor: 'background.paper' }}
                className="relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16"
              >
                <IconButton
                  className="absolute z-20 top-0 right-0 m-6 w-32 h-32 min-h-32"
                  onClick={() =>
                    value === selectedItem ? setSelectedItem(null) : setSelectedItem(value)
                  }
                >
                  <FuseSvgIcon size={20}>heroicons-solid:information-circle</FuseSvgIcon>
                </IconButton>
                <NavLinkAdapter className="flex flex-col h-full w-full" to="" role="button">
                  <div className="flex flex-auto w-full items-center justify-center">
                    <ItemIcon
                      className=""
                      name="PDF"
                      color="red"
                      type="material-twotone:snippet_folder"
                    />
                  </div>
                  <div className="flex shrink flex-col justify-center text-center">
                    <Typography className="truncate text-12 font-medium capitalize">
                      {key}
                    </Typography>

                    <Typography className="truncate text-12 font-medium" color="text.secondary">
                      {value.files && `${value.files.length} files, `}
                      {`${Object.entries(value).length} folders`}
                    </Typography>
                  </div>
                </NavLinkAdapter>
              </Box>
            ))}
        </div>
      </Box>
    </div>
  )
}

export default withRouter(FileManagerFolders)
