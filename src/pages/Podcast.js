import React from 'react'
import 'styled-components/macro'
import { useFetch } from 'hooks'
import {
  Loading,
  Colours,
  PodcastCard,
  Text,
  Dot,
  Button,
  Container,
  Alert,
} from 'components'
import { useParams } from 'react-router-dom'
import BeautyStars from 'beauty-stars'
import Logo from 'assets/logo.png'
import { countFormatter } from 'utils'

export default function Podcast() {
  const { id } = useParams()

  const { loading, error, data } = useFetch({
    url: `podcasts/${id}`,
  })

  if (loading) return <Loading />
  console.log(error)
  if (error)
    return <Alert id="podcastError" message="Failed to Load selected Podcast" />

  const {
    rating = 0,
    title,
    number_of_episodes,
    image_url,
    description,
    rating_count,
    latest_episode,
  } = data || {}

  return (
    <Container
      maxWidth="1150px"
      display="grid"
      columns="1fr 300px"
      overflowY="auto"
      gap="40px"
      id="podcastMainContainer"
      height="calc(100% - 20px)"
      width="calc(100% - 20px)"
      padding="10px"
    >
      <Container height="100%" display="grid" rows="max-content 1fr">
        <Container height="100%" display="grid" rows="180px 1fr">
          <Container
            display="grid"
            columns="max-content 1fr"
            gap="20px"
            align="center"
          >
            <img
              id="podcastImage"
              src={image_url || Logo}
              alt="url"
              css={`
                border-radius: 10px;
                height: 150px;
              `}
            />
            <Container
              align="center"
              display="grid"
              rows="repeat(3, max-content)"
              marginTop="0px"
            >
              <Text size="20px" weight={700}>
                {title}
              </Text>
              <Text size="15px">{`A Podcast with ${number_of_episodes} episodes`}</Text>
              <BeautyStars
                maxStars={5}
                inactiveColor={'#D3D5DA'}
                activeColor={Colours.red}
                value={rating}
                size={'20px'}
                editable={false}
              />
            </Container>
          </Container>
          <Container
            marginTop="10px"
            maxHeight="100px"
            height="100%"
            overflowY="auto"
            display="grid"
            rows="1fr max-content"
          >
            <Text size="13px">{description}</Text>
            <Container
              height="30px"
              position="absolute"
              bottom={0}
              left={0}
              margin={0}
              background={`linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.2329306722689075) 0%,
                rgba(255, 255, 255, 1) 100%
              )`}
            />
          </Container>
        </Container>
        <Container
          marginTop="0px"
          display="grid"
          rows="max-content 1fr"
          overflowY="auto"
          height="100%"
        >
          <Text size="20px" weight="600">
            Recent Episodes
          </Text>
          <Container
            width="calc(100% - 10px)"
            height="100%"
            paddingRight="10px"
            overflowY="auto"
          >
            <PodcastCard
              recent
              handler={() => {}}
              item={latest_episode}
              image={image_url}
            />
          </Container>
        </Container>
      </Container>
      <Container height="100%" display="grid" justify="center" align="center">
        <Container
          leftTopRadius="25px"
          rightTopRadius="25px"
          leftBottomRadius="10px"
          rightBottomRadius="10px"
          rows="repeat (3, max-content)"
          display="grid"
          padding="10px"
          justify="center"
          border={`1px solid ${Colours.border}`}
          height="max-content"
          width="max-content"
          marginTop="0px"
        >
          <Button>Follow</Button>
          <Button bgColour={Colours.white} textColor={Colours.text}>
            Rate
          </Button>
          <Container
            display="grid"
            columns="repeat(3, max-content)"
            marginTop="10px"
            width="max-content"
            justify="end"
          >
            <Text weight="600">
              {`${countFormatter(
                Math.floor(Math.random() * 1000000 + 1)
              )} followers`}
            </Text>
            <Dot />
            <Text weight="600">{`${rating_count} ratings`}</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
