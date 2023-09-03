import axios from 'axios'
import clsx from 'clsx'
import { useLayoutEffect, useState } from 'react'
import { Box, lighten } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import _ from 'lodash'
import ItemIcon from 'app/shared-components/sections/ItemIcon'

function Testing(props) {
  const [files, setFiles] = useState(null)
  const [visibleFiles, setVisibleFiles] = useState(6) // Number of files initially visible
  const [showLoadMore, setShowLoadMore] = useState(true)

  const methods = useFormContext()
  const { watch, setValue, formState } = methods

  const images = watch('images')

  useLayoutEffect(() => {
    axios.get('api/helpers/file-manager/files/bar').then((res) => {
      if (res.status === 200) {
        setFiles(res.data)
        if (res.data.length <= visibleFiles) {
          setShowLoadMore(false) // Hide the "Load More" button if there are no more files to load
        }
      }
    })
  }, [])

  const handleLoadMore = () => {
    if (files) {
      setVisibleFiles((prevVisibleFiles) => prevVisibleFiles + 6) // Increase the number of visible files
      if (visibleFiles + 6 >= files.length) {
        setShowLoadMore(false) // Hide the "Load More" button if all files are visible
      }
    }
  }

  const handleImageClick = (el) => {
    // Check if el.url is already in the images array
    if (_.includes(images, el.url)) {
      // If it's already in the array, remove it
      const newImages = _.without(images, el.url)
      setValue('images', newImages)
      formState.dirtyFields.images = true
    } else {
      // If it's not in the array, add it
      const newImages = [...images, el.url]
      setValue('images', newImages)
      formState.dirtyFields.images = true
    }
  }
  if (!files) {
    return null
  }

  return (
    <div>
      <Box
        className="p-16 w-full rounded-16 mb-24 border"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
      >
        <Typography className="font-medium">PDF Document</Typography>
        <div className="flex flex-wrap gap-16 mt-16">
          {files.slice(0, visibleFiles).map((el) => (
            <button
              type="button"
              key={el.filename}
              tabIndex={0}
              className={clsx(
                'productImageItem flex items-center justify-center relative w-[128px] h-[128px] rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg'
              )}
              onClick={() => handleImageClick(el)}
            >
              {el.extension.toLowerCase() === 'pdf' ? (
                <ItemIcon
                  className=""
                  name="PDF"
                  color="red"
                  type="material-twotone:insert_drive_file"
                />
              ) : (
                <img
                  loading="eager"
                  className="max-w-none w-auto h-full object-contain"
                  src={`${process.env.REACT_APP_URL}/${el.url}`}
                  alt="product"
                />
              )}
            </button>
          ))}
        </div>
        {showLoadMore && (
          <Button variant="outlined" color="primary" onClick={handleLoadMore} sx={{ mt: 2 }}>
            Load More
          </Button>
        )}
      </Box>
    </div>
  )
}

export default Testing
