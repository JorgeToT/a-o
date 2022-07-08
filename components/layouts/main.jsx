import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anime Order</title>
        <link rel="icon" href="/images/DAL/icon.jpg" />
      </Head>

      <Container maxW={'container.2xl'} pt={6}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
