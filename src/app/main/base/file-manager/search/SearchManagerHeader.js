import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { Input, Paper } from '@mui/material'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'

function FileManagerHeader(props) {
  const { search, setSearch } = props
  const theme = useTheme()

  return (
    <div className="p-24 sm:p-32 w-full flex flex-col sm:flex-row space-y-8 sm:space-y-0 items-center justify-between">
      <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-4"
            component={Link}
            role="button"
            to="/file-system"
            color="inherit"
          >
            <FuseSvgIcon size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className="flex mx-4 font-medium">File Manager</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16"
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.3 } }}
          >
            <Typography className="text-16 sm:text-20 truncate font-semibold">
              Search File
            </Typography>
          </motion.div>
        </div>
      </div>

      <div className="flex items-center -mx-8">
        <Paper
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
        >
          <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

          <Input
            placeholder="Search products"
            className="flex flex-1"
            disableUnderline
            value={search}
            fullWidth
            inputProps={{
              'aria-label': 'Search',
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Paper>
      </div>
    </div>
  )
}

export default FileManagerHeader
