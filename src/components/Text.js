import 'styled-components/macro'
import { Colours } from 'components'

/**
 * A component for creating text using standard scales .
 * @prop {string} size - text size accepts: xs, sm, rg, md, lg, xl, xxl defaults to rg.
 * @prop {string} mt - margin top specified in css units.
 * @prop {string} mb - margin bottom specified in css units.
 * @prop {number} lh - specify line-height.
 * @prop {number} weight - can also be string defines text weight.
 * @prop {string} color - color of the text.
 */

export default function Text({
  children,
  mt,
  mb,
  lh,
  weight,
  color,
  size = '13px',
  Contained,
  width,
}) {
  return (
    <p
      css={`
        width: ${width || 'auto'};
        color: ${color || Colours.text};
        font-weight: ${weight || 400};
        margin-top: ${mt || 'initial'};
        margin-bottom: ${mb || 'initial'};
        line-height: ${lh || 'initial'};
        font-size: ${size};
        white-space: ${Contained ? 'nowrap' : 'inherit'};
        overflow: ${Contained ? 'hidden' : 'inherit'};
        text-overflow: ${Contained ? 'ellipsis' : 'inherit'};
        font-family: 'Poppins', sans-serif;
      `}
    >
      {children}
    </p>
  )
}
