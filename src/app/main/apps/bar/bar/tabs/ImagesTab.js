import { orange } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'
import _ from 'lodash'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'
import Testing from './Testing'

const Root = styled('div')(({ theme }) => ({
  '& .productImageFeaturedStar': {
    position: 'absolute',
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0,
  },

  '& .productImageUpload': {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },

  '& .productImageItem': {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    '&:hover': {
      '& .productImageFeaturedStar': {
        opacity: 0.8,
      },
    },
    '&.featured': {
      pointerEvents: 'none',
      boxShadow: theme.shadows[3],
      '& .productImageFeaturedStar': {
        opacity: 1,
      },
      '&:hover .productImageFeaturedStar': {
        opacity: 1,
      },
    },
  },
}))

function ImagesTab(props) {
  const methods = useFormContext()

  const { watch, setValue, formState } = methods

  const images = watch('images')

  return (
    <Root>
      <div className="flex justify-center sm:justify-start flex-wrap -mx-16">
        {images.map((el, index) => (
          <div
            role="button"
            tabIndex={0}
            className={clsx(
              'productImageItem flex items-center justify-center relative w-[150px] h-[150px] rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg'
            )}
            key={index}
          >
            <div className="absolute w-full h-full flex items-center justify-center z-9999 bg-black/70 opacity-0 hover:opacity-100 ">
              <button
                type="button"
                onClick={() => {
                  setValue('images', _.without(images, el))
                  formState.dirtyFields.images = true
                }}
              >
                <FuseSvgIcon className="text-red-400">heroicons-solid:trash</FuseSvgIcon>
              </button>
            </div>

            {typeof el === 'string' && (
              <img
                className="max-w-none w-auto h-full object-contain"
                src={`${process.env.REACT_APP_STORAGE_UTELLS}/${el.replace('storage', '')}`}
                alt="product"
              />
            )}
          </div>
        ))}
      </div>
      <Testing />
    </Root>
  )
}

export default ImagesTab
