import { Button, ButtonGroup, Typography } from '@mui/material'
import { Box, lighten } from '@mui/system'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import NavLinkAdapter from '@fuse/core/NavLinkAdapter/NavLinkAdapter'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { getValues } = methods

  const { productId } = useParams()

  const [filter, setFilter] = useState('')

  return (
    <div className="w-full flex flex-col items-center gap-32">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => setFilter('')}>All Categories</Button>
        <Button onClick={() => setFilter('soft')}>Soft Categories</Button>
        <Button onClick={() => setFilter('alcohol')}>Alcoholic Categories</Button>
      </ButtonGroup>

      <div className="flex-1 flex gap-5 flex-wrap w-full">
        <Box className="relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16 bg-blue-700">
          <NavLinkAdapter
            className="flex flex-col h-full w-full"
            to={`/bar/${productId}/menu/new`}
            role="button"
          >
            <div className="flex flex-auto w-full items-center justify-center text-white">
              <FuseSvgIcon className="sm:flex text-lg">heroicons-outline:plus</FuseSvgIcon>
            </div>
            <div className="flex shrink flex-col justify-center text-center">
              <Typography className="truncate text-12 font-medium text-white">
                Assign new
              </Typography>
            </div>
          </NavLinkAdapter>
        </Box>
        {getValues('menu')
          .filter((item) => item.type.includes(filter))
          .map((el) => (
            <Box
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
              className="relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16"
            >
              <NavLinkAdapter
                className="flex flex-col h-full w-full"
                to={`/bar/${productId}/menu/${el.id}`}
                role="button"
              >
                <div className="flex flex-auto w-full items-center justify-center">
                  <img
                    alt={el.name}
                    className="h-[72px] w-[72px] rounded-8"
                    src={`${process.env.REACT_APP_STORAGE_UTELLS}/bars/menu/${el.image}`}
                  />
                </div>
                <div className="flex shrink flex-col justify-center text-center">
                  <Typography className="truncate text-14 font-semibold">{el.name}</Typography>
                  <Typography className="truncate text-12 font-medium">{el.type}</Typography>
                </div>
              </NavLinkAdapter>
            </Box>
          ))}
      </div>
    </div>
  )
}

export default BasicInfoTab
