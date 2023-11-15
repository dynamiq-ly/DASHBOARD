import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { amber, blue, green, grey, red } from '@mui/material/colors'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon'

const TypeBadge = styled(Box)(({ theme, ...props }) => ({
  backgroundColor: {
    red: red[600],
    blue: blue[600],
    green: green[600],
    grey: grey[600],
    jpng: amber[600],
  }[props.color],
}))

function ItemIcon(props) {
  const { type, color, name } = props

  return (
    <div className="relative">
      <TypeBadge
        color={color}
        className="absolute left-0 bottom-0 px-6 rounded text-12 font-semibold leading-20 text-white"
      >
        {name}
      </TypeBadge>
      <FuseSvgIcon className="" size={56} color="disabled">
        {type}
      </FuseSvgIcon>
    </div>
  )
}

export default ItemIcon
