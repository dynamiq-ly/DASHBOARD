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
  {
    id: 4,
    name: 'YES',
    color: 'bg-green text-white',
  },
  {
    id: 5,
    name: 'NO',
    color: 'bg-red-700 text-white',
  },
  {
    id: 6,
    name: 'DEPENDS',
    color: 'bg-orange text-white',
  },
]

function StatusBade(props) {
  return (
    <div
      className={clsx(
        'inline text-12 uppercase font-semibold py-4 px-12 rounded-full truncate',
        props.color ? props.color : _.find(orderStatuses, { name: props.name }).color
      )}
    >
      {props.name}
    </div>
  )
}

export default StatusBade
