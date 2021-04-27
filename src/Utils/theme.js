import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ff8e47",
        },
        secondary: {
            main: "#a972fc",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
            primary: "#fcd144",
        },
    },
})

export default theme
