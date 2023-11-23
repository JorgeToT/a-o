import { Box, Text, Image, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'

const BoxImage = styled.span`
  &:hover div {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
  }
`

const Card = props => {
  return (
    <BoxImage>
      <Box
        w={400}
        h={500}
        mb={10}
        mx={10}
        bg="gray.900"
        borderRadius="lg"
        boxShadow="lg"
        p={8}
      >
        <Link
          href={props.link}
          cursor={'pointer'}
          _hover={{ textDecoration: 'none' }}
        >
          <Image
            h={350}
            w={250}
            src={props.image}
            mx="auto"
            mb={5}
            borderRadius={'lg'}
            objectFit="cover"
            alt={props.name}
          />
          <Text
            align={'center'}
            fontSize={22}
            fontWeight={'semibold'}
            color={'white'}
          >
            {props.name}
          </Text>
        </Link>
      </Box>
    </BoxImage>
  )
}

export default Card
