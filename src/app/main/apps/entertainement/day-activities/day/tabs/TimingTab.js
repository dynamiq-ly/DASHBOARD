import { useFormContext } from 'react-hook-form'

import TimingTable from '../timing/DayActivitiesTable'

function TimingTab(props) {
  const methods = useFormContext()

  return (
    <div>
      <TimingTable />
    </div>
  )
}

export default TimingTab
