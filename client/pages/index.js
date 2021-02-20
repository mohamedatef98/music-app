import request, { gql } from 'graphql-request'
import { useContext, useMemo } from 'react'
import Layout from '../components/Layout'
import Constants, { contextValue } from '../context/Constants'
import Carousel from '../components/Carousel'

export default function Home({ artists = [] }) {
  const { host } = useContext(Constants)
  const artistsCarouselData = useMemo(() => {
    return [...artists, ...artists, ...artists, ...artists, ...artists, ...artists, ...artists, ...artists, ...artists].map((artist, i) => ({
      ...artist,
      key: `${artist.id}-${i}`,
      href: `/artist/${artist.id}`,
      src: `${host}/${artist.imageFile.directory}/${artist.imageFile.name}`,
      text: artist.name
    }))
  }, [artists])
  return (
    <Layout>
      <Carousel
        title='Artists'
        data={artistsCarouselData}
      />
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const GET_ARTISTS = gql`
    query getArtists {
      artists {
        id
        name
        imageFile {
          id
          name
          directory
        }
      }
    }
  `

  const { artists } = await request(contextValue.api, GET_ARTISTS)
  return {
    props: {
      artists
    }
  }
}

