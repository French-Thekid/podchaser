import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'styled-components/macro'
import { Colours } from 'components'
import Logo from 'assets/logo.png'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div
      id="404Page"
      css={`
        margin: 0px auto;
        width: 100%;
        text-align: center;
      `}
    >
      <img
        src={Logo}
        css={`
          margin: auto;
        `}
        width="120px"
        alt="Logo"
      />

      <p
        css={`
          font-size: 40px;
          font-weight: 600;
          color: ${Colours.red};
        `}
      >
        404
      </p>

      <p
        css={`
          font-size: 25px;
          font-weight: 400;
        `}
      >
        Page Not Found
      </p>

      <hr
        css={`
          width: 50%;
          margin: 10px auto 10px auto;
          border: 1px solid ${Colours.border};
        `}
      />

      <p>
        Try refreshing this page, or going back and attempting the action again.
        <br />
        The page may have been moved or the resource was deleted.
        <br />
        Please contact your Admin or Support if this problem persist
      </p>

      <button
        css={`
          text-decoration: none;
          color: ${Colours.red};
          font-size: 15px;
          outline: none;
          background-color: inherit;
          border: none;
          &:hover {
            cursor: pointer;
          }
        `}
        id="return"
        onClick={() => {
          navigate('/')
        }}
      >
        Home
      </button>
    </div>
  )
}
