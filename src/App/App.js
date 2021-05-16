import "./App.css"
import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../Utils/theme"
import Header from "../Components/Header"
import ContentList from "../Components/ContentList"
import Content from "../Utils/content"
import ErrorBoundary from "../Components/ErrorBoundary"

class App extends React.PureComponent {
    render() {
        const { REACT_APP_TITLE = "" } = process.env
        return (
            <ThemeProvider theme={theme}>
                <ErrorBoundary message='Something went wrong. Refresh page.'>
                    <Header title={REACT_APP_TITLE} />
                    <ContentList list={Content} />
                </ErrorBoundary>
            </ThemeProvider>
        )
    }
}

export default App
