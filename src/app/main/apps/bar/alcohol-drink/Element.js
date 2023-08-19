import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import _ from '@lodash'
import withReducer from 'app/store/withReducer'
import { useDeepCompareEffect } from '@fuse/hooks'
import FusePageCarded from '@fuse/core/FusePageCarded'
import FuseLoading from '@fuse/core/FuseLoading'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import { getProduct, newProduct, resetProduct, selectProduct } from '../store/menu-alcohol-drinks'
import reducer from '../store'

import RoomCategoryHeader from './ElementHeader'

import BasicInfoTab from './tabs/BasicInfo'
import InformationTab from './tabs/Information'
import ServingTab from './tabs/Serving'
import ImageTab from './tabs/ImageTab'
import Features from './tabs/Features'

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter a product name')
    .min(5, 'The product name must be at least 5 characters'),
})

function RoomCategory(props) {
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
      const { alcoholId } = routeParams

      if (alcoholId === 'new') {
        /**
         * Create New Product data
         */
        dispatch(newProduct())
      } else {
        /**
         * Get Product data
         */
        dispatch(getProduct(alcoholId)).then((action) => {
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
          There is no such data!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/rooms/category"
          color="inherit"
        >
          Go to Room Categories Page
        </Button>
      </motion.div>
    )
  }

  /**
   * Wait while product data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (product && routeParams.alcoholId !== `${product.id}` && routeParams.alcoholId !== 'new')
  ) {
    return <FuseLoading />
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<RoomCategoryHeader />}
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
              <Tab className="h-64" label="Alcohol Drink Information" />
              <Tab className="h-64" label="Alcohol Drink Basic Info" />
              <Tab className="h-64" label="Alcohol Drink Serving" />
              <Tab className="h-64" label="Alcohol Image" />
              <Tab
                disabled={routeParams.alcoholId === 'new'}
                className="h-64"
                label="Alcohol Feature"
              />
            </Tabs>
            <div className="p-16 sm:p-24 max-w-3xl">
              <div className={tabValue !== 0 ? 'hidden' : ''}>
                <BasicInfoTab />
              </div>

              <div className={tabValue !== 1 ? 'hidden' : ''}>
                <InformationTab />
              </div>

              <div className={tabValue !== 2 ? 'hidden' : ''}>
                <ServingTab />
              </div>

              <div className={tabValue !== 3 ? 'hidden' : ''}>
                <ImageTab />
              </div>

              <div className={tabValue !== 4 ? 'hidden' : ''}>
                <Features />
              </div>
            </div>
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  )
}

export default withReducer('bars', reducer)(RoomCategory)
