import { withStyles } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"
import Styles from "./styles"
import { connect } from "react-redux"

class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log("Logging Error", error, errorInfo)
    }

    render() {
        const { message } = this.props
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>{message || "Something went wrong."}</h1>
        }
        return this.props.children
    }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})

ErrorBoundary.propTypes = {
    // ...prop type definitions here
    message: PropTypes.string,
}

export default withStyles(Styles)(
    connect(mapStateToProps, mapDispatchToProps())(ErrorBoundary)
)
