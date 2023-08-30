import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import moment from 'moment'

import { useEffect, useState } from 'react'

import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Checkbox } from '@mui/material'
import FuseScrollbars from '@fuse/core/FuseScrollbars'
import withRouter from '@fuse/core/withRouter'
import FuseLoading from '@fuse/core/FuseLoading'

import StatusBade from 'app/shared-components/StatusBadge'
import DayActivitiesTableHead from './DayActivitiesTableHead'

function TimingTable(props) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()
  const navigate = useNavigate()

  const [selected, setSelected] = useState([])

  useEffect(() => {
    axios
      .get(`/api/entertainement/day-activities/${productId}`)
      .then((res) => setData(res.data.timing))
      .then(() => setLoading(false))
  }, [productId]) // eslint-disable-line

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    )
  }

  const handleDelete = (id) => {
    axios
      .delete(`/api/entertainement/day-activities/timing/${id}`)
      .then((res) =>
        axios
          .get(`/api/entertainement/day-activities/${productId}`)
          .then((response) => setData(response.data.timing))
          .then(() => setLoading(false))
      )
      .then(() => setLoading(false))
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      setSelected(data.map((n) => n.id))
      return
    }
    setSelected([])
  }

  function handleDeselect() {
    setSelected([])
  }

  return (
    <div>
      <div className="w-full flex flex-col min-h-full">
        <FuseScrollbars className="grow overflow-x-auto">
          <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
            <DayActivitiesTableHead rowCount={data.length} />

            <TableBody>
              {data.map((n) => {
                return (
                  <TableRow
                    className="h-72 cursor-pointer"
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={n.id}
                  >
                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      <div className="flex flex-wrap items-center gap-4">
                        {JSON.parse(n.age).map((age) => (
                          <StatusBade key={age.id} name={age.age} color="bg-blue-700 text-white" />
                        ))}
                      </div>
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {moment(n.day, 'YYYY-MM-DD').format('dddd Do MMMM YYYY')}
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {n.start_time}
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {n.end_time}
                    </TableCell>

                    <TableCell
                      className="p-4 md:p-16 truncate flex items-center gap-10"
                      component="th"
                      scope="row"
                    >
                      <Checkbox />

                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                          navigate(`/entertainement/day-activities/${productId}/${n.id}`)
                        }
                      >
                        Edit
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleDelete(n.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </FuseScrollbars>
      </div>
    </div>
  )
}

export default withRouter(TimingTable)
