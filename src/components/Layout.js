import React from 'react'
import 'styled-components/macro'

/**
 * This is a parent container for the applicaiton layout
 */

export default function Layout({ children, ...rest }) {
  return (
    <div
      {...rest}
      css={`
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-rows: max-content 1fr;
        grid-gap: 20px;
        justify-items: center;
      `}
    >
      {children}
    </div>
  )
}
