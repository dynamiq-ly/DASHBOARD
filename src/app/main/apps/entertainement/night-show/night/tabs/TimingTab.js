import { useFormContext } from 'react-hook-form'

import { Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import TimingTable from '../timing/DayActivitiesTable'

function TimingTab(props) {
  const methods = useFormContext()

  const { productId } = useParams()

  return (
    <div>
      <div className="flex items-center justify-end mb-24">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to={`/entertainement/night-show/${productId}/new`}
        >
          Add new Timing Schedule
        </Button>
      </div>
      <TimingTable />
    </div>
  )
}

export default TimingTab
