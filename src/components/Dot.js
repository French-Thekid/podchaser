import React from 'react'
import 'styled-components/macro'
import { Colours } from 'components'

/**
 *Reuasable Period list looking UI element.
 */

export default function Dot() {
  return (
    <div
      css={`
        height: 5px;
        width: 5px;
        background-color: ${Colours.black};
        border-radius: 50%;
        display: inline-block;
        margin-top: 7px;
      `}
    />
  )
}
