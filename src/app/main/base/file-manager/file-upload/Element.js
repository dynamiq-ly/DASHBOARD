import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import withReducer from 'app/store/withReducer'
import { useDeepCompareEffect } from '@fuse/hooks'
import FusePageCarded from '@fuse/core/FusePageCarded'
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery'
import { newProduct, resetProduct, selectProduct } from '../store/image-upload-slice'
import reducer from '../store'

import BasicInfoTab from './tabs/BasicInfo'
import ElementHeader from './ElementHeader'

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('File name is required')
    .min(5, 'The File name must be at least 5 characters'),
  feature: yup.string().required('The feature that the file should be associated to is required'),
  path: yup.string(),
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

      if (productId === 'upload') {
        /**
         * Create New Product data
         */
        dispatch(newProduct())
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
            </Tabs>
            <div className="p-16  max-w-3xl">
              <div className={tabValue !== 0 ? 'hidden' : ''}>
                <BasicInfoTab />
              </div>
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

export default withReducer('imageUpload', reducer)(Element)
