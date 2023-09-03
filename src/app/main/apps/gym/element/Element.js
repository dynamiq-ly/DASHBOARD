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
import FileList from 'app/shared-components/sections/FolderList'
import { getProduct, newProduct, resetProduct, selectProduct } from '../store/elementSlice'
import reducer from '../store'

import BasicInfoTab from './tabs/BasicInfo'
import ElementHeader from './ElementHeader'

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('Gym name is required')
    .min(5, 'The Gym name must be at least 5 characters'),
  location: yup
    .string()
    .required('You must enter a The textual location')
    .min(5, 'The location must be at least 5 characters'),

  description: yup
    .string()
    .required('You must enter a description')
    .min(52, 'Too short should at least be 52 characters'),

  'timing-open': yup.string().required('You must enter the opening time'),
  'timing-close': yup
    .string()
    .required('You must enter the closing time')
    .test('time-check', 'Closing time must be greater than opening time', function (value) {
      const { 'timing-open': openTime } = this.parent
      return openTime < value
    }),
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
              <Tab disabled={routeParams.productId === 'new'} className="h-64" label="Staff" />
              <Tab
                disabled={routeParams.productId === 'new'}
                className="h-64"
                label="Equipements"
              />
            </Tabs>
            <div className="p-16">
              <div className={tabValue !== 0 ? 'hidden' : ''}>
                <BasicInfoTab />
              </div>

              {routeParams.productId !== 'new' && (
                <div className={tabValue !== 1 ? 'hidden' : ''}>
                  <FileList title="Staff Information" data={folderList.staff} />
                </div>
              )}

              {routeParams.productId !== 'new' && (
                <div className={tabValue !== 2 ? 'hidden' : ''}>
                  <FileList title="Equipements" data={folderList.equipement} />
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
  staff: [
    {
      id: 'staffs',
      type: 'material-twotone:supervised_user_circle',
      contents: 'Staff',
    },
  ],
  equipement: [
    {
      id: 'equipements',
      type: 'material-twotone:monitor_weight',
      contents: 'Equipements',
    },
  ],
}

export default withReducer('gyms', reducer)(Element)
