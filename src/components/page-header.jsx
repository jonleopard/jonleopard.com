/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const PageHeader = ({ title, subTitle }) => (
  <Box sx={{ width: '100%', pt: 80 }}>
    <h1 sx={{ fontSize: [7, 6], mb: 3 }}>{title}</h1>
    {subTitle ? <div sx={{ pb: 80 }}>Written on {subTitle}</div> : null}
  </Box>
)

export default PageHeader
