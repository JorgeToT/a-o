import { Heading, Box, Flex, Link } from '@chakra-ui/react'
import dataInfo from '../../data/animeData.json'
import Card from '../../components/card'

export async function getServerSideProps(context) {
  const { id } = context.query
  return {
    props: { id: id }, // will be passed to the page component as props
  }
}

const Anime = ({ id }) => {
  const animeIndex = dataInfo.findIndex(item => {
    return item.id === +id
  })
  const animeData = dataInfo[animeIndex].data
  const cards = animeData.map(item => {
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
      <Link href="/">Home</Link>
      <Heading as="h2" color={'white'} align={'center'} mb={5}>
        {dataInfo[animeIndex].name}
      </Heading>
      <Flex bg="gray.700" p={30} justifyContent={'space-evenly'} wrap="wrap">
        {cards}
      </Flex>
    </Box>
  )
}

export default Anime
