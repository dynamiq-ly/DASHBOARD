import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

import { Controller, useFormContext } from 'react-hook-form'

import { orange } from '@mui/material/colors'
import { lighten, styled } from '@mui/material/styles'
import clsx from 'clsx'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'

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

function TimingTab(props) {
  const methods = useFormContext()
  const { control, getValues } = methods

  return (
    <div>
      <Controller
        name="lots_teams"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Does an Away team exists ?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="lots_teams"
              label="Visibility"
              placeholder="Select setting"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0} className="flex items-center gap-4">
                <FuseSvgIcon className="text-red" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                No Away Team
              </MenuItem>
              <MenuItem value={1} className="flex items-center gap-4">
                <FuseSvgIcon className="text-green" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Away Team
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />

      {getValues('lots_teams') === 1 && (
        <>
          <Controller
            name="away_team_name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                required
                autoFocus
                id="away_team_name"
                variant="outlined"
                fullWidth
              />
            )}
          />

          <ImagesTab />
        </>
      )}
    </div>
  )
}

export default TimingTab

function ImagesTab(props) {
  const methods = useFormContext()
  const { productId } = useParams()
  const { control, watch } = methods

  const images = watch('away_team_logo')

  console.table('images => ', images)

  return (
    <Root>
      <div className="flex justify-center sm:justify-start flex-wrap -mx-16">
        <Controller
          name="away_team_logo"
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
              htmlFor="update-away-button-file"
              className="productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg"
            >
              <input
                accept="image/*"
                className="hidden"
                id="update-away-button-file"
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

        {productId !== 'new' ? (
          <Controller
            name="away_team_logo"
            control={control}
            defaultValue=""
            render={({ field: { onChange } }) => {
              const fileReader = new FileReader()

              if (typeof images !== 'string' && images !== null) {
                fileReader.onload = () => {
                  const dataUrl = fileReader.result
                  const imgElement = document.getElementById(`update-away-image-reader-update`)
                  if (imgElement) {
                    imgElement.src = dataUrl
                  }
                }

                fileReader.readAsDataURL(images)
              }

              return typeof images === 'string' ? (
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
                    src={`${process.env.REACT_APP_URL}/storage/entertainment/sports/${images}`}
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

                  <img id="update-away-image-reader-update" alt="point interest" />
                </div>
              )
            }}
          />
        ) : (
          <Controller
            name="away_team_logo"
            control={control}
            defaultValue=""
            render={({ field: { onChange } }) => {
              const fileReader = new FileReader()

              if (images) {
                fileReader.onload = () => {
                  const dataUrl = fileReader.result
                  const imgElement = document.getElementById(`update-away-image-reader`)
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
                      'update-away-image-reader productImageItem flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg'
                    )}
                  >
                    <FuseSvgIcon className="productImageFeaturedStar">
                      heroicons-solid:x
                    </FuseSvgIcon>
                    <img id="update-away-image-reader" alt="point interest" />
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
