import _ from '@lodash'
import clsx from 'clsx'

export const orderStatuses = [
  {
    id: 1,
    name: 'minor',
    color: 'bg-green text-white',
  },
  {
    id: 2,
    name: 'normal',
    color: 'bg-orange text-white',
  },

  {
    id: 3,
    name: 'urgent',
    color: 'bg-red-700 text-white',
  },
]

function StatusBade(props) {
  return (
    <div
      className={clsx(
        'inline text-12 uppercase font-semibold py-4 px-12 rounded-full truncate',
        _.find(orderStatuses, { name: props.name }).color
      )}
    >
      {props.name}
    </div>
  )
}

export default StatusBade
