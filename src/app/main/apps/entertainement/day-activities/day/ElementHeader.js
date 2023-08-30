import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useFormContext } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useHelperContext } from 'src/app/contexts/HelperContext'
import _ from '@lodash'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'
import { removeProduct, saveProduct } from '../../store/daySlice'

function ElementHeader(props) {
  const dispatch = useDispatch()
  const methods = useFormContext()
  const { formState, watch, getValues } = methods
  const { isValid, dirtyFields } = formState
  const name = watch('name')
  const images = watch('image')
  const theme = useTheme()
  const navigate = useNavigate()
  const routeParams = useParams()

  const { fetchWeeklyTimingCount } = useHelperContext()

  function handleSaveProduct() {
    dispatch(saveProduct(getValues())).then(() => {
      fetchWeeklyTimingCount()
      navigate('/entertainement/day-activities')
    })
  }

  function handleRemoveProduct() {
    dispatch(removeProduct()).then(() => {
      fetchWeeklyTimingCount()
      navigate('/entertainement/day-activities')
    })
  }

  return (
    <div className="flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32">
      <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            component={Link}
            role="button"
            to="/entertainement/day-activities"
            color="inherit"
          >
            <FuseSvgIcon size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className="flex mx-4 font-medium">Day Activities</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="hidden sm:flex"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
          >
            {images.length > 0 ? (
              <img
                className="w-32 sm:w-48 rounded"
                src={`${process.env.REACT_APP_STORAGE_UTELLS}/entertainment/days/${images}`}
                alt={name}
              />
            ) : (
              <img
                className="w-32 sm:w-48 rounded"
                src="assets/images/apps/ecommerce/product-image-placeholder.png"
                alt={name}
              />
            )}
          </motion.div>
          <motion.div
            className="flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16"
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.3 } }}
          >
            <Typography className="text-16 sm:text-20 truncate font-semibold">
              {name || 'New Activity'}
            </Typography>
            <Typography variant="caption" className="font-medium">
              Day Activity Detail
            </Typography>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex flex-1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      >
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          onClick={handleRemoveProduct}
          startIcon={<FuseSvgIcon className="hidden sm:flex">heroicons-outline:trash</FuseSvgIcon>}
        >
          Remove
        </Button>
        <Button
          className="whitespace-nowrap mx-4"
          color="primary"
          variant="contained"
          component={Link}
          disabled={routeParams.productId === 'new'}
          to={`/entertainement/day-activities/${routeParams.productId}/new`}
        >
          New Time Schedule
        </Button>
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          disabled={_.isEmpty(dirtyFields)}
          // disabled={_.isEmpty(dirtyFields) || !isValid}
          onClick={handleSaveProduct}
        >
          Save
        </Button>
      </motion.div>
    </div>
  )
}

export default ElementHeader
