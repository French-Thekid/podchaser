import React from 'react'
import 'styled-components/macro'
import Logo from 'assets/logo.png'
import { Text, Colours } from 'components'
import { useNavigate } from 'react-router-dom'

/**
 * This is a Navigation Bar, for this project there was no navigation items, however general concept is the same
 */

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <div
      css={`
        height: 50px;
        width: calc(100% - 10px);
        display: grid;
        padding-left: 10px;
        background: linear-gradient(
          90deg,
          rgba(43, 23, 114, 1) 0%,
          rgba(112, 29, 152, 1) 68%,
          rgba(112, 28, 127, 1) 100%
        );
        place-items: center;
      `}
    >
      <div
        css={`
          height: 50px;
          width: 100%;
          max-width: 1150px;
          display: grid;
          grid-template-columns: max-content 1fr;
          grid-gap: 10px;
          justify-items: start;
          align-items: center;
          &:hover {
            cursor: pointer;
          }
        `}
        onClick={() => navigate('/')}
        id="logo"
      >
        <img
          alt="logo"
          src={Logo}
          css={`
            height: 25px;
          `}
        />
        <Text color={Colours.white} size="20px" weight={600}>
          Podchaser
        </Text>
      </div>
    </div>
  )
}
