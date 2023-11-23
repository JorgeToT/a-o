import { Box, Heading, Flex } from '@chakra-ui/react'
import dataInfo from '../data/animeData.json'
import Card from '../components/card'

const Page = () => {
  const cards = dataInfo.map((item, index) => {
    return (
      <Card
        key={index}
        name={item.name}
        image={item.image}
        link={`/anime/${index}`}
      />
    )
  })
  return (
    <Box>
      <Heading as="h1" variant={'section-title'} color="white" align="center">
        Anime List
      </Heading>
      <Flex bg="blue.800" p={30} justifyContent={'space-evenly'} wrap="wrap">
        {cards}
      </Flex>
    </Box>
  )
}

export default Page
