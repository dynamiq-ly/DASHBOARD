import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { lighten } from '@mui/material/styles'
import FolderItem from './FolderItem'

function FileList() {
  return (
    <div className="p-32">
      {foldersData.length > 0 && (
        <Box
          className="p-16 w-full rounded-16 mb-24 border"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? lighten(theme.palette.background.default, 0.4)
                : lighten(theme.palette.background.default, 0.02),
          }}
        >
          <Typography className="font-medium">Rooms Upgrades</Typography>

          <div className="flex flex-wrap -m-8 mt-8">
            {foldersData.map((item) => (
              <FolderItem key={item.id} item={item} />
            ))}
          </div>
        </Box>
      )}

      {foldersUpgrade.length > 0 && (
        <Box
          className="p-16 w-full rounded-16 mb-24 border"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? lighten(theme.palette.background.default, 0.4)
                : lighten(theme.palette.background.default, 0.02),
          }}
        >
          <Typography className="font-medium">Upgrades Request</Typography>

          <div className="flex flex-wrap -m-8 mt-8">
            {foldersUpgrade.map((item) => (
              <FolderItem key={item.id} item={item} />
            ))}
          </div>
        </Box>
      )}
    </div>
  )
}

export default FileList

const foldersUpgrade = [
  {
    id: 'upgrade-pension-request',
    type: 'material-twotone:add_to_photos',
    contents: 'Pension upgrades',
  },
  {
    id: 'upgrade-room-requests',
    type: 'material-twotone:bedroom_child',
    contents: 'Room Upgrades',
  },
  {
    id: 'extend-stay-requests',
    type: 'material-twotone:edit_calendar',
    contents: 'extend Requests',
  },
]

const foldersData = [
  {
    id: 'pensions',
    type: 'heroicons-outline:clipboard-list',
    contents: 'Pensions',
  },
  {
    id: 'upgrades',
    type: 'material-twotone:upgrade',
    contents: 'Room Upgrade',
  },
]
