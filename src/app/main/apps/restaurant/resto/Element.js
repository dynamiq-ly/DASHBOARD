import FuseLoading from '@fuse/core/FuseLoading'
import FusePageCarded from '@fuse/core/FusePageCarded'
import { useDeepCompareEffect } from '@fuse/hooks'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import withReducer from 'app/store/withReducer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import _ from '@lodash'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import FileList from 'app/shared-components/sections/FolderList'
import { getProduct, newProduct, resetProduct, selectProduct } from '../store/restaurantSlice'
import reducer from '../store'

import BasicInfoTab from './tabs/BasicInfo'
import DisponibilyTab from './tabs/DisponibilyTab'
import BookingTab from './tabs/BookingTab'
import WeeklyThemes from './tabs/WeeklyTheme'
import ImagesTab from './tabs/ImagesTab'
import ElementHeader from './ElementHeader'

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter a product name')
    .min(5, 'The product name must be at least 5 characters'),
})

function Element(props) {
  const dispatch = useDispatch()
  const product = useSelector(selectProduct)
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'))

  const routeParams = useParams()
  const [tabValue, setTabValue] = useState(0)
  const [noProduct, setNoProduct] = useState(false)
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  })
  const { reset, watch, control, onChange, formState } = methods
  const form = watch()

  useDeepCompareEffect(() => {
    function updateProductState() {
      const { productId } = routeParams

      if (productId === 'new') {
        /**
         * Create New Product data
         */
        dispatch(newProduct())
      } else {
        /**
         * Get Product data
         */
        dispatch(getProduct(productId)).then((action) => {
          /**
           * If the requested product is not exist show message
           */
          if (!action.payload) {
            setNoProduct(true)
          }
        })
      }
    }

    updateProductState()
  }, [dispatch, routeParams])

  useEffect(() => {
    if (!product) {
      return
    }
    /**
     * Reset the form on product state changes
     */
    reset(product)
  }, [product, reset])

  useEffect(() => {
    return () => {
      /**
       * Reset Product on component unload
       */
      dispatch(resetProduct())
      setNoProduct(false)
    }
  }, [dispatch])

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value)
  }

  /**
   * Show Message if the requested products is not exists
   */
  if (noProduct) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such product!
        </Typography>
        <Button className="mt-24" component={Link} variant="outlined" to="/safety" color="inherit">
          Go to Safety Page
        </Button>
      </motion.div>
    )
  }

  /**
   * Wait while product data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (product && routeParams.productId !== `${product.id}` && routeParams.productId !== 'new')
  ) {
    return <FuseLoading />
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<ElementHeader />}
        content={
          <>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              classes={{ root: 'w-full h-64 border-b-1' }}
            >
              <Tab className="h-64" label="Basic Info" />
              <Tab className="h-64" label="Booking Info" />
              <Tab className="h-64" label="Weekly Theme Info" />
              <Tab className="h-64" label="Images Tab" />
              <Tab className="h-64" label="Config" />
              {routeParams.productId !== 'new' && <Tab className="h-64" label="Folder" />}
            </Tabs>
            <div className="p-16  max-w-3xl">
              <div className={tabValue !== 0 ? 'hidden' : ''}>
                <BasicInfoTab />
              </div>

              <div className={tabValue !== 1 ? 'hidden' : ''}>
                <BookingTab />
              </div>

              <div className={tabValue !== 2 ? 'hidden' : ''}>
                <WeeklyThemes />
              </div>

              <div className={tabValue !== 3 ? 'hidden' : ''}>
                <ImagesTab />
              </div>

              <div className={tabValue !== 4 ? 'hidden' : ''}>
                <DisponibilyTab />
              </div>

              {routeParams.productId !== 'new' && (
                <div className={tabValue !== 5 ? 'hidden' : ''}>
                  <FileList title="Menu Catalog" data={folderList.menus} />
                  <FileList title="Management" data={folderList.management} />
                  <FileList title="Bookings" data={folderList.reservation} />
                </div>
              )}
            </div>
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  )
}

const folderList = {
  menus: [
    {
      id: 'food-menu',
      type: 'material-twotone:restaurant',
      contents: 'Food Menu',
    },
    {
      id: 'drinks-menu',
      type: 'material-twotone:coffee',
      contents: 'Drinks Menu',
    },
  ],
  management: [
    {
      id: 'chefs',
      type: 'material-twotone:restaurant',
      contents: 'Chef',
    },
    {
      id: 'specialities',
      type: 'material-twotone:coffee',
      contents: 'Specialities',
    },
    {
      id: 'servings',
      type: 'material-twotone:timelapse',
      contents: 'Servings',
    },
    {
      id: 'regulations',
      type: 'material-twotone:insert_drive_file',
      contents: 'Regulations',
    },
  ],
  reservation: [
    {
      id: 'reservations',
      type: 'material-twotone:collections_bookmark',
      contents: 'Reservation',
    },
  ],
}

export default withReducer('restaurantFacility', reducer)(Element)
