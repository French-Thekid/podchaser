import React from 'react'
import 'styled-components/macro'
import { Colours, Text, Dot } from 'components'
import { convertDate } from 'utils'
import Logo from 'assets/logo.png'

/**
 * This is a reusable podcast card
 * @prop {string} handler - This prop controls what happens when this component is clicked.
 * @prop {string} recent - This prop is passed to change how the data is destructered and sent to the component on the recent podcast usecase.
 * @prop {string} item - This prop contains the object of data needed to populate the component.
 * @prop {string} image - This prop is an alternate image for usecase when component is being used in the recent episodes section.
 */

export default function PodcastCard({ handler, recent, item, image }) {
  const { id, image_url, title, updated_at, air_date, description } = item || {}

  return (
    <div
      onClick={() => handler(id)}
      css={`
        border-radius: 5px;
        border: 1px solid ${Colours.border};
        padding: 10px;
        display: grid;
        grid-template-columns: 80px 1fr;
        grid-gap: 20px;
        margin-bottom: 10px;
        margin-top: 2px;
        transition: ease-out 0.2s;
        &:hover {
          cursor: pointer;
          box-shadow: 0px 8px 20px -2px rgba(196, 196, 196, 1);
          transition: ease-out 0.2s;
          transform: translateY(-1px);
        }
      `}
    >
      <img
        src={recent ? image : image_url || Logo}
        alt="url"
        css={`
          border-radius: 5px;
          height: 70px;
        `}
      />
      <div
        css={`
          display: grid;
          grid-template-rows: max-content 1fr;
          grid-gap: 5px;
        `}
      >
        <Text size={recent ? '17px' : '20px'} weight={600}>
          {title}
        </Text>
        <div
          css={`
            display: grid;
            grid-template-columns: max-content max-content 1fr;
            grid-gap: 10px;
            align-items: start;
          `}
        >
          <Text>{convertDate(recent ? air_date : updated_at)}</Text>
          <Dot />
          <Text Contained>{description}</Text>
        </div>
      </div>
    </div>
  )
}
