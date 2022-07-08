import Head from 'next/head'
import { Box } from '@chakra-ui/react'

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anime Order</title>
        <link rel="icon" href="/images/DAL/icon.jpg" />
      </Head>

      <Box pt={6} px={20}>
        {children}
      </Box>
    </Box>
  )
}

export default Main
