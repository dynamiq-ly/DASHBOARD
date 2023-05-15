import { Box } from '@mui/system'
import clsx from 'clsx'
import Typography from '@mui/material/Typography'

function CalendarAppEventContent(props) {
  const { eventInfo } = props

  return (
    <Box className={clsx('flex items-center w-full rounded-4 px-8 py-2 h-22 text-white')}>
      {/* <Typography className="text-12 font-semibold">{eventInfo.timeText}</Typography> */}
      <Typography className="text-12 px-4 truncate">{eventInfo.event.reservation_name}</Typography>
    </Box>
  )
}

export default CalendarAppEventContent
