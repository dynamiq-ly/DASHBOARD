import FuseScrollbars from '@fuse/core/FuseScrollbars'
import _ from '@lodash'
import Checkbox from '@mui/material/Checkbox'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import withRouter from '@fuse/core/withRouter'
import FuseLoading from '@fuse/core/FuseLoading'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'
import { getMeasures, selectProducts, selectProductsSearchText } from '../store/restaurantsSlice'
import RestaurantsTableHead from './RestaurantTableHead'

function RestaurantsTable(props) {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const searchText = useSelector(selectProductsSearchText)

  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState([])
  const [data, setData] = useState(products)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  })

  useEffect(() => {
    dispatch(getMeasures()).then(() => setLoading(false))
  }, [dispatch])

  useEffect(() => {
    if (searchText.length !== 0) {
      setData(
        _.filter(products, (item) =>
          item.restaurant_name.toLowerCase().includes(searchText.toLowerCase())
        )
      )
      setPage(0)
    } else {
      setData(products)
    }
  }, [products, searchText])

  function handleRequestSort(event, property) {
    const id = property
    let direction = 'desc'

    if (order.id === property && order.direction === 'desc') {
      direction = 'asc'
    }

    setOrder({
      direction,
      id,
    })
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

  function handleClick(item) {
    props.navigate(`${item.id}`)
  }

  function handleCheck(event, id) {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  function handleChangePage(event, value) {
    setPage(value)
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There are no data!
        </Typography>
      </motion.div>
    )
  }

  return (
    <div className="w-full flex flex-col min-h-full">
      <FuseScrollbars className="grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <RestaurantsTableHead
            selectedProductIds={selected}
            order={order}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            onMenuItemClick={handleDeselect}
          />

          <TableBody>
            {_.orderBy(
              data,
              [
                (o) => {
                  switch (order.id) {
                    case 'room_name': {
                      return o[order.room_name]
                    }
                    default: {
                      return o[order.id]
                    }
                  }
                },
              ],
              [order.direction]
            )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((n) => {
                const isSelected = selected.indexOf(n.id) !== -1
                return (
                  <TableRow
                    className="h-72 cursor-pointer"
                    hover
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                    onClick={(event) => handleClick(n)}
                  >
                    <TableCell className="w-40 md:w-64 text-center" padding="none">
                      <Checkbox
                        checked={isSelected}
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => handleCheck(event, n.id)}
                      />
                    </TableCell>

                    <TableCell
                      className="w-52 h-52 px-4 md:px-0"
                      component="th"
                      scope="row"
                      padding="none"
                    >
                      {n.images.length === 0 ? (
                        <img
                          className="w-full block rounded"
                          alt={`${n.restaurant_name}-${n.restaurant_description}`}
                          src="assets/images/apps/ecommerce/product-image-placeholder.png"
                        />
                      ) : (
                        <img
                          className="w-full block rounded"
                          alt={`${n.restaurant_name}-${n.restaurant_description}`}
                          src={`${process.env.REACT_APP_URL}/storage/restaurants/${n.images[0].image}`}
                        />
                      )}
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {n.restaurant_name}
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {/* eslint-disable-next-line no-nested-ternary */}
                      {n.specialities.length > 0 ? (
                        n.specialities.find((speciality) => speciality.speciality_main === 1) ? (
                          <div className="inline text-12 font-semibold py-4 px-12 rounded-full truncate bg-blue-700 text-white">
                            {
                              n.specialities.find((speciality) => speciality.speciality_main === 1)
                                .speciality_name
                            }
                          </div>
                        ) : (
                          <div className="inline text-12 font-semibold py-4 px-12 rounded-full truncate bg-purple-500 text-white">
                            ({n.specialities.length}) speciality
                          </div>
                        )
                      ) : (
                        <div className="inline text-12 font-semibold py-4 px-12 rounded-full truncate bg-red-700 text-white">
                          No speciality
                        </div>
                      )}
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {n.restaurant_description.length > 72
                        ? `${n.restaurant_description.slice(0, 72)}...`
                        : n.restaurant_description}
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {n.booking.can_book ? (
                        <FuseSvgIcon className="text-green" size={20}>
                          heroicons-outline:check-circle
                        </FuseSvgIcon>
                      ) : (
                        <FuseSvgIcon className="text-red" size={20}>
                          heroicons-outline:minus-circle
                        </FuseSvgIcon>
                      )}
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {n.schedule.isBuffet ? (
                        <FuseSvgIcon className="text-green" size={20}>
                          heroicons-outline:check-circle
                        </FuseSvgIcon>
                      ) : (
                        <FuseSvgIcon className="text-red" size={20}>
                          heroicons-outline:minus-circle
                        </FuseSvgIcon>
                      )}
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {n.isVisible ? (
                        <FuseSvgIcon className="text-green" size={20}>
                          heroicons-outline:check-circle
                        </FuseSvgIcon>
                      ) : (
                        <FuseSvgIcon className="text-red" size={20}>
                          heroicons-outline:minus-circle
                        </FuseSvgIcon>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </FuseScrollbars>

      <TablePagination
        className="shrink-0 border-t-1"
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default withRouter(RestaurantsTable)
