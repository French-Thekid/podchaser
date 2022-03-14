import React from 'react'
import 'styled-components/macro'
import { Colours } from 'components'

/**
 *A reusable component for creating Buttons.
 * @prop {string} textColor - This prop controls the color of the text being displayed.
 * @prop {string} children - This prop refers to the children passed when involked.
 * @prop {string} bgColour - This prop controls the background color of the button being displayed.
 * @prop {string} textWeight - This prop controls the weight of the text being displayed.
 */

export default function Button({
  children,
  textColor = Colours.white,
  bgColour = Colours.red,
  textWeight = '700',
}) {
  return (
    <button
      css={`
        min-width: 200px;
        padding: 0px;
        margin: 0px;
        padding: 10px;
        border-radius: 25px;
        background: ${bgColour};
        outline: none;
        border: 1px solid ${Colours.border};
        color: ${textColor};
        font-weight: ${textWeight};
        transition: ease-out 0.2s;
        &:hover {
          cursor: pointer;
          box-shadow: 0px 8px 20px -2px rgba(196, 196, 196, 1);
          transition: ease-out 0.2s;
          transform: translateY(-1px);
        }
      `}
    >
      {children}
    </button>
  )
}
