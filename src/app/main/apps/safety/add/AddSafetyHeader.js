import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useFormContext } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import _ from '@lodash'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'
import { saveMeasure, removeMeasure } from '../../store/protocolSlice'

function AddSafetyHeader(props) {
  const dispatch = useDispatch()
  const methods = useFormContext()
  const { formState, watch, getValues } = methods
  const { isValid, dirtyFields } = formState
  const theme = useTheme()
  const navigate = useNavigate()

  function handlesaveMeasure() {
    dispatch(saveMeasure(getValues()))
  }

  function handleremoveMeasure() {
    dispatch(removeMeasure()).then(() => {
      navigate('/apps/e-commerce/products')
    })
  }

  return (
    <div className='flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32'>
      <div className='flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0'>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}>
          <Typography
            className='flex items-center sm:mb-12'
            component={Link}
            role='button'
            to='/'
            color='inherit'>
            <FuseSvgIcon size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className='flex mx-4 font-medium'>Measures</span>
          </Typography>
        </motion.div>
      </div>
      <motion.div
        className='flex'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}>
        <Button
          className='whitespace-nowrap mx-4'
          variant='contained'
          color='secondary'
          onClick={handleremoveMeasure}
          startIcon={
            <FuseSvgIcon className='hidden sm:flex'>
              heroicons-outline:trash
            </FuseSvgIcon>
          }>
          Remove
        </Button>
        <Button
          className='whitespace-nowrap mx-4'
          variant='contained'
          color='secondary'
          disabled={_.isEmpty(dirtyFields) || !isValid}
          onClick={handlesaveMeasure}>
          Save
        </Button>
      </motion.div>
    </div>
  )
}

export default AddSafetyHeader
