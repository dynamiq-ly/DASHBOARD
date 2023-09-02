import { Typography } from '@mui/material'

import { motion } from 'framer-motion'

import clsx from 'clsx'
import { styled } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import withRouter from '@fuse/core/withRouter'
import FuseLoading from '@fuse/core/FuseLoading'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'
import ItemIcon from 'app/shared-components/sections/ItemIcon'

const FileManagerFolders = (props) => {
  const { data, setData, loading } = props

  const deleteImageFromStorage = (key) => {
    setData(data.filter((el) => el.filename !== key))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There are no data!
        </Typography>
      </motion.div>
    )
  }

  return (
    <Root>
      <div className="p-32 flex flex-wrap gap-16">
        {data.slice(0, 50).map((el) => (
          <div
            role="button"
            key={el.filename}
            tabIndex={0}
            className={clsx(
              'productImageItem flex items-center justify-center relative w-[150px] h-[150px] rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg'
            )}
          >
            <div className="productImage gap-4">
              <buttons>
                <FuseSvgIcon className="productImageFeaturedEye">heroicons-solid:eye</FuseSvgIcon>
              </buttons>
              <buttons onClick={() => deleteImageFromStorage(el.filename)}>
                <FuseSvgIcon className="productImageFeaturedStar">
                  heroicons-solid:trash
                </FuseSvgIcon>
              </buttons>
            </div>

            {el.dir.toLowerCase().includes('pdf') ? (
              <div className="flex flex-auto w-full items-center justify-center">
                <ItemIcon
                  className=""
                  name="PDF"
                  color="red"
                  type="material-twotone:insert_drive_file"
                />
              </div>
            ) : (
              <img
                loading="lazy"
                className="max-w-none w-auto h-full"
                src={`${process.env.REACT_APP_URL}/${el.url}`}
                alt="product"
              />
            )}
          </div>
        ))}
      </div>
    </Root>
  )
}

export default withRouter(FileManagerFolders)

const Root = styled('div')(({ theme }) => ({
  '& .productImage': {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .productImageFeaturedEye': {
    color: '#fff',
  },

  '& .productImageFeaturedStar': {
    color: red[400],
  },

  '& .productImageItem': {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    '&:hover': {
      '& .productImage': {
        opacity: 1,
      },
    },
  },
}))
