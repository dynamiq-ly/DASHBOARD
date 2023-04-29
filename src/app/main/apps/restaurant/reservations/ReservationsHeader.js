import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'

function RegulationsHeader() {
  const theme = useTheme()
  const { productId } = useParams()

  return (
    <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32">
      <div className="flex flex-col">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            component={Link}
            role="button"
            to={`/restaurant/${productId}`}
            color="inherit"
          >
            <FuseSvgIcon size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className="flex mx-4 font-medium">Restaurant</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16"
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.3 } }}
          >
            <Typography className="text-16 sm:text-20 truncate font-semibold">
              Reservations Calendar
            </Typography>
            <Typography variant="caption" className="font-medium">
              Clients Reservation Details
            </Typography>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default RegulationsHeader
