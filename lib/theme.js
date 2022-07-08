import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      bg: '#202023',
    },
  },
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 40,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        color: 'white',
      },
    },
  },
  Link: {
    baseStyle: {
      color: '#88ccca',
      textUnderlineOffset: 3,
      fontSize: 20,
    },
  },
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
}

const colors = {
  glassTeal: '#88ccca',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
})

export default theme
