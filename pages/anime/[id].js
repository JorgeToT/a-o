import { Heading, Box, Flex, Link } from '@chakra-ui/react'
import dataInfo from '../../data/animeData.json'
import Card from '../../components/card'

export async function getServerSideProps(context) {
  const { id } = context.query
  return {
    props: { id: id },
  }
}

const Anime = ({ id }) => {
  const cards = dataInfo[id].data.map(item => {
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
      <Flex alignItems={'center'} mb={4}>
        <Link href="/" mr={20}>Home</Link>
        <Heading as="h2" align={'center'} mb={5} display={'contents'} variant="section-title">
          {dataInfo[id].name}
        </Heading>
      </Flex>
      <Flex bg="blue.800" p={30} justifyContent={'space-evenly'} wrap="wrap">
        {cards}
      </Flex>
    </Box>
  )
}

export default Anime
