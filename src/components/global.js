import React from 'react'
import { Global } from '@emotion/core'

const global = props => (
  <Global
    styles={theme => ({
      body: {
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
      },
    })}
  />
)

export default global
