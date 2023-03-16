import Typography from '@mui/material/Typography'
import NavLinkAdapter from '@fuse/core/NavLinkAdapter'
import { Box } from '@mui/system'
import ItemIcon from './ItemIcon'

function FolderItem(props) {
  const { item } = props

  if (!item) {
    return null
  }

  return (
    <Box
      sx={{ backgroundColor: 'background.paper' }}
      className="relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16"
    >
      <NavLinkAdapter className="flex flex-col h-full w-full" to={item.id} role="button">
        <div className="flex flex-auto w-full items-center justify-center">
          <ItemIcon className="" type={item.type} />
        </div>
        <div className="flex shrink flex-col justify-center text-center">
          <Typography className="truncate text-12 font-medium">{item.name}</Typography>
          {item.contents && (
            <Typography className="truncate text-12 font-medium" color="text.secondary">
              {item.contents}
            </Typography>
          )}
        </div>
      </NavLinkAdapter>
    </Box>
  )
}

export default FolderItem
