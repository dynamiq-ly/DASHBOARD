import { Button, IconButton, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { Box, lighten } from '@mui/system'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'
import ItemIcon from 'app/shared-components/sections/ItemIcon'

function FileDetails(props) {
  const { selectedItem, setSelectedItem, deleteImageFromStorage } = props

  const [data, setData] = useState(null)

  useEffect(() => {
    if (selectedItem) {
      axios
        .get(`api/helpers/file-manager/files-one?id=${selectedItem?.url?.replace('storage', '')}`)
        .then((res) => setData(res.data))
    }
  }, [selectedItem])

  if (!selectedItem) {
    return null
  }

  if (!data) {
    return null
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0.8 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
      className="file-details p-24 sm:p-32"
    >
      {/* close button */}
      <div className="flex items-center justify-end w-full">
        <IconButton className="" size="large" onClick={() => setSelectedItem(null)}>
          <FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
        </IconButton>
      </div>

      {/* thumbnail */}
      <Box
        className=" w-full rounded-8 border preview h-128 sm:h-256 file-icon flex items-center justify-center my-32 overflow-hidden"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
      >
        {data?.mime_type?.includes('image') ? (
          <img
            loading="lazy"
            className="max-w-none w-auto h-full"
            src={`${process.env.REACT_APP_STORAGE_UTELLS}${data?.file_path}`}
            alt="product"
          />
        ) : (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.3 } }}>
            <ItemIcon
              className=""
              type="material-twotone:insert_drive_file"
              color="red"
              name="PDF"
            />
          </motion.div>
        )}
      </Box>

      <div className="text-16 font-medium mt-32">Information</div>
      <div className="flex flex-col mt-16 border-t border-b divide-y font-medium">
        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Size</Typography>
          <Typography>{data?.size_formatted}</Typography>
        </div>

        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Type</Typography>
          <Typography>{data?.mime_type}</Typography>
        </div>

        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Created</Typography>
          <Typography>{moment(data?.last_modified).format('lll')}</Typography>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-16 w-full mt-32">
        <Button
          component="a"
          href={`${process.env.REACT_APP_STORAGE_UTELLS}${data?.file_path}`}
          target="_blank"
          rel="noreferrer"
          className="flex-auto"
          color="secondary"
          variant="contained"
        >
          View
        </Button>

        <Button
          className="flex-auto"
          color="error"
          variant="contained"
          onClick={() => {
            deleteImageFromStorage(data?.file_path)
            setSelectedItem(null)
          }}
        >
          Delete
        </Button>
      </div>
    </motion.div>
  )
}

export default FileDetails
