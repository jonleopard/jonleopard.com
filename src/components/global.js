import React from 'react'
import { Global } from '@emotion/core'

export default props => (
  <Global
    styles={theme => ({
      body: {
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
      },
    })}
  />
)
