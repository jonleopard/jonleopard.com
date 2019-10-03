/** @jsx jsx */
import { jsx } from 'theme-ui'

const container = props => (
  <div
    {...props}
    sx={{
      maxWidth: 'container',
      mx: 'auto',
      px: 3,
    }}
  />
)

export default container
