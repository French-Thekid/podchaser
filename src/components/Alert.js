import React from 'react'
import { Container, Text, Colours } from 'components'

/**
 *A reusable component for creating Alerts.
 * @prop {string} message - This prop is the message that will be displayed.
 */

function Alert({ message, ...rest }) {
  return (
    <Container
      padding="20px"
      background="#fc1460"
      radius="5px"
      maxWidth="500px"
      boxShadow="0px 21px 36px -9px rgba(224,224,224,1)"
      marginTop="0px"
      {...rest}
    >
      <Text size="13px" color={Colours.white}>
        {message}
      </Text>
    </Container>
  )
}

export default Alert
