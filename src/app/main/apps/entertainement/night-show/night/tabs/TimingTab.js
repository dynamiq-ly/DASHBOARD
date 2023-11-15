import { useFormContext } from 'react-hook-form'

import { useParams } from 'react-router-dom'
import TimingTable from '../timing/DayActivitiesTable'

function TimingTab(props) {
  const methods = useFormContext()

  const { productId } = useParams()

  return (
    <div>
      <TimingTable />
    </div>
  )
}

export default TimingTab
