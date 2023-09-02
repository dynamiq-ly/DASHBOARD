import { motion } from 'framer-motion'
import IconButton from '@mui/material/IconButton'
import { Box, lighten } from '@mui/system'
import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import moment from 'moment'

import axios from 'axios'
import ItemIcon from 'app/shared-components/sections/ItemIcon'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'

function DetailScreenSideBarContent(props) {
  const { selectedItem, setSelectedItem, directories } = props

  const [infos, setInfos] = useState(null)

  useEffect(() => {
    axios
      .get('api/helpers/file-manager/directories')
      .then((res) => res.status === 200 && setInfos(res.data))
  }, [])

  if (!selectedItem) {
    return null
  }

  if (!infos) {
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
        className=" w-full rounded-8 border preview h-128 sm:h-256 file-icon flex items-center justify-center my-32"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.3 } }}>
          <ItemIcon className="" type="heroicons-outline:folder" color="green" name="Details" />
        </motion.div>
      </Box>

      <Typography className="text-18 font-medium capitalize">
        {directories && directories.replaceAll('-', ' ')}
      </Typography>

      <div className="text-16 font-medium mt-32">Information</div>
      <div className="flex flex-col mt-16 border-t border-b divide-y font-medium">
        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Size</Typography>
          <Typography>{infos.find((el) => el.id === directories).size}</Typography>
        </div>

        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Files</Typography>
          <Typography>{selectedItem.files ? selectedItem.files.length : 0}</Typography>
        </div>

        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Folders</Typography>
          <Typography>{Object.entries(selectedItem).length}</Typography>
        </div>

        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Created</Typography>
          <Typography>
            {moment(infos.find((el) => el.id === directories).creation_date).format('ll')}
          </Typography>
        </div>
      </div>
    </motion.div>
  )
}

export default DetailScreenSideBarContent
