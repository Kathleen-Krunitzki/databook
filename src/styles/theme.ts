import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        primary: {
            '100': '#e49251',
            '200': '#eeaeca',
            '300': '#9aadf6',
            '400': '#80ac8f',
            '500': '#807ac3',
            '600': '#d0817e',
        },
        secondary: {
            "100": "#FFFFFF",
            "200": "#F6F6F6",
            "400": "#DADADA",
            "700": "#636363",
            "800": "#353535",
            "900": "#121212",
        },
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    components: {
        Text: {
            baseStyle: {
                fontSize: "lg",
                fontWeight: "normal",
            },
        },
    },
    styles: {
        global: {
            body: {
                bg: "secondary.200",
                color: "secondary.900",
            },
        },
    },
})