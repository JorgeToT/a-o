import { Box, Link, List, ListItem } from '@chakra-ui/react'

const Page = () => {
  return (
    <Box>
      <List>
        <ListItem>
          <Link href="/anime/1">Date a Live</Link>
        </ListItem>
        <ListItem>
          <Link href="/anime/2">Psycho Pass</Link>
        </ListItem>
        <ListItem>
          <Link href="/anime/3">Dragon Ball</Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default Page
