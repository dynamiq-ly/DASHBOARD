import { Box } from '@mui/system'
import { lighten } from '@mui/material/styles'
import FolderItem from './FolderItem'

/**
 * @param {Object} data
 * @returns {JSX.Element}
 */
function FileList({ data = [] }) {
  return (
    <div>
      {data.length > 0 && (
        <Box
          className="p-16 w-full rounded-16 mb-24 border"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? lighten(theme.palette.background.default, 0.4)
                : lighten(theme.palette.background.default, 0.02),
          }}
        >
          <div className="flex flex-wrap -m-8 mt-8">
            {data.map((item) => (
              <FolderItem key={item.id} item={item} />
            ))}
          </div>
        </Box>
      )}
    </div>
  )
}

export default FileList
