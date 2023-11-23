import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      bg: '#171923',
    },
  },
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 30,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 6,
        color: 'white',
      },
    },
  },
  Link: {
    baseStyle: {
      color: '#88ccca',
      textUnderlineOffset: 3,
      fontSize: 16,
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
