import Card from '../components/card'
import { Box, Flex, Heading } from '@chakra-ui/react'
import data from './../data/dal.json'

const Page = () => {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        name={item.name}
        link={item.link}
        image={item.image}
      />
    )
  })
  return (
    <Box>
      <Heading as="h2" color={'white'} align={'center'} mb={5}>
        Date a Live
      </Heading>
      <Flex bg="gray.700" p={30} justifyContent={'space-evenly'} wrap="wrap">
        {cards}
      </Flex>
    </Box>
  )
}

export default Page
