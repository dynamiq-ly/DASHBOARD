import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useFormContext } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import _ from '@lodash'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'
import { removeProduct, saveProduct } from '../store/bar-detail-slice'

function ElementHeader(props) {
  const dispatch = useDispatch()
  const methods = useFormContext()
  const { productId } = useParams()
  const { formState, watch, getValues, setValue } = methods
  const { isValid, dirtyFields } = formState
  const name = watch('title')
  const images = watch('images')
  const theme = useTheme()
  const navigate = useNavigate()

  function handleSaveProduct() {
    dispatch(saveProduct(getValues())).then(() => {
      navigate(`/bar`)
    })
  }

  function handleRemoveProduct() {
    dispatch(removeProduct()).then(() => {
      navigate(`/bar`)
    })
  }

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useLayoutEffect(() => {
    if (productId !== 'new' && images) {
      setValue('images', null)
      const newImages = images.map((el) => el.image)
      setValue('images', newImages)
      setIsImageLoaded(true)
    }
  }, [])

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
            to="/bar"
            color="inherit"
          >
            <FuseSvgIcon size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className="flex mx-4 font-medium">Bars List</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="hidden sm:flex"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
          >
            {images.length > 0 ? (
              productId !== 'new' &&
              isImageLoaded && (
                <img
                  className="w-32 sm:w-48 rounded"
                  src={`${process.env.REACT_APP_STORAGE_UTELLS}/${images[0].replace(
                    'storage',
                    ''
                  )}`}
                  alt={name}
                />
              )
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
              {name || 'New Bar'}
            </Typography>
            <Typography variant="caption" className="font-medium">
              Bar Detail
            </Typography>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex"
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
          variant="contained"
          color="secondary"
          disabled={_.isEmpty(dirtyFields) || !isValid}
          onClick={handleSaveProduct}
        >
          Save
        </Button>
      </motion.div>
    </div>
  )
}

export default ElementHeader
