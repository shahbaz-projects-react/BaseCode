import "./App.css"
import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../Utils/theme"
import Header from "../Components/Header"

class App extends React.PureComponent {
    render() {
        const { REACT_APP_TITLE = "" } = process.env
        return (
            <ThemeProvider theme={theme}>
                <Header title={REACT_APP_TITLE} />
            </ThemeProvider>
        )
    }
}

export default App
