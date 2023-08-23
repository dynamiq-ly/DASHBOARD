import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Tooltip from '@mui/material/Tooltip'
import TableHead from '@mui/material/TableHead'
import { lighten } from '@mui/material/styles'

const rows = [
  {
    id: 'age',
    align: 'left',
    disablePadding: false,
    label: 'Age',
    sort: true,
  },
  {
    id: 'date',
    align: 'left',
    disablePadding: false,
    label: 'Date',
    sort: true,
  },
  {
    id: 'start',
    align: 'left',
    disablePadding: false,
    label: 'Starting',
    sort: true,
  },
  {
    id: 'ending',
    align: 'left',
    disablePadding: false,
    label: 'Ending',
    sort: true,
  },
  {
    id: 'delete',
    align: 'right',
    disablePadding: true,
    label: '',
    sort: true,
  },
]

const NightShowsTableHead = (props) => {
  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        {rows.map((row) => {
          return (
            <TableCell
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
              className="p-4 md:p-16"
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'normal'}
            >
              {row.sort && (
                <Tooltip
                  title="Sort"
                  placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel className="font-semibold">{row.label}</TableSortLabel>
                </Tooltip>
              )}
            </TableCell>
          )
        }, this)}
      </TableRow>
    </TableHead>
  )
}

export default NightShowsTableHead
