import React from 'react'
import 'styled-components/macro'
import { Text, Loading, PodcastCard, Alert, Container } from 'components'
import { useFetch } from 'hooks'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const { loading, error, data } = useFetch({
    url: 'userlists/27998',
  })

  if (loading) return <Loading />
  if (error) return <Alert message="Failed to Load Podcasts" />

  const { list: { items = [] } = {} } = data || {}

  const podcardHandler = (id) => navigate(`podcast/${id}`)

  return (
    <Container
      maxWidth="1150px"
      display="grid"
      rows="repeat(2, max-content) 1fr"
      overflowY="auto"
      height="calc(100% - 20px)"
      width="calc(100% - 20px)"
      padding="10px"
    >
      <Text size="40px" weight={700}>
        All Podcast
      </Text>
      <Text size="15px" weight={400}>
        Browse the details of every podcast, ever.
      </Text>
      <Container
        height="calc(100% - 10px)"
        width="calc(100% - 10px)"
        overflowY="auto"
        paddingRight="10px"
        marginTop="10px"
      >
        {items.map((item, index) => {
          const { entity = {} } = item || {}
          //One of the podcast is empty, to prevent user from seeing missing information and take a preventative measure, all podcast without ID wont be rendered to user
          if (entity.id)
            return (
              <PodcastCard handler={podcardHandler} item={entity} key={index} />
            )
          return null
        })}
      </Container>
    </Container>
  )
}
