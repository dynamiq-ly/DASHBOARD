import FuseSvgIcon from '@fuse/core/FuseSvgIcon'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { amber, blue, green, grey, red } from '@mui/material/colors'

const TypeBadge = styled(Box)(({ theme, ...props }) => ({
  backgroundColor: {
    PDF: red[600],
    DOC: blue[600],
    XLS: green[600],
    TXT: grey[600],
    JPG: amber[600],
  }[props.color],
}))

function ItemIcon(props) {
  const { type } = props

  return (
    <FuseSvgIcon className="" size={56} color="disabled">
      {type}
    </FuseSvgIcon>
  )
}

export default ItemIcon
