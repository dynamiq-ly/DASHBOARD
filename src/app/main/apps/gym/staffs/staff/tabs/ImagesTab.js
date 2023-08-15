import { orange } from '@mui/material/colors'
import { lighten, styled } from '@mui/material/styles'
import clsx from 'clsx'
import { Controller, useFormContext } from 'react-hook-form'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'

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
  const { chefId } = useParams()
  const { control, watch } = methods

  const images = watch('image')

  console.table('images => ', images)

  return (
    <Root>
      <div className="flex justify-center sm:justify-start flex-wrap -mx-16">
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
              component="label"
              htmlFor="button-file"
              className="productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg"
            >
              <input
                accept="image/*"
                className="hidden"
                id="button-file"
                type="file"
                multiple
                onChange={async (e) => {
                  function readFileAsync() {
                    return new Promise((resolve, reject) => {
                      const file = e.target.files[0]
                      if (!file) {
                        return
                      }

                      const reader = new FileReader()

                      reader.onload = () => {
                        resolve(file)
                      }

                      reader.onerror = reject

                      reader.readAsBinaryString(file)
                    })
                  }

                  const newImage = await readFileAsync()

                  onChange(newImage)
                }}
              />
              <FuseSvgIcon size={32} color="action">
                heroicons-outline:upload
              </FuseSvgIcon>
            </Box>
          )}
        />

        {chefId !== 'new' ? (
          <Controller
            name="image"
            control={control}
            defaultValue=""
            render={({ field: { onChange } }) => {
              const fileReader = new FileReader()

              if (typeof images !== 'string') {
                fileReader.onload = () => {
                  const dataUrl = fileReader.result
                  const imgElement = document.getElementById(`image-reader-update`)
                  if (imgElement) {
                    imgElement.src = dataUrl
                  }
                }

                fileReader.readAsDataURL(images)
              }

              return images && typeof images === 'string' ? (
                <div
                  onClick={() => onChange(images)}
                  onKeyDown={() => onChange(images)}
                  role="button"
                  tabIndex={0}
                  className={clsx(
                    'productImageItem flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg'
                  )}
                >
                  <FuseSvgIcon className="productImageFeaturedStar">
                    heroicons-solid:star
                  </FuseSvgIcon>

                  <img
                    className="max-w-none w-auto h-full"
                    src={`${process.env.REACT_APP_STORAGE_UTELLS}/gym/staffs/${images}`}
                    alt="product"
                  />
                </div>
              ) : (
                <div
                  onClick={() => onChange(images)}
                  onKeyDown={() => onChange(images)}
                  role="button"
                  tabIndex={0}
                  className={clsx(
                    'productImageItem flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg'
                  )}
                >
                  <FuseSvgIcon className="productImageFeaturedStar">
                    heroicons-solid:star
                  </FuseSvgIcon>

                  <img id="image-reader-update" alt="point interest" />
                </div>
              )
            }}
          />
        ) : (
          <Controller
            name="image"
            control={control}
            defaultValue=""
            render={({ field: { onChange } }) => {
              const fileReader = new FileReader()

              if (images) {
                fileReader.onload = () => {
                  const dataUrl = fileReader.result
                  const imgElement = document.getElementById(`image-reader`)
                  if (imgElement) {
                    imgElement.src = dataUrl
                  }
                }

                fileReader.readAsDataURL(images)

                return (
                  <div
                    onClick={() => onChange(images)}
                    onKeyDown={() => onChange(images)}
                    role="button"
                    tabIndex={0}
                    className={clsx(
                      'image-reader productImageItem flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg'
                    )}
                  >
                    <FuseSvgIcon className="productImageFeaturedStar">
                      heroicons-solid:x
                    </FuseSvgIcon>
                    <img id="image-reader" alt="point interest" />
                  </div>
                )
              }
              return <></>
            }}
          />
        )}
      </div>
    </Root>
  )
}

export default ImagesTab
