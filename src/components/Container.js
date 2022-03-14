import React from 'react'
import 'styled-components/macro'

/**
 * A reusable component for creating containers.
 * @prop {string} width - This prop controls the width of the container.
 * @prop {string} height - This prop controls the height of the container.
 * @prop {string} display - This prop controls the display type.
 * @prop {string} rows - This prop controls the grid template rows for grid display (number of rows).
 * @prop {string} columns - This prop controls the grid template columns for grid display (number of columns).
 * @prop {string} columns - This prop controls the grid gap for grid display (gap between columns/rows).
 * @prop {string} children - This prop refers to the children passed when involked.
 * @prop {string} maxWidth - This prop refers to the maximun width of the container.
 * @prop {string} maxHeight - This prop refers to the maximun height of the container.
 * @prop {string} overflowY - This prop controls vertical scrollability of the container.
 * @prop {string} marginTop - This prop specifies the top margin of the container.
 * @prop {string} marginBottom - This prop specifies the bottom margin of the container.
 * @prop {string} paddingRight - This prop specifies the right padding of the container.
 * @prop {string} paddingBottom - This prop specifies the bottom padding of the container.
 * @prop {string} padding - This prop specifies the overall padding of the container.
 * @prop {string} justify - This prop specifies the X-axis alignment of the container.
 * @prop {string} align - This prop specifies the Y-axis alignment of the container.
 * @prop {string} border - This prop specifies the border style of the container.
 * @prop {string} leftTopRadius - This prop specifies the top left border radius of the container.
 * @prop {string} rightTopRadius - This prop specifies the top right border radius of the container.
 * @prop {string} leftBottomRadius - This prop specifies the bottom left border radius of the container.
 * @prop {string} rightBottomRadius - This prop specifies the bottom right border radius of the container.
 * @prop {string} background - This prop specifies the background color of the container.
 * @prop {string} position - This prop specifies the position of the container.
 * @prop {string} bottom - This prop specifies the bottom position for absolute position of the container.
 * @prop {string} left - This prop specifies the left position for absolute position of the container.
 * @prop {string} boxShadow - This prop specifies the shadow of the container.
 */

export default function Container({
  width = '100%',
  display = 'block',
  rows = 'auto',
  columns = 'auto',
  gap = '10px',
  children,
  maxWidth = '100%',
  maxHeight = '100%',
  overflowY = 'none',
  marginTop = 'auto',
  marginBottom = '0px',
  paddingRight = '0px',
  paddingBottom = 'auto',
  padding = 'auto',
  height = 'max-content',
  justify = 'start',
  align = 'start',
  border = 'none',
  leftTopRadius = '0px',
  rightTopRadius = '0px',
  leftBottomRadius = '0px',
  rightBottomRadius = '0px',
  radius = 'none',
  background = 'inherit',
  position = 'relative',
  bottom = 'inherit',
  left = 'inherit',
  boxShadow = 'none',
  ...rest
}) {
  return (
    <div
      css={`
        box-shadow: ${boxShadow};
        height: ${height};
        width: ${width};
        max-width: ${maxWidth};
        max-height: ${maxHeight};
        display: ${display};
        grid-gap: ${gap};
        grid-template-columns: ${columns};
        grid-template-rows: ${rows};
        overflow-y: ${overflowY};
        margin-top: ${marginTop};
        margin-bottom: ${marginBottom};
        padding-right: ${paddingRight};
        padding-bottom: ${paddingBottom};
        justify-items: ${justify};
        align-items: ${align};
        border: ${border};
        border-top-left-radius: ${leftTopRadius};
        border-top-right-radius: ${rightTopRadius};
        border-bottom-left-radius: ${leftBottomRadius};
        border-bottom-right-radius: ${rightBottomRadius};
        border-radius: ${radius};
        padding: ${padding};
        background: ${background};
        position: ${position};
        bottom: ${bottom};
        left: ${left};
      `}
      {...rest}
    >
      {children}
    </div>
  )
}
