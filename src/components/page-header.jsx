/** @jsx jsx */
import { jsx } from 'theme-ui'

const PageHeader = ({ title, subTitle }) => (
  <div>
    <div sx={{ fontSize: 5 }}>{title}</div>
    {subTitle ? <div sx={{ fontSize: 3, pt: 2 }}>{subTitle}</div> : null}
  </div>
)

export default PageHeader
