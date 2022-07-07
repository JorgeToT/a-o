import { Box, Text, Image, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'

const BoxImage = styled.span`
  &:hover div {
    transform: scale(1.02);
  }
`

const Card = props => {
  return (
    <BoxImage>
      <Box
        w={400}
        h={400}
        mb={10}
        mx={10}
        bg="whiteAlpha.100"
        borderRadius="lg"
        boxShadow="lg"
        p={8}
      >
        <Link href={props.link} cursor={'pointer'} target="_blank">
          <Image
            h={300}
            src={props.image}
            mx="auto"
            mb={4}
            objectFit="cover"
            alt={props.name}
          />
          <Text align={'center'}>{props.name}</Text>
        </Link>
      </Box>
    </BoxImage>
  )
}

export default Card
